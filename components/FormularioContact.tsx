"use client";
import { FormEvent, useState } from "react";
import "./css/FormularioContacto.class.css";
import SendEmail from "@/Helpers/SendEmail.helper";
import { Mail } from "../Interfaces/EmailModel";
import { toast } from "react-toastify";

export default function FormularioContacto() {
  const [enable, setEnable] = useState(true);
  const enviarEmail = async (e: any) => {
    e.preventDefault();
    setEnable(false);
    const mail: Mail = {
      toUser: [
        {
          nombre: e.target.names.value,
          email: e.target.email.value,
        },
      ],
      isHTMLBody: false,
      subject: "Contact Me " + e.target.names.value,
      body: e.target.idea.value,
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
    setEnable(true);
  };

  return (
    <form
      onSubmit={enable ? async (e) => await enviarEmail(e) : () => {}}
      className={enable ? "form" : "form form-disable"}
    >
      <input
        type="email"
        placeholder="email"
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
        placeholder="Cuentame tu idea"
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
