'use client'
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconCircleCheck,
} from "@tabler/icons-react";
import { portfolioIdentity } from "@/lib/constantes";
import { FluentLink } from "../common/FluentLink.component";

export const pageWidth = 1160;

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Text
      c="dimmed"
      size="xs"
      fw={700}
      tt="uppercase"
      style={{ letterSpacing: ".16em" }}
    >
      {children}
    </Text>
  );
}

export function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="light"
      color="green"
      radius="xl"
      size="lg"
      tt="none"
      leftSection={<IconCircleCheck size={13} />}
      styles={{
        root: { height: "auto", minHeight: 30, paddingInline: 12 },
        label: { whiteSpace: "normal" },
      }}
    >
      {children}
    </Badge>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Stack gap="md" maw={760} mb={42}>
      <Badge
        variant="light"
        color="gray"
        radius="xl"
        size="lg"
        tt="uppercase"
        w="fit-content"
        styles={{ root: { height: 30 } }}
      >
        {eyebrow}
      </Badge>
      <Eyebrow>{portfolioIdentity.name.toUpperCase()} · PORTFOLIO</Eyebrow>
      <Title
        order={1}
        size="clamp(2.5rem, 5vw, 3.75rem)"
        style={{ letterSpacing: "-.06em", lineHeight: 1.05 }}
      >
        {title}
      </Title>
      <Text c="dimmed" size="lg" maw={650} lh={1.65}>
        {description}
      </Text>
    </Stack>
  );
}

export function ProjectIllustration() {
  return (
    <Box
      p={{ base: 28, sm: 42 }}
      mih={{ base: 220, sm: 320 }}
      style={{
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "light-dark(radial-gradient(circle at 30% 25%, rgba(190,218,199,.7), transparent 32%), radial-gradient(circle at 30% 25%, rgba(76,119,91,.35), transparent 36%)), light-dark(linear-gradient(140deg,#eceee9,#d9dcd5), linear-gradient(140deg,#232923,#1b1d1b))",
      }}
    >
      <Paper
        p="md"
        radius="lg"
        shadow="xl"
        w={200}
        h={145}
        style={{
          zIndex: 1,
          transform: "rotate(-7deg)",
          backgroundColor: "light-dark(rgba(255,255,255,.82),rgba(35,38,35,.88))",
          border: "1px solid light-dark(rgba(255,255,255,.7),rgba(255,255,255,.12))",
        }}
      >
        <Group gap={5}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              w={7}
              h={7}
              bg="gray.5"
              style={{ borderRadius: "50%" }}
            />
          ))}
        </Group>
        <Title
          order={2}
          ta="center"
          c="var(--mantine-color-text)"
          mt={22}
          size={48}
          style={{ letterSpacing: "-.12em" }}
        >
          DL
        </Title>
      </Paper>
      <Text pos="absolute" top="18%" right="19%" c="green.8" size="xl">
        ✳
      </Text>
    </Box>
  );
}

export function CtaBand({
  title,
  description,
  buttonLabel = "Conversemos",
  href = "/contacto",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
}) {
  const button = href.startsWith("http") ? (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      radius="xl"
      size="md"
      rightSection={<IconArrowUpRight size={17} />}
      styles={{ root: { flexShrink: 0 } }}
    >
      {buttonLabel}
    </Button>
  ) : (
    <Button
      component="a"
      href={href}
      radius="xl"
      size="md"
      rightSection={<IconArrowUpRight size={17} />}
      styles={{ root: { flexShrink: 0 } }}
    >
      {buttonLabel}
    </Button>
  );
  return (
    <Paper p={{ base: "lg", sm: 40 }} radius="lg" mt={35} style={{ backgroundColor: "var(--mantine-color-text)", color: "var(--mantine-color-body)" }}>
      <Group justify="space-between" align="center" gap="xl">
        <Stack gap="xs" maw={680}>
          <Eyebrow>COLABORACIÓN · {portfolioIdentity.name.toUpperCase()}</Eyebrow>
          <Title
            order={2}
            c="var(--mantine-color-body)"
            size={28}
            style={{ letterSpacing: "-.04em" }}
          >
            {title}
          </Title>
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        </Stack>
        {button}
      </Group>
    </Paper>
  );
}

export function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container
      size={pageWidth}
      px={{ base: 18, sm: 28, lg: 32 }}
      py={{ base: 38, sm: 64 }}
    >
      {children}
    </Container>
  );
}

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Anchor
      href={href}
      c="var(--mantine-color-text)"
      fw={600}
      size="sm"
      underline="never"
      style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
    >
      {children}
      <IconArrowDown size={15} />
    </Anchor>
  );
}
