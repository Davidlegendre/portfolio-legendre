'use client'
import "./css/AboutMe.class.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function AboutMeSection() {

    const [Expand, SetExpand] = useState(false)
    const expandevent = () => {
        SetExpand(!Expand)
    };

  return (
    <div className="aboutme">
      <Image className="fondo-img" src={"https://res.cloudinary.com/dflatec/image/upload/v1713563468/y5wcwot945qe3wqf1jcp.jpg"} width={1366} height={980} alt="fondo"></Image>
      <div className="card-about">
        <div className="button-down-about">
          <span className="icon icon-default">&#xE1CB;</span>
          <span onClick={() => expandevent()} className={Expand ? "icon icon-button rotate-icon-expand" : "icon icon-button"}>
            &#xE011;
            </span>
        </div>
        <div className="description-about">
          <p className={Expand ? "expand": ""}>
            2 años Desarrollador FullStack .NET. 2 año Diseño Gráfico con CorelDraw por cuenta propia. Técnico en Computación e Informática. Proactivo en constante superación. Alto sentido de la Responsabilidad en el equipo de trabajo. Alto sentido de la privacidad de los datos de los clientes.  Buscador de la mejor forma de hacer las cosas eficientes y sostenibles.
          </p>
          <div className="links-section">
            <Link
              href="https://www.linkedin.com/in/david-legendre-albites-904a361a7/"
              target="_blank"
            >
              <Image
                src="https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000"
                width={20}
                height={20}
                alt="LinkedIn"
              ></Image>
              LinkedIn
            </Link>
            <Link href="https://github.com/Davidlegendre" target="_blank">
              <Image
                src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                width={20}
                height={20}
                alt="Github"
              ></Image>
              Github
            </Link>
              <Link href="https://drive.google.com/file/d/1ehtFYRuiuieZqJiUdUg5FK-KyubUpSEs/view?usp=sharing" target="_blank">
              <Image
                src="https://img.icons8.com/?size=100&id=rZObyIJRui2T&format=png&color=000000"
                width={20}
                height={20}
                alt="CV"
              ></Image>
              CV2024
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
