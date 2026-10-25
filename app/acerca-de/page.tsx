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
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCheck,
  IconCode,
  IconHeartHandshake,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";
import { CtaBand, Eyebrow, PageIntro } from "@/components/portfolio/UiParts";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";

export const metadata: Metadata = {
  title: `Acerca de · ${portfolioIdentity.name}`,
  description:
    `Conoce el perfil y la experiencia profesional de ${portfolioIdentity.fullName}.`,
};

const skills = [
  "Desarrollo Full Stack",
  ".NET",
  "C#",
  "Diseño gráfico",
  "CorelDRAW",
  "Privacidad de datos",
  "Mejora continua",
];

export default function AboutPage() {
  return (
    <Container
      component="main"
      size={1160}
      px={{ base: 18, sm: 28, lg: 32 }}
      py={{ base: 38, sm: 64 }}
    >
      <PageIntro
        eyebrow="PERFIL PROFESIONAL"
        title="Desarrollo con curiosidad y responsabilidad."
        description="Me gusta entender el problema de principio a fin: desde la necesidad de la persona hasta una solución que sea clara, segura y sostenible."
      />
      <Grid align="start" gutter="lg">
        <GridCol span={{ base: 12, md: 4 }}>
          <Stack>
            <Paper withBorder radius="xl" p="lg" shadow="sm">
              <Stack gap="md">
                <Box
                  mih={190}
                  p="lg"
                  style={{
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 16,
                    color: "white",
                    background:
                      "radial-gradient(circle at 72% 28%, #657064 0, transparent 28%),linear-gradient(145deg,#313733,#171b18 70%)",
                  }}
                >
                  <Title
                    order={2}
                    c="white"
                    size={72}
                    style={{ letterSpacing: "-.11em" }}
                  >
                    DL
                    <Text span c="green.3" inherit>
                      .
                    </Text>
                  </Title>
                </Box>
                <Badge
                  variant="light"
                  color="green"
                  w="fit-content"
                  leftSection={<IconCheck size={12} />}
                >
                  Disponible para oportunidades
                </Badge>
                <Stack gap={3}>
                  <Title
                    order={2}
                    size={24}
                    style={{ letterSpacing: "-.045em" }}
                  >
                    David Fernando
                    <br />
                    Legendre Albites
                  </Title>
                  <Text c="dimmed" size="sm" fw={600}>
                    {portfolioIdentity.role}
                  </Text>
                </Stack>
                <Text c="dimmed" size="sm" lh={1.65}>
                  Técnico en Computación e Informática, con experiencia en
                  desarrollo Full Stack y formación autodidacta en diseño
                  gráfico.
                </Text>
                <Stack
                  gap={4}
                  pt="sm"
                  style={{
                    borderTop: "1px solid var(--mantine-color-default-border)",
                  }}
                >
                  <Button
                    component="a"
                    href={portfolioLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    variant="subtle"
                    color="gray"
                    justify="space-between"
                    leftSection={<IconBrandLinkedin size={16} />}
                    rightSection={<IconArrowUpRight size={14} />}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    component="a"
                    href={portfolioLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="subtle"
                    color="gray"
                    justify="space-between"
                    leftSection={<IconBrandGithub size={16} />}
                    rightSection={<IconArrowUpRight size={14} />}
                  >
                    GitHub
                  </Button>
                  <Button
                    component="a"
                    href={portfolioLinks.cv}
                    target="_blank"
                    rel="noreferrer"
                    variant="subtle"
                    color="gray"
                    justify="space-between"
                    leftSection={<IconArrowUpRight size={16} />}
                    rightSection={<IconArrowUpRight size={14} />}
                  >
                    Ver CV
                  </Button>
                </Stack>
              </Stack>
            </Paper>
            <Paper withBorder radius="lg" p="md" bg="var(--mantine-color-default)">
              <Group wrap="nowrap" align="start">
                <ThemeIcon variant="light" color="gray" radius="md" size={38}>
                  <IconHeartHandshake size={19} />
                </ThemeIcon>
                <Stack gap={5} style={{ flex: 1 }}>
                  <Text fw={700} size="sm">
                    Conversemos directamente
                  </Text>
                  <Text size="xs" c="dimmed">
                    Escríbeme por WhatsApp para hablar de una oportunidad o
                    proyecto.
                  </Text>
                  <Button
                    component="a"
                    href={portfolioLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    variant="light"
                    color="green"
                    size="xs"
                    radius="xl"
                    rightSection={<IconArrowUpRight size={14} />}
                  >
                    Abrir WhatsApp
                  </Button>
                </Stack>
              </Group>
            </Paper>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, md: 8 }}>
          <Stack>
            <Paper withBorder radius="xl" p={{ base: "md", sm: "lg" }}>
              <Group gap="sm" mb="lg">
                <ThemeIcon variant="light" color="gray" radius="md">
                  <IconSparkles size={17} />
                </ThemeIcon>
                <Stack gap={2}>
                  <Eyebrow>CÓMO TRABAJO</Eyebrow>
                  <Title order={2} size={20}>
                    Principios que me guían
                  </Title>
                </Stack>
              </Group>
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
                {[
                  [
                    "01",
                    "Responsabilidad",
                    "Cuido la calidad del trabajo y la confianza depositada, especialmente cuando se trata de información de clientes.",
                    IconShieldCheck,
                  ],
                  [
                    "02",
                    "Mejora continua",
                    "Busco aprender, revisar lo que puede mejorarse y elegir soluciones eficientes y sostenibles.",
                    IconSparkles,
                  ],
                  [
                    "03",
                    "Trabajo en equipo",
                    "Me comunico con claridad, escucho perspectivas distintas y aporto para alcanzar objetivos compartidos.",
                    IconHeartHandshake,
                  ],
                ].map(([number, title, description, Icon]) => {
                  const PrincipleIcon = Icon as typeof IconCode;
                  return (
                    <Paper key={String(number)} p="md" radius="md" bg="var(--mantine-color-default)">
                      <Text size="xs" c="dimmed" fw={700}>
                        {String(number)} /
                      </Text>
                      <ThemeIcon
                        variant="light"
                        color="gray"
                        radius="xl"
                        mt="md"
                      >
                        <PrincipleIcon size={17} />
                      </ThemeIcon>
                      <Title order={3} size={15} mt="sm">
                        {String(title)}
                      </Title>
                      <Text size="xs" c="dimmed" lh={1.6} mt={6}>
                        {String(description)}
                      </Text>
                    </Paper>
                  );
                })}
              </SimpleGrid>
            </Paper>

            <Paper withBorder radius="xl" p={{ base: "md", sm: "lg" }}>
              <Group gap="sm" mb="lg">
                <ThemeIcon variant="light" color="gray" radius="md">
                  <IconCode size={17} />
                </ThemeIcon>
                <Stack gap={2}>
                  <Eyebrow>RECORRIDO</Eyebrow>
                  <Title order={2} size={20}>
                    Experiencia y formación
                  </Title>
                </Stack>
              </Group>
              <Stack
                gap="lg"
                pl="md"
                style={{
                  borderLeft: "1px solid var(--mantine-color-default-border)",
                }}
              >
                {[
                  [
                    "Desarrollador Full Stack .NET",
                    "2 años",
                    "Desarrollo de aplicaciones de punta a punta, con atención a la funcionalidad, la eficiencia y la protección de datos.",
                  ],
                  [
                    "Técnico en Computación e Informática",
                    "Formación",
                    "Formación técnica en fundamentos de computación e informática, base para mi trabajo en desarrollo de software.",
                  ],
                  [
                    "Diseño gráfico autodidacta",
                    "Aprendizaje continuo",
                    "Exploro composición visual y herramientas como CorelDRAW para complementar mi perspectiva técnica.",
                  ],
                ].map(([title, period, detail]) => (
                  <Box key={title} pos="relative">
                    <Box
                      pos="absolute"
                      left={-21}
                      top={5}
                      w={9}
                      h={9}
                      bg="green.6"
                      style={{
                        border: "2px solid var(--mantine-color-body)",
                        borderRadius: 20,
                      }}
                    />
                    <Group justify="space-between" align="start" gap="xs">
                      <Title order={3} size={14}>
                        {title}
                      </Title>
                      <Badge variant="light" color="gray" size="xs">
                        {period}
                      </Badge>
                    </Group>
                    <Text c="dimmed" size="xs" lh={1.65} mt={5}>
                      {detail}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Paper>

            <Paper withBorder radius="xl" p={{ base: "md", sm: "lg" }}>
              <Group gap="sm" mb="md">
                <ThemeIcon variant="light" color="gray" radius="md">
                  <IconCode size={17} />
                </ThemeIcon>
                <Stack gap={2}>
                  <Eyebrow>CONOCIMIENTOS</Eyebrow>
                  <Title order={2} size={20}>
                    Habilidades e intereses
                  </Title>
                </Stack>
              </Group>
              <Text c="dimmed" size="sm" mb="md">
                Una combinación de desarrollo de software, cuidado por los
                detalles y compromiso con soluciones mantenibles.
              </Text>
              <Group gap="xs">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="light"
                    color="gray"
                    radius="xl"
                    size="lg"
                  >
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Paper>
          </Stack>
        </GridCol>
      </Grid>
      <CtaBand
        title="¿Te gustaría trabajar juntos?"
        description="Estoy disponible para conversar sobre oportunidades y proyectos."
        buttonLabel="Ponte en contacto"
      />
    </Container>
  );
}
