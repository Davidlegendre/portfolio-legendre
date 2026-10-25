import { Metadata } from "next";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBrandGithub,
  IconCircleCheck,
  IconCode,
  IconFileCv,
  IconSparkles,
} from "@tabler/icons-react";
import { CtaBand, Eyebrow, StatusBadge } from "@/components/portfolio/UiParts";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import { getProjects } from "@/lib/actions/portfolio.actions";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";

export const metadata: Metadata = {
  title: `Inicio · ${portfolioIdentity.name}`,
  description: `Portfolio de ${portfolioIdentity.fullName}, ${portfolioIdentity.role}.`,
};

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <Box component="main" pb={60}>
      <Container size={1160} px={{ base: 18, sm: 28, lg: 32 }}>
        <Grid
          align="center"
          gutter={{ base: 25, md: 50 }}
          py={{ base: 40, sm: 70, md: 84 }}
        >
          <GridCol span={{ base: 12, md: 7 }}>
            <Stack gap="md" pos="relative" style={{ zIndex: 1 }}>
              <StatusBadge>
                Desarrollador Full Stack · Abierto a oportunidades
              </StatusBadge>
              <Eyebrow>PORTFOLIO · DESARROLLO DE SOFTWARE</Eyebrow>
              <Title
                order={1}
                size="clamp(2.65rem, 5vw, 4.25rem)"
                style={{ letterSpacing: "-.065em", lineHeight: 1.04 }}
              >
                Hola, soy David.
                <br />
                <Text span c="dimmed" inherit>
                  Construyo soluciones digitales útiles.
                </Text>
              </Title>
              <Text c="dimmed" size="lg" maw={590} lh={1.65}>
                {portfolioIdentity.role} y Técnico en Computación e Informática.
                Me interesa crear productos eficientes, sostenibles y cuidadosos
                con la privacidad de las personas.
              </Text>
              <Group mt="sm" gap="sm">
                <Button
                  component="a"
                  href="/proyectos"
                  radius="xl"
                  styles={{
                    root: {
                      backgroundColor: "var(--mantine-color-text)",
                      color: "var(--mantine-color-body)",
                    },
                  }}
                  rightSection={<IconArrowDown size={16} />}
                >
                  Explorar proyectos
                </Button>
                <Button
                  component="a"
                  href="/contacto"
                  radius="xl"
                  variant="default"
                  rightSection={<IconArrowUpRight size={16} />}
                >
                  Conversemos
                </Button>
              </Group>
              <Group gap="xs" mt="sm">
                <IconCircleCheck
                  size={15}
                  color="var(--mantine-color-green-7)"
                />
                <Text size="xs" c="dimmed">
                  Disponible para trabajo remoto · Desarrollo &amp; diseño
                </Text>
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <Box
              pos="relative"
              mih={{ base: 280, sm: 360 }}
              style={{ display: "grid", placeItems: "center" }}
            >
              <Box
                pos="absolute"
                inset={0}
                opacity={0.35}
                style={{
                  backgroundImage:
                    "radial-gradient(var(--mantine-color-gray-5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  maskImage:
                    "radial-gradient(ellipse,#000 20%,transparent 72%)",
                }}
              />
              <Paper
                p="lg"
                radius={28}
                w="min(330px,75%)"
                mih={300}
                shadow="xl"
                c="white"
                style={{
                  zIndex: 1,
                  transform: "rotate(-5deg)",
                  background:
                    "radial-gradient(circle at 82% 15%, #515151 0, transparent 40%), linear-gradient(145deg,#292929,#101010 70%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Group justify="space-between">
                  <Text size="xs" c="gray.4" style={{ letterSpacing: ".18em" }}>
                    DEV / 01
                  </Text>
                  <IconSparkles size={23} color="#a7d3b9" />
                </Group>
                <Title
                  order={2}
                  c="white"
                  size="clamp(5rem,10vw,8rem)"
                  style={{ letterSpacing: "-.11em" }}
                >
                  DL
                  <Text span c="green.3" inherit>
                    .
                  </Text>
                </Title>
                <Stack gap={3}>
                  <Text
                    size="10px"
                    c="gray.4"
                    style={{ letterSpacing: ".13em" }}
                  >
                    {portfolioIdentity.name.toUpperCase()}
                  </Text>
                  <Text
                    size="10px"
                    c="gray.4"
                    style={{ letterSpacing: ".13em" }}
                  >
                    FULL STACK DEVELOPER
                  </Text>
                </Stack>
              </Paper>
              <Badge
                pos="absolute"
                top="20%"
                left={0}
                size="lg"
                variant="white"
                color="dark"
                radius="md"
                style={{ zIndex: 2 }}
              >
                <Group gap={7}>
                  <IconCode size={15} /> .NET · Backend
                </Group>
              </Badge>
              <Badge
                pos="absolute"
                bottom="17%"
                right={0}
                size="lg"
                variant="white"
                color="dark"
                radius="md"
                style={{ zIndex: 2 }}
              >
                UI · Frontend
              </Badge>
            </Box>
          </GridCol>
        </Grid>

        <SimpleGrid cols={2} spacing="sm" maw={480} mx="auto" mb="md">
          <Button
            component="a"
            href={portfolioLinks.github}
            target="_blank"
            rel="noreferrer"
            variant="default"
            radius="lg"
            h={70}
            fullWidth
          >
            <IconArrowUpRight
              size={16}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Stack gap={8} align="center">
              <IconBrandGithub size={24} />
              <Text size="sm" fw={600}>
                GitHub
              </Text>
            </Stack>
          </Button>
          <Button
            component="a"
            href={portfolioLinks.cv}
            target="_blank"
            rel="noreferrer"
            variant="default"
            radius="lg"
            h={70}
            fullWidth
          >
            <IconArrowUpRight
              size={16}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            />
            <Stack gap={8} align="center">
              <IconFileCv size={24} />
              <Text size="sm" fw={600}>
                Ver CV
              </Text>
            </Stack>
          </Button>
        </SimpleGrid>

        <SimpleGrid
          cols={{ base: 1, sm: 3 }}
          spacing="sm"
          p="sm"
          style={{
            borderRadius: 20,
            border: "1px solid var(--mantine-color-default-border)",
          }}
        >
          {[
            ["Experiencia", "2+", "Años desarrollando soluciones Full Stack"],
            [
              "Especialidad",
              ".NET · Next.js",
              "Desarrollo de aplicaciones y servicios",
            ],
            ["Enfoque", "Full Stack", "De la lógica de negocio a la interfaz"],
          ].map(([label, value, detail]) => (
            <Paper
              key={label}
              p={{ base: "sm", sm: "lg" }}
              radius="lg"
              withBorder
              shadow="md"
              bg="var(--mantine-color-default)"
            >
              <Text c="dimmed" size="xs" fw={700} tt="uppercase">
                {label}
              </Text>
              <Title
                order={2}
                size="clamp(1.375rem,4vw,2.375rem)"
                mt={8}
                style={{ letterSpacing: "-.06em" }}
              >
                {value}
              </Title>
              <Text c="dimmed" size="xs" mt={6}>
                {detail}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
        <Stack gap="lg" py={{ base: 55, sm: 85 }}>
          <Group justify="space-between" align="end" wrap="wrap">
            <Stack gap={5}>
              <Eyebrow>TRABAJO RECIENTE</Eyebrow>
              <Title order={2} size={30} style={{ letterSpacing: "-.05em" }}>
                Proyectos seleccionados
              </Title>
            </Stack>
            <Anchor
              href="/proyectos"
              c="var(--mantine-color-text)"
              fw={600}
              size="sm"
            >
              Ver portafolio completo <IconArrowUpRight size={15} />
            </Anchor>
          </Group>
          {projects.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {projects.slice(0, 2).map((project) => (
                <PortfolioProjectCard
                  key={project.idPortfolio}
                  project={project}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Paper withBorder radius="xl" p="xl">
              <Text c="dimmed">Todavía no hay proyectos para mostrar.</Text>
            </Paper>
          )}
        </Stack>
        <CtaBand
          title="Hagamos que una buena idea funcione."
          description="Cuéntame qué necesitas y lo conversamos sin compromiso."
          buttonLabel="Escríbeme por WhatsApp"
          href={portfolioLinks.whatsapp}
        />
      </Container>
    </Box>
  );
}
