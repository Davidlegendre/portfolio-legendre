import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import {
  Tabs,
  rem,
  Box,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  Paper,
  Flex,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { radiusStyle } from "@/lib/constantes";

export interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ComponentType<{
    size?: string | number;
    style?: React.CSSProperties;
    stroke?: number;
  }>;
}

interface TabControlCustomProps {
  tabs: TabItem[];
  defaultValue?: string;
  selectedTabId?: string;
  orientation?: "horizontal" | "vertical";
  color?: string;
  radius?: string | number;
  activateTabWithKeyboard?: boolean;
  allowTabDeactivation?: boolean;
  keepMounted?: boolean;
  className?: string;
  onTabChange?: (value: string | null) => void;
  forceVerticalOnMobile?: boolean;
  scrollableOnMobile?: boolean;
  esCentro?: boolean;
}

export default function TabsCustom({
  tabs,
  defaultValue,
  selectedTabId,
  orientation = "horizontal",
  color = "red",
  radius,
  activateTabWithKeyboard = true,
  allowTabDeactivation = false,
  keepMounted = true,
  className,
  onTabChange,
  forceVerticalOnMobile = false,
  scrollableOnMobile = true,
  esCentro = false,
}: TabControlCustomProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const getInitialValue = () => {
    if (selectedTabId && tabs.some((t) => t.id === selectedTabId))
      return selectedTabId;
    if (defaultValue && tabs.some((t) => t.id === defaultValue))
      return defaultValue;
    return tabs[0]?.id || null;
  };

  const [value, setValue] = useState<string | null>(getInitialValue());
  const [hasOverflow, setHasOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Píldora en coordenadas VISUALES dentro del track (descuenta el scroll)
  const [pill, setPill] = useState<{ left: number; width: number } | null>(
    null,
  );
  const [pillReady, setPillReady] = useState(false);
  // Mientras el track está scrolleando (nativo o por los botones), la
  // píldora se sincroniza sin transición para evitar el "pelea" entre el
  // scroll y la animación CSS (glitch al hacer click + auto-scroll).
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollSettleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  // Contenedor con overflow real (reemplaza al ScrollArea de Mantine)
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // ── Sincronizar selectedTabId externo ───────────────────────────────────
  useEffect(() => {
    if (selectedTabId && tabs.some((t) => t.id === selectedTabId)) {
      setValue(selectedTabId);
    }
  }, [selectedTabId, tabs]);

  // ── Calcular píldora ─────────────────────────────────────────────────────
  const recalcPill = () => {
    const activeId = value ?? tabs[0]?.id;
    const activeEl = activeId ? tabRefs.current[activeId] : null;
    if (!activeEl) return;

    // La píldora vive dentro del mismo Box que hace scroll junto con los
    // tabs (offsetParent = ese Box), así que el navegador ya la traslada
    // visualmente al scrollear. NO restar scrollLeft aquí — hacerlo
    // duplica la compensación y la píldora queda desfasada apenas se
    // scrollea con los botones.
    setPill({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    });
  };

  useLayoutEffect(() => {
    recalcPill();
  }, [value, tabs, isMobile]);

  // Habilitar transición solo después del primer cálculo
  useLayoutEffect(() => {
    if (pill && !pillReady) {
      const raf = requestAnimationFrame(() => setPillReady(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [pill]);

  // ── Estado de los botones de navegación ──────────────────────────────────
  const recalcScrollButtons = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < max - 1);
  }, []);

  // ── Detectar overflow + recalcular en resize y en scroll ────────────────
  useEffect(() => {
    const check = () => {
      if (viewportRef.current && listRef.current) {
        setHasOverflow(
          listRef.current.scrollWidth > viewportRef.current.clientWidth,
        );
      }
      recalcPill();
      recalcScrollButtons();
    };

    // Handler específico para el evento "scroll": desactiva la transición
    // de la píldora mientras el scroll está en curso y la reactiva 120ms
    // después de que se detiene, para que la sincronización sea 1:1 con
    // el scroll (sin jitter) y solo anime cuando corresponde a un cambio
    // de tab real.
    const onScroll = () => {
      setIsScrolling(true);
      recalcPill();
      recalcScrollButtons();
      if (scrollSettleRef.current) clearTimeout(scrollSettleRef.current);
      scrollSettleRef.current = setTimeout(() => {
        setIsScrolling(false);
        recalcPill();
      }, 120);
    };

    check();

    const ro = new ResizeObserver(check);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener("resize", check);

    const viewport = viewportRef.current;
    if (viewport) {
      viewport.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
      if (viewport) viewport.removeEventListener("scroll", onScroll);
      if (scrollSettleRef.current) clearTimeout(scrollSettleRef.current);
    };
  }, [tabs, value, recalcScrollButtons]);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = viewportRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (!tabs || tabs.length === 0) return null;

  const handleTabChange = (newValue: string | null) => {
    setValue(newValue);
    onTabChange?.(newValue);
  };

  const getOrientation = () =>
    isMobile && forceVerticalOnMobile ? "vertical" : orientation;

  // ── Design tokens ────────────────────────────────────────────────────────
  const accentColor =
    theme.colors[color]?.[isDark ? 4 : 6] ?? theme.colors.red[isDark ? 4 : 6];

  const trackBg = isDark ? "rgba(24, 24, 24)" : "rgba(118, 118, 128, 0.22)";

  const pillBg = isDark ? "rgb(43, 43, 43)" : "#ffffff";

  const navBtnColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)";

  const showNav = hasOverflow && (!isMobile || scrollableOnMobile) && getOrientation() === "horizontal";

  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      orientation={getOrientation()}
      variant="unstyled"
      color={color}
      radius={radius}
      activateTabWithKeyboard={activateTabWithKeyboard}
      allowTabDeactivation={allowTabDeactivation}
      keepMounted={keepMounted}
      className={className}
      style={{
        position: 'relative'
      }}
    >
      {/* ── Track ─────────────────────────────────────────────────────────── */}
      <Flex align="center" gap={4} ref={trackRef}>
        {showNav && (
          <ActionIcon
            variant="subtle"
            radius="xl"
            size="sm"
            onClick={() => scrollByAmount("left")}
            disabled={!canScrollLeft}
            style={{
              flexShrink: 0,
              color: navBtnColor,
              opacity: canScrollLeft ? 1 : 0.25,
              transition: "opacity 0.18s ease",
            }}
            aria-label="Desplazar a la izquierda"
          >
            <IconChevronLeft size={16} stroke={1.75} />
          </ActionIcon>
        )}

        <Paper
          bg={trackBg}
          radius={radiusStyle}
          style={{
            overflow: "hidden",
            border: `2px solid transparent`,
            flex: 1,
            minWidth: 0,
          }}
          m={esCentro ? -1 : 0}
        >
          {/* Contenedor con scroll real, sin scrollbar visible */}
          <Box
            ref={viewportRef}
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            className="tabs-custom-viewport"
          >
            {/* Contenedor relativo: base para offsetLeft de los tabs */}
            <Box style={{ position: "relative" }}>
              {/* ── Píldora decorativa — clippeada por el Paper ── */}
              {pill && (
                <Paper
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    left: pill.left,
                    width: pill.width,
                    height: "100%",
                    background: pillBg,
                    borderRadius: `${radiusStyle}`,
                    borderBottom: "none",
                    pointerEvents: "none",
                    transition:
                      pillReady && !isScrolling
                        ? "left 0.27s cubic-bezier(0.4,0,0.2,1), width 0.27s cubic-bezier(0.4,0,0.2,1)"
                        : "none",
                    willChange: "left, width",
                  }}
                />
              )}

              {/* ── Lista de tabs ── */}
              <Tabs.List
                ref={listRef as React.RefObject<HTMLDivElement>}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  gap: 0,
                  flexWrap: "nowrap",
                  display: "flex",
                  alignItems: "flex-end",
                  overflow: "visible",
                  position: "relative",
                  justifyContent: esCentro
                    ? isMobile && scrollableOnMobile && hasOverflow
                      ? "flex-start"
                      : esCentro
                        ? "center"
                        : "flex-start"
                    : "flex-start",
                }}
              >
                {tabs.map((tab) => {
                  const isActive = value === tab.id;
                  const isDisabled = tab.disabled || false;
                  const IconComponent = tab.icon;

                  return (
                    <Tabs.Tab
                      key={tab.id}
                      value={tab.id}
                      disabled={isDisabled}
                      ref={(el) => {
                        tabRefs.current[tab.id] = el;
                      }}
                      style={{
                        flex:
                          isMobile && scrollableOnMobile
                            ? "0 0 auto"
                            : "1 0 auto",
                        minWidth:
                          isMobile && scrollableOnMobile ? rem(72) : "auto",
                        height: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        position: "relative",
                        cursor: isDisabled ? "not-allowed" : "pointer",
                        opacity: isDisabled ? 0.3 : 1,
                        pointerEvents: isDisabled ? "none" : "auto",
                        WebkitTapHighlightColor: "transparent",
                        outline: "none",
                        zIndex: 0,
                        padding: 7,
                        transition:
                          "transform 0.27s cubic-bezier(0.4,0,0.2,1), " +
                          "opacity 0.18s ease",
                      }}
                    >
                      <Flex
                        gap={7}
                        direction={esCentro ? "column" : "row"}
                        align={"center"}
                        justify={"center"}
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        {IconComponent && (
                          <Box
                            style={{
                              display: "flex",
                              color: isDisabled
                                ? isDark
                                  ? "rgba(255,255,255,0.22)"
                                  : "rgba(0,0,0,0.22)"
                                : isActive
                                  ? accentColor
                                  : isDark
                                    ? "rgba(255,255,255,0.45)"
                                    : "rgba(0,0,0,0.38)",
                              transition:
                                "color 0.18s ease, transform 0.22s cubic-bezier(0.4,0,0.2,1)"
                            }}
                          >
                            <IconComponent
                              size={esCentro ? 18 : 15}
                              stroke={isActive ? 2.2 : 1.5}
                            />
                          </Box>
                        )}
                        <Text
                          style={{
                            fontWeight: isActive ? 600 : 400,
                            lineHeight: 1.2,
                            textAlign: "center",
                            color: isDisabled
                              ? isDark
                                ? "rgba(255,255,255,0.22)"
                                : "rgba(0,0,0,0.22)"
                              : isActive
                                ? accentColor
                                : isDark
                                  ? "rgba(255,255,255,0.45)"
                                  : "rgba(0,0,0,0.38)",
                            transition: "color 0.18s ease",
                            WebkitUserSelect: "none",
                          }}
                        >
                          {tab.title}
                        </Text>
                      </Flex>
                    </Tabs.Tab>
                  );
                })}
              </Tabs.List>
            </Box>
          </Box>
        </Paper>

        {showNav && (
          <ActionIcon
            variant="subtle"
            radius="xl"
            size="sm"
            onClick={() => scrollByAmount("right")}
            disabled={!canScrollRight}
            style={{
              flexShrink: 0,
              color: navBtnColor,
              opacity: canScrollRight ? 1 : 0.25,
              transition: "opacity 0.18s ease",
            }}
            aria-label="Desplazar a la derecha"
          >
            <IconChevronRight size={16} stroke={1.75} />
          </ActionIcon>
        )}
      </Flex>

      {/* Oculta la scrollbar nativa en navegadores WebKit */}
      <style jsx>{`
        .tabs-custom-viewport::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ── Contenido ── */}
      <Box pt={rem(12)}>{tabs.find((tab) => tab.id === value)?.content}</Box>
    </Tabs>
  );
}