"use client";
import { FormEvent, useState } from "react";
import "./css/FormularioContacto.class.css";
import SendEmail from "@/Helpers/SendEmail.helper";
import { Mail } from "../Interfaces/EmailModel";
import { toast } from "react-toastify";
import { validation } from "@/Helpers/Helpers.global";

export default function FormularioContacto() {
  const [enable, setEnable] = useState(true);
  const enviarEmail = async (e: any) => {
    e.preventDefault();
    setEnable(false);
    if (
      validation(e.target.email.value, "Ingresa un email") &&
      validation(e.target.names.value, "Ingresa un nombre") &&
      validation(e.target.idea.value, "Ingresa una idea o un contacto")
    ) {
      const mail: Mail = {
        toUser: [
          {
            nombre: "David Legendre",
            email: "dlegendre74@gmail.com",
          },
          {
            nombre: "David Legendre",
            email: "legendre2013@hotmail.com",
          },
        ],
        isHTMLBody: false,
        subject: "Contacto: " + e.target.names.value,
        body:
          e.target.idea.value +
          " " +
          "Escribe: " +
          e.target.names.value +
          " con email: " +
          e.target.email.value,
      };
      const result = await SendEmail(mail);
      if (result)
        toast("Email enviado!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    setEnable(true);
  };

  return (
    <form
      onSubmit={enable ? async (e) => await enviarEmail(e) : () => {}}
      className={enable ? "form" : "form form-disable"}
    >
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        disabled={!enable}
        required
      />
      <input
        type="Text"
        placeholder="Como te llamas"
        id="names"
        name="names"
        disabled={!enable}
        required
      />
      <textarea
        maxLength={170}
        name="idea"
        id="idea"
        disabled={!enable}
        required
        placeholder="Cuentame tu idea o deja algun contacto"
      ></textarea>
      <input
        disabled={!enable}
        type="submit"
        name="send"
        id="send"
        value="Enviar"
      />
    </form>
  );
}
