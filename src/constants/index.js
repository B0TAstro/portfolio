import { iut, evolutive, marioncremona, cmi, lasasson, weatherapp_preview, tetras_preview, mosquito_preview } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  tailwindcss,
  truck,
  typescript,
  figma,
  threejs,
  webflow,
  weather,
  box,
  globe,
  wordpress,
  users,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Full Stack",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: webflow,
    name: "Webflow",
    type: "Full Stack",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "La Sasson - Apprenticeship",
    icon: lasasson,
    iconBg: "#FFFFFF",
    date: "December 2025 - Present",
    points: [
      "Redesigned the company's website",
      "Developed an HR tool using Next.js and Sanity.io",
      "Created the website for PREST'IMMO 73, an association linked to La Sasson",
      "Produced and edited Microsoft 365 tutorial videos and presentations to train employees on the new tools",
    ],
  },
  {
    title: "Student Developer",
    company_name: "University Institute of Technology of Chambéry",
    icon: iut,
    iconBg: "#FFFFFF",
    date: "September 2022 - Present",
    points: [
      "Worked on various projects, including websites, mobile apps, and video games, both individually and in teams",
      "Collaborated with peers using Agile methodologies",
      "Gained hands-on experience in project management and software development life cycle",
      "Engaged in coding sprints and peer reviews to improve project quality",
    ],
  },
  {
    title: "Webflow Developer",
    company_name: "Evolutive - Internship",
    icon: evolutive,
    iconBg: "#FFFFFF",
    date: "April 2024 - June 2024",
    points: [
      "Integrated designs into Webflow",
      "Researched and implemented web animations",
      "Created 3D models using Spline & Blender",
      "Collaborated with the design team and project manager, attending client meetings",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/B0TAstro",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/tom-boullay/",
  },
];

export const projects = [
  {
    iconUrl: truck,
    theme: "btn-back-blue",
    name: "Tetras Transports Website",
    category: "Freelance",
    description:
      "My first freelance project: a modern one-page website for Tetras Transports, built with Next.js and Sanity.io. The site showcases their transport services with a clean design, dynamic content management, and SEO optimization.",
    imageUrl: tetras_preview,
    link: "https://github.com/B0TAstro/Tetras-Transports",
  },
  {
    iconUrl: weather,
    theme: "btn-back-yellow",
    name: "Weather App React",
    category: "Personal",
    description:
      "A responsive weather application built with React and Tailwind CSS, designed for mobile-first use. It allows users to search for weather data worldwide, view real-time weather based on geolocation, and track search history. Features include dynamic backgrounds that change based on weather conditions, time of day, and location.",
    imageUrl: weatherapp_preview,
    link: "https://github.com/B0TAstro/weather-app",
  },
  {
    iconUrl: wordpress,
    theme: "btn-back-orange",
    name: "La Sasson WordPress Website",
    category: "Internship",
    description:
      "A complete redesign of La Sasson's website using a clean WordPress base. The project focuses on performance, maintainability, and a modern UI while ensuring seamless content management for government officials and employees.",
    imageUrl: mosquito_preview,
    link: "https://github.com/B0TAstro/wp-lasasson",
  },
  {
    iconUrl: users,
    theme: "btn-back-green",
    name: "La Sasson HR Tool",
    category: "Internship",
    description:
      "An internal HR tool designed to streamline human resources processes at La Sasson. The platform will centralize important information, documents, and resources for employees, reducing the workload on HR teams. Currently in the design phase on Figma.",
    imageUrl: mosquito_preview,
    link: "https://www.figma.com/design/94giqVSMtK7WqApXXPJ8yb/LA-SASSON?node-id=325-214",
  },
  {
    iconUrl: box,
    theme: "btn-back-pink",
    name: "Mosquito Detection App",
    category: "University",
    description:
      "An IoT-based mosquito detection system using Arduino, LoRaWAN, and React. The app provides real-time data visualization and remote fan control. All technical details and implementation steps are fully documented in a dedicated report.",
    imageUrl: mosquito_preview,
    link: "https://github.com/B0TAstro/mosquito-app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Customer WordPress Theme",
    category: "University / Freelance",
    description:
      "I developed a responsive and minimalist WordPress theme for a customer during my second year of the MMI Bachelor's program. This project, part of a two-week intensive Web Week, involved collaboration with a UX designer, content creator, and project manager.",
    imageUrl: marioncremona,
    link: "https://github.com/B0TAstro/MarionCremona",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    name: "CMI Media Webflow Website",
    category: "Internship",
    description:
      "During my internship at Évolutive, I was tasked with fully redesigning the CMI Group's website. Collaborating closely with the design and management teams, I rebuilt a significant portion of the site on Webflow. Unfortunately, I no longer have access to the code, but the final version of the site will soon be available on their official website.",
    imageUrl: cmi,
    link: "https://cmimedia.fr/",
  },
];
