"use client";

import { Carousel } from "@mantine/carousel";
import {
  Anchor,
  Badge,
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import type { Root2 } from "@/lib/Interfaces/Portfolio.interface";

export default function PortfolioProjectCard({ project }: { project: Root2 }) {
  const preview = project.Captures[0]?.url;
  const hasMultipleCaptures = project.Captures.length > 1;

  return (
    <Paper
      withBorder
      radius="lg"
      shadow="sm"
      style={{ overflow: "hidden", height: "100%" }}
    >
      <Box bg="var(--mantine-color-default)" style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
        {hasMultipleCaptures ? (
          <Carousel
            height="100%"
            withControls
            withIndicators
            emblaOptions={{ loop: true }}
            previousControlIcon={<IconArrowLeft size={18} />}
            nextControlIcon={<IconArrowRight size={18} />}
            aria-label={`Capturas de ${project.titulo}`}
            styles={{
              root: { height: "100%" },
              viewport: { height: "100%" },
              container: { height: "100%" },
              slide: { height: "100%" },
              control: {
                backgroundColor: "var(--mantine-color-body)",
                color: "var(--mantine-color-text)",
                border: 0,
              },
              indicator: { backgroundColor: "var(--mantine-color-body)", opacity: 0.85 },
            }}
          >
            {project.Captures.map((capture, index) => (
              <Carousel.Slide key={capture.id}>
                <Image
                  src={capture.url}
                  alt={`Captura ${index + 1} de ${project.titulo}`}
                  h="100%"
                  w="100%"
                  fit="cover"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : preview ? (
          <Image
            src={preview}
            alt={`Captura del proyecto ${project.titulo}`}
            h="100%"
            fit="cover"
          />
        ) : (
          <Box h="100%" style={{ display: "grid", placeItems: "center" }}>
            <Title order={2} c="dimmed" size={44}>
              {project.titulo.slice(0, 2).toUpperCase()}
            </Title>
          </Box>
        )}
      </Box>
      <Stack p="lg" gap="sm">
        <Group justify="space-between" align="start" wrap="nowrap">
          <Title order={2} size={21} style={{ letterSpacing: "-.04em" }}>
            {project.titulo}
          </Title>
          <Badge variant="light" color="gray" radius="xl">
            {project.Captures.length}{" "}
            {project.Captures.length === 1 ? "captura" : "capturas"}
          </Badge>
        </Group>
        <Text c="dimmed" size="sm" lh={1.65}>
          {project.description}
        </Text>
        {project.Links.length > 0 && (
          <Group gap="xs" mt="xs">
            {project.Links.map((link) => (
              <Anchor
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                underline="never"
                c="var(--mantine-color-text)"
                size="xs"
                fw={600}
                p={8}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  border: "1px solid var(--mantine-color-default-border)",
                  borderRadius: 999,
                }}
              >
                {link.TypeURLs.icon && (
                  <Image src={link.TypeURLs.icon} alt="" w={14} h={14} />
                )}
                {link.TypeURLs.description}
                <IconArrowUpRight size={13} />
              </Anchor>
            ))}
          </Group>
        )}
      </Stack>
    </Paper>
  );
}
