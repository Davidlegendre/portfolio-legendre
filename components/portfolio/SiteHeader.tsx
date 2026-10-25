"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import {
  Anchor,
  Badge,
  Button,
  Container,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";
import {
  IconDeviceDesktop,
  IconMoon,
  IconSun,
  IconArrowUpRight,
  IconHome,
  IconGridDots,
  IconUser,
  IconMail,
} from "@tabler/icons-react";

const winterWind = localFont({
  src: "../../fonts/Winter_Wind.ttf",
  weight: "400",
  display: "swap",
});

const navigation = [
  { href: "/home", label: "Inicio", icon: IconHome },
  { href: "/proyectos", label: "Proyectos", icon: IconGridDots },
  { href: "/acerca-de", label: "Acerca de", icon: IconUser },
  { href: "/contacto", label: "Contacto", icon: IconMail },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Paper
        component="header"
        radius={0}
        pos="sticky"
        top={0}
        style={{
          zIndex: 100,
          backdropFilter: "blur(18px)",
          backgroundColor:
            "light-dark(rgba(250,249,247,.88),rgba(16,16,16,.88))",
          borderBottom: "1px solid var(--mantine-color-default-border)",
        }}
      >
        <Container size={1160} px={{ base: 18, sm: 28, lg: 32 }}>
          <Group h={68} justify="space-between" wrap="nowrap">
            <Anchor
              component={Link}
              href="/home"
              underline="never"
              c="inherit"
              aria-label={`${portfolioIdentity.name}, inicio`}
            >
              <Group gap="10px" wrap="nowrap" align="center">
                <Badge
                  variant="filled"
                  radius="md"
                  size="lg"
                  styles={{
                    root: {
                      width: 34,
                      height: 34,
                      padding: 0,
                      backgroundColor: "var(--mantine-color-text)",
                      color: "var(--mantine-color-body)",
                    },
                    label: { fontSize: 15 },
                  }}
                >
                  D
                </Badge>
                <Text
                  fw={700}
                  size="sm"
                  style={{ whiteSpace: "nowrap", letterSpacing: "-.03em" }}
                >
                  <Text
                    component="span"
                    className={winterWind.className}
                    fw={400}
                    size="24"
                  >
                    {portfolioIdentity.name}
                  </Text>
                  <Text component="span" c="dimmed" fw={400}>
                    {" "}
                    · Portfolio
                  </Text>
                </Text>
              </Group>
            </Anchor>
            <Group
              visibleFrom="md"
              gap={4}
              component="nav"
              aria-label="Navegación principal"
              p={4}
              style={{
                border: "1px solid var(--mantine-color-default-border)",
                borderRadius: 999,
                background: "var(--mantine-color-body)",
              }}
            >
              {navigation.map(({ href, label }) => (
                <Anchor
                  key={href}
                  component={Link}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  underline="never"
                  c={pathname === href ? "var(--mantine-color-text)" : "dimmed"}
                  fw={pathname === href ? 600 : 400}
                  px="md"
                  py={8}
                  size="xs"
                  style={{
                    borderRadius: 999,
                    background:
                      pathname === href
                        ? "var(--mantine-color-default)"
                        : "transparent",
                  }}
                >
                  {label}
                </Anchor>
              ))}
            </Group>
            <Group gap="xs" wrap="nowrap">
              <SegmentedControl
                visibleFrom="md"
                size="sm"
                value={isMounted ? colorScheme : "light"}
                onChange={(value) =>
                  setColorScheme(value as "light" | "dark" | "auto")
                }
                withItemsBorders={false}
                radius="xl"
                data={[
                  { value: "light", label: <IconSun size={14} /> },
                  { value: "dark", label: <IconMoon size={14} /> },
                  { value: "auto", label: <IconDeviceDesktop size={14} /> },
                ]}
                aria-label="Tema de color"
              />
              <Button
                component="a"
                href={portfolioLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                radius="xl"
                size="xs"
                styles={{
                  root: {
                    backgroundColor: "var(--mantine-color-text)",
                    color: "var(--mantine-color-body)",
                  },
                }}
                rightSection={<IconArrowUpRight size={14} />}
              >
                Hablemos
              </Button>
            </Group>
          </Group>
        </Container>
      </Paper>
      <Paper
        component="nav"
        hiddenFrom="md"
        radius={0}
        px="xs"
        py={5}
        style={{
          position: "fixed",
          zIndex: 110,
          bottom: 0,
          left: 0,
          right: 0,
          backdropFilter: "blur(18px)",
          backgroundColor:
            "light-dark(rgba(250,249,247,.92),rgba(16,16,16,.92))",
          borderTop: "1px solid var(--mantine-color-default-border)",
        }}
        aria-label="Navegación móvil"
      >
        
        <Group justify="space-around" wrap="nowrap">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Anchor
              key={href}
              component={Link}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              underline="never"
              c={pathname === href ? "var(--mantine-color-text)" : "dimmed"}
              py={3}
              style={{ flex: 1, textAlign: "center" }}
            >
              <Stack align="center" gap={2}>
                <Icon size={19} stroke={1.7} />
                <Text size="9px" fw={pathname === href ? 700 : 400}>
                  {label}
                </Text>
              </Stack>
            </Anchor>
          ))}
        </Group>
        <SegmentedControl
          size="sm"
          style={{margin: '0 auto', width: '100%'}}
          mt={10}
          value={isMounted ? colorScheme : "light"}
          onChange={(value) =>
            setColorScheme(value as "light" | "dark" | "auto")
          }
          withItemsBorders={false}
          radius="xl"
          data={[
            { value: "light", label: <IconSun size={14} /> },
            { value: "dark", label: <IconMoon size={14} /> },
            { value: "auto", label: <IconDeviceDesktop size={14} /> },
          ]}
          aria-label="Tema de color"
        />
      </Paper>
    </>
  );
}
