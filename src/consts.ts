import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Studio hexagonal",
  DESCRIPTION: "Studio hexagonal blog.",
  EMAIL: "hexagonalstudio42@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Studio hexagonal est le blog personnel de Pom.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Une collection d'articles sur des sujets qui me passionnent.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projets",
  DESCRIPTION:
    "Une collection de mes projets avec des liens vers les dépôts et les démos en direct.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://twitter.com/pom421",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/pom421",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/pierre-olivier-mauguet/",
  },
];
