"use client";
import { Root2 } from "@/Interfaces/Portfolio.interface";
import Image from "next/image";
import Link from "next/link";
import Carousel from "nuka-carousel";
import "./css/ProjectItem.class.css";
import { renderCenterLeftControls, renderCenterRightControls } from "./ButtonsNukaCarousel";

export default function ProjectItem({ Root2 }: { Root2: Root2 }) {
  return (
    <div key={Root2.idPortfolio} className="card">
      <Carousel renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls} className="imgs-card">
        {Root2.Captures
          ? Root2.Captures.map((e) => (
              <Link href={e.url} target="_blank" key={e.id}>
                <img src={e.url} width={1700} height={80} alt={e.url} />
              </Link>
            ))
          : ""}
      </Carousel>
      <div className="descript-card">
        <p className="title-card">{Root2.titulo}</p>
        <p className="description-card">{Root2.description}</p>
      </div>      
      <div className="links-card">
        {Root2.Links
          ? Root2.Links.map((e) => (
              <Link href={e.url} target="_blank" key={e.id}>
                 <img
                    src={e.TypeURLs.icon}
                    width={16}
                    height={16}
                    alt={e.TypeURLs.description}
                  ></img>
                  <p>{e.TypeURLs.description}</p>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
}
