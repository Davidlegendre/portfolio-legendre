"use client";
import Image from "next/image";
import "./css/Header.class.css";
import FormularioContacto from "./FormularioContact";
import { useState } from "react";
import Link from "next/link";

export default function HeaderNav() {
  const [Open, SetOpen] = useState(false);

  const [ShowTitle, SetShowTitle] = useState(false);

  const open = () => {
    SetOpen(!Open);
    if (!ShowTitle)
      setTimeout(() => {
        SetShowTitle(true);
      }, 200);
    else SetShowTitle(false);
  };

  return (
    <div className="container-header">
      <div
        className={
          Open ? "header OpenHeaderAnimate" : "header CloseHeaderAnimate"
        }
      >
        <div className="header-head">
          <Image
            src="https://avatars.githubusercontent.com/u/23003800?v=4"
            width={48}
            height={48}
            alt="user"
          ></Image>
          {ShowTitle ? <p className="animate-infast">CONTACTO</p> : <p className="animate-infast2 title-name">David Legendre</p>}

          <button onClick={() => open()}>
            <span className="icon icon-button">&#xE168;</span>
          </button>
        </div>
        <div
          className={
            Open
              ? "containerform OpenFormAnimate"
              : "containerform CloseFormAnimate"
          }
        >
          {Open ? <FormularioContacto /> : ""}
        </div>
        <Link href="https://api.whatsapp.com/send?phone=51914847720" target="_blank"  className="whatsapp-contact">
          <Image src="https://img.icons8.com/fluency/48/whatsapp.png" width={16} height={16} alt="whatsapp" ></Image>
          <p>Whatsapp</p>
        </Link>
      </div>
      
    </div>
  );
}
