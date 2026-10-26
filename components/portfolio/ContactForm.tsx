"use client";

import { FormEvent, useState } from "react";
import {
  Alert,
  Button,
  Group,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { portfolioIdentity, portfolioLinks } from "@/lib/constantes";

const budgetOptions = ["Menos de $1,000", "$1,000 – $5,000", "Más de $5,000"];

export default function ContactForm() {
  const [budget, setBudget] = useState(budgetOptions[1]);
  const [ready, setReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const message = `Hola ${portfolioIdentity.name}, soy ${name} (${email}).\n\nPresupuesto estimado: ${budget}\n\nSobre el proyecto:\n${details}`;
    window.open(
      `${portfolioLinks.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setReady(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          name="name"
          label="Tu nombre"
          placeholder="¿Cómo te llamas?"
          autoComplete="name"
          required
          radius="md"
          size="md"
        />
        <TextInput
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="tu@correo.com"
          autoComplete="email"
          required
          radius="md"
          size="md"
        />
        <Stack gap={8}>
          <Text size="sm" fw={600}>
            Presupuesto estimado
          </Text>
          <SegmentedControl
            fullWidth
            value={budget}
            onChange={setBudget}
            data={budgetOptions}
            aria-label="Presupuesto estimado"
          />
        </Stack>
        <Textarea
          name="details"
          label="Cuéntame sobre tu proyecto"
          placeholder="Objetivos, alcance, plazos o cualquier detalle que te parezca importante…"
          minRows={5}
          autosize
          required
          radius="md"
          size="md"
        />
        <Group justify="space-between" align="center" mt={4} gap="sm">
          <Text size="xs" c="dimmed" maw={290}>
            El mensaje se preparará en WhatsApp para que puedas revisarlo antes
            de enviarlo.
          </Text>
          <Button
            type="submit"
            radius="xl"
            rightSection={<IconArrowUpRight size={16} />}
          >
            {ready ? "Abrir WhatsApp de nuevo" : "Preparar mensaje"}
          </Button>
        </Group>
        {ready && (
          <Alert
            color="green"
            variant="light"
            icon={<IconCheck size={16} />}
            role="status"
          >
            Se abrió WhatsApp con los datos del mensaje. Revísalo y envíalo
            desde allí.
          </Alert>
        )}
      </Stack>
    </form>
  );
}
