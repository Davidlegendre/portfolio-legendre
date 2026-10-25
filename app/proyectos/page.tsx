import { Metadata } from "next";
import {
  Anchor,
  Badge,
  Container,
  Grid,
  GridCol,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import { CtaBand, Eyebrow, PageIntro } from "@/components/portfolio/UiParts";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import { getProjects } from "@/lib/actions/portfolio.actions";
import { portfolioIdentity } from "@/lib/constantes";

export const metadata: Metadata = {
  title: `Proyectos · ${portfolioIdentity.name}`,
  description: `Proyectos de desarrollo de software de ${portfolioIdentity.name}.`,
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Container
      component="main"
      size={1160}
      px={{ base: 18, sm: 28, lg: 32 }}
      py={{ base: 38, sm: 64 }}
    >
      <PageIntro
        eyebrow="TRABAJO & APRENDIZAJE"
        title="Proyectos seleccionados"
        description="Aplicaciones y ejercicios donde exploro desarrollo Full Stack, soluciones .NET y experiencias web enfocadas en resolver problemas reales."
      />
      {projects.length > 0 ? (
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {projects.map((project) => (
            <PortfolioProjectCard key={project.idPortfolio} project={project} />
          ))}
        </SimpleGrid>
      ) : (
        <Paper withBorder radius="xl" p="xl">
          <Text c="dimmed">Todavía no hay proyectos para mostrar.</Text>
        </Paper>
      )}
      <Grid align="center" gutter="xl" py={{ base: 50, sm: 75 }}>
        <GridCol span={{ base: 12, sm: 5 }}>
          <Stack gap="sm">
            <Eyebrow>HERRAMIENTAS</Eyebrow>
            <Title order={2} size={30} style={{ letterSpacing: "-.05em" }}>
              Mi stack de trabajo
            </Title>
            <Text c="dimmed" size="sm" lh={1.6}>
              Tecnologías y prácticas con las que construyo y mantengo software.
            </Text>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, sm: 7 }}>
          <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="xs">
            {[
              ".NET",
              "C#",
              "Desarrollo Full Stack",
              "JavaScript",
              "TypeScript",
              "SQL",
              "Git",
              "Diseño de interfaces",
              "Privacidad de datos",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="light"
                color="gray"
                radius="xl"
                size="lg"
                leftSection={<IconCode size={13} />}
              >
                {skill}
              </Badge>
            ))}
          </SimpleGrid>
        </GridCol>
      </Grid>
      <CtaBand
        title="¿Necesitas desarrollar una idea?"
        description="Estoy disponible para conversar sobre proyectos y oportunidades."
        buttonLabel="Contactarme"
      />
    </Container>
  );
}
