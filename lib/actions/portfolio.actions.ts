"use server";

import capturesData from "@/lib/data/Captures.json";
import linksData from "@/lib/data/Links.json";
import portfolioData from "@/lib/data/Porfolio.json";
import type { Capture, Link, Root, Root2, TypeUrls } from "@/lib/Interfaces/Portfolio.interface";
import typeUrlsData from "@/lib/data/TypeURLs.json";

const captures = capturesData as Capture[];
const links = linksData as Omit<Link, "TypeURLs">[];
const typeUrls = typeUrlsData as TypeUrls[];
const portfolio = portfolioData as Omit<Root2, "Captures" | "Links">[];

export async function getProjects(): Promise<Root> {
  return portfolio.map((project) => ({
    ...project,
    Captures: captures.filter((capture) => capture.idPortfolio === project.idPortfolio),
    Links: links
      .filter((link) => link.idPortfolio === project.idPortfolio)
      .map((link) => ({
        ...link,
        TypeURLs: typeUrls.find((type) => type.id === link.idTypeURL) ?? {
          id: link.idTypeURL,
          description: "Enlace",
          icon: "",
        },
      })),
  }));
}
