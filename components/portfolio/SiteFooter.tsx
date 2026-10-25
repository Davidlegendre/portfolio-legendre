import { Anchor, Container, Group, Stack, Text } from "@mantine/core";
import { IconCircleCheck, IconHeartFilled } from "@tabler/icons-react";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";

export default function SiteFooter() {
  return (
    <Container
      component="footer"
      size={1160}
      px={{ base: 18, sm: 28, lg: 32 }}
      py="xl"
      style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="center" gap="lg" wrap="wrap">
          <Stack gap={4}>
            <Text size="sm" fw={700}>
              {portfolioIdentity.name}{" "}
              <Text span c="dimmed" fw={400}>
                · {portfolioIdentity.role}
              </Text>
            </Text>
            <Text size="xs" c="dimmed">
              © {new Date().getFullYear()} · Hecho con intención.
            </Text>
          </Stack>
          <Group gap={7}>
            <IconCircleCheck size={15} color="var(--mantine-color-green-7)" />
            <Text size="xs" c="dimmed">
              Abierto a nuevas oportunidades
            </Text>
          </Group>
          <Group gap="md">
            <Anchor
              href={portfolioLinks.github}
              target="_blank"
              rel="noreferrer"
              size="xs"
              c="var(--mantine-color-text)"
              underline="hover"
            >
              GitHub
            </Anchor>
            <Anchor
              href={portfolioLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              size="xs"
              c="blue"
              underline="hover"
            >
              LinkedIn
            </Anchor>
            <Anchor href="/contacto" size="xs" c="var(--mantine-color-text)" underline="hover">
              Contacto
            </Anchor>
          </Group>
        </Group>
        <Group justify="center" gap={6} mb={{base: 80, md: 0}}>
          <Text size="xs" c="dimmed">Powered by <Text span fw={600} c="var(--mantine-color-text)">GitHub Copilot</Text></Text>
          <IconHeartFilled size={12} color="var(--mantine-color-red-6)" aria-label="con cariño" />
          <Text size="xs" c="dimmed">Diseño con <Text span fw={600} c="var(--mantine-color-text)">Google Stitch</Text></Text>
        </Group>
      </Stack>
    </Container>
  );
}
