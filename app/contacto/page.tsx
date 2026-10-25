import { Metadata } from "next";
import ContactForm from "@/components/portfolio/ContactForm";
import {
  Anchor,
  Box,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconClock,
  IconLock,
  IconMail,
  IconMessageCircle,
} from "@tabler/icons-react";
import { Eyebrow, StatusBadge } from "@/components/portfolio/UiParts";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";

export const metadata: Metadata = {
  title: `Contacto · ${portfolioIdentity.name}`,
  description:
    `Contacta con ${portfolioIdentity.name} para conversar sobre proyectos y oportunidades.`,
};

export default function ContactPage() {
  return (
    <Container
      component="main"
      size={1160}
      px={{ base: 18, sm: 28, lg: 32 }}
      py={{ base: 38, sm: 64 }}
    >
      <Grid align="end" gutter="xl" mb={42}>
        <GridCol span={{ base: 12, md: 7 }}>
          <Stack gap="md">
            <StatusBadge>Disponible para conversar</StatusBadge>
            <Eyebrow>CONTACTO</Eyebrow>
            <Title
              order={1}
              size="clamp(3rem, 6vw, 4.5rem)"
              style={{ letterSpacing: "-.06em", lineHeight: 1.05 }}
            >
              Hablemos.
            </Title>
            <Text c="dimmed" size="lg" maw={570} lh={1.65}>
              Estoy interesado en nuevos desafíos, colaboraciones y proyectos de
              desarrollo. Cuéntame qué tienes en mente.
            </Text>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 5 }}>
          <Paper withBorder radius="lg" p="md">
            <Group wrap="nowrap">
              <ThemeIcon variant="light" color="gray" radius="md" size={42}>
                <IconClock size={20} />
              </ThemeIcon>
              <Stack gap={3}>
                <Text size="sm" fw={700}>
                  Contacto directo
                </Text>
                <Text size="xs" c="dimmed">
                  WhatsApp · {portfolioIdentity.whatsappNumber}
                </Text>
                <Text size="xs" c="dimmed">
                  Normalmente respondo tan pronto como me es posible.
                </Text>
              </Stack>
            </Group>
          </Paper>
        </GridCol>
      </Grid>
      <Grid align="start" gutter="lg">
        <GridCol span={{ base: 12, md: 5 }}>
          <Stack gap="sm">
            <Eyebrow>CANALES DIRECTOS</Eyebrow>
            {[
              {
                label: "WhatsApp",
                description: "La forma más rápida de contactarme",
                href: portfolioLinks.whatsapp,
                icon: IconMessageCircle,
                color: "green",
              },
              {
                label: "LinkedIn",
                description: "Conectemos profesionalmente",
                href: portfolioLinks.linkedin,
                icon: IconBrandLinkedin,
                color: "blue",
              },
              {
                label: "GitHub",
                description: "Explora mis repositorios",
                href: portfolioLinks.github,
                icon: IconBrandGithub,
                color: "gray",
              },
            ].map(({ label, description, href, icon: Icon, color }) => (
              <Paper
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                withBorder
                radius="lg"
                p="md"
                style={{
                  display: "block",
                  color: "var(--mantine-color-text)",
                  textDecoration: "none",
                  transition: "transform .18s ease, border-color .18s ease",
                }}
              >
                <Group wrap="nowrap">
                  <ThemeIcon
                    variant="light"
                    color={color}
                    radius="md"
                    size={42}
                  >
                    <Icon size={20} />
                  </ThemeIcon>
                  <Stack gap={3} style={{ flex: 1 }}>
                    <Text size="sm" fw={700}>
                      {label}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {description}
                    </Text>
                  </Stack>
                  <IconArrowUpRight
                    size={17}
                    color="var(--mantine-color-dimmed)"
                  />
                </Group>
              </Paper>
            ))}
            <Paper p="md" radius="lg" bg="var(--mantine-color-default)">
              <Group align="start" wrap="nowrap">
                <IconLock size={17} />
                <Text size="xs" c="dimmed" lh={1.6}>
                  Tu información solo se utilizará para responder a tu consulta.
                  El formulario no envía datos a un servidor.
                </Text>
              </Group>
            </Paper>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 7 }}>
          <Paper
            withBorder
            radius="xl"
            p={{ base: "md", sm: "xl" }}
            shadow="sm"
          >
            <Stack gap="xs" mb="lg">
              <Eyebrow>INICIEMOS UNA CONVERSACIÓN</Eyebrow>
              <Title order={2} size={25}>
                Cuéntame tu idea
              </Title>
              <Text c="dimmed" size="sm">
                Completa los datos y prepararé un mensaje para WhatsApp.
              </Text>
            </Stack>
            <ContactForm />
          </Paper>
        </GridCol>
      </Grid>
      <Group justify="center" mt="xl" gap="xs">
        <Box w={7} h={7} bg="green.6" style={{ borderRadius: 99 }} />
        <Text c="dimmed" size="xs">
          Gracias por visitar mi portfolio. ¡Espero que podamos conversar
          pronto!
        </Text>
      </Group>
    </Container>
  );
}
