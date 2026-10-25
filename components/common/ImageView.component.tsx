"use client";
import {
  Box,
  Flex,
  Modal,
  Paper,
  Text,
  CloseButton,
  ActionIcon,
  Group,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { useCallback, useRef, useState, useEffect } from "react";
import { IconZoomIn, IconZoomOut, IconZoomReset } from "@tabler/icons-react";

const MIN_ZOOM = 0;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.1;

export default function ImageViewComponent({
  open,
  handlerClose,
  data,
}: {
  open: boolean;
  handlerClose: () => void;
  data: { url?: string; filename?: string } | null;
}) {
  const { colorScheme } = useMantineColorScheme();
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  // FIX 1: usar useState en vez de useRef para que React re-renderice y el cursor cambie
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [open]);

  const clampZoom = (val: number) =>
    Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, val));

  // FIX 3: resetear pan cuando zoom llega a 1 desde los botones
  const applyZoom = (newZoom: number) => {
    const clamped = clampZoom(newZoom);
    setZoom(clamped);
    if (clamped === 1) setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = () => applyZoom(zoom + ZOOM_STEP);
  const handleZoomOut = () => applyZoom(zoom - ZOOM_STEP);
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

    const zoomInValid = zoom <= 0.1;

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
    setZoom((z) => {
      const next = clampZoom(z + delta);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (zoomInValid) return;
      setIsDragging(true); // FIX 1: setState dispara re-render → cursor se actualiza
      lastPos.current = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    },
    [zoom],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false); // FIX 1: vuelve a grab al soltar
  }, []);

  const lastDist = useRef<number | null>(null);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      if (lastDist.current !== null) {
        const delta = (dist - lastDist.current) * 0.01;
        setZoom((z) => {
          const next = clampZoom(z + delta);
          if (next === 1) setPan({ x: 0, y: 0 });
          return next;
        });
      }
      lastDist.current = dist;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    lastDist.current = null;
  }, []);

  const zoomPercent = Math.round(zoom * 100);


  return (
    <Modal
      opened={open}
      onClose={handlerClose}
      size="auto"
      withCloseButton={false}
      centered
      zIndex={210}
      padding={0}
      styles={{
        content: {
          maxWidth: "95vw",
          maxHeight: "95vh",
          overflow: "hidden",
          backgroundColor:
            colorScheme === "dark"
              ? "rgba(241, 241, 241, 0.15)"
              : "rgba(255, 255, 255, 0.19)",
          backdropFilter: "blur(13px)",
        },
        body: {
          padding: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
      }}
    >
      <Box
        style={{ display: "flex", flexDirection: "column", maxHeight: "95vh" }}
      >
        {/* Header */}
        <Paper bg="transparent" radius={0}>
          <Flex
            style={{ width: "100%", padding: "4px 8px" }}
            align="center"
            justify="space-between"
          >
            <Flex direction={{ base: "column", md: "row" }} gap={7} align={'center'}>
              <Text c="white" size="sm" fw={600}>
                {data?.filename || "Vista previa"}
              </Text>

              <Group gap={4}>
                <Tooltip label="Alejar" position="bottom" withArrow>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    onClick={handleZoomOut}
                    disabled={zoom <= MIN_ZOOM}
                    style={{ color: "white" }}
                  >
                    <IconZoomOut size={16} />
                  </ActionIcon>
                </Tooltip>

                <Text
                  c="white"
                  size="xs"
                  fw={500}
                  style={{
                    minWidth: 40,
                    textAlign: "center",
                    fontVariantNumeric: "tabular-nums",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={handleReset}
                >
                  {zoomPercent}%
                </Text>

                <Tooltip label="Acercar" position="bottom" withArrow>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    onClick={handleZoomIn}
                    disabled={zoom >= MAX_ZOOM}
                    style={{ color: "white" }}
                  >
                    <IconZoomIn size={16} />
                  </ActionIcon>
                </Tooltip>

                <Tooltip label="Restablecer" position="bottom" withArrow>
                  <ActionIcon
                    variant="subtle"
                    color="gray"
                    size="sm"
                    onClick={handleReset}
                    style={{ color: "white" }}
                  >
                    <IconZoomReset size={16} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Flex>

            <CloseButton
              onClick={handlerClose}
              variant="transparent"
              c="white"
              size="md"
            />
          </Flex>
        </Paper>

        {/* Image Container */}
        {data && (
          <Box
            ref={containerRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              //   width: "calc(90vw)",
              //   maxWidth: "90vw",
              //   height: "calc(95vh - 48px)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // FIX 1: isDragging ahora es state, el cursor se re-renderiza correctamente
              cursor: zoomInValid ? "default" : isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            <img
              src={data.url || ""}
              alt={data.filename || "Imagen"}
              draggable={false}
              style={{
                // FIX 2: mantener maxWidth/maxHeight siempre activos en zoom=1,
                // y al hacer zoom usar transform sin tocar max-width/max-height
                // para que scale() reduzca visualmente sin que el layout "salte"
                maxWidth: "100%",
                // maxHeight: "calc(95vh - 88px)",
                width: "auto",
                height: "auto",
                // objectFit: "cover",
                display: "block",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                // borderRadius: radiusStyle,
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.15s ease",
                pointerEvents: "none",
              }}
            />
          </Box>
        )}
      </Box>
    </Modal>
  );
}
