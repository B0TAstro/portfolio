import { iut, evolutive, marioncremona, cmi, diceroller, tapetaupe } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  figma,
  threejs,
  webflow,
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
    title: "Student Developer",
    company_name: "University Institute of Technology of Chambéry",
    icon: iut,
    iconBg: "#d9d9d9",
    date: "September 2022 - Present",
    points: [
      "Created various projects both in teams and solo, including websites, mobile apps, and video games.",
      "Collaborated with fellow students using Agile methodologies.",
      "Gained hands-on experience with project management and software development life cycle.",
      "Participated in coding sprints and peer code reviews to enhance project quality.",
    ],
  },
  {
    title: "Webflow Developer",
    company_name: "Evolutive",
    icon: evolutive,
    iconBg: "#5383FF",
    date: "April 2024 - June 2024",
    points: [
      "Integrated designs into Webflow.",
      "Researched and implemented web animations.",
      "Developed 3D models using Spline & Blender.",
      "Collaborated with the design team and project manager, participating in client meetings.",
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Customer WordPress Theme",
    description:
      "I developed a responsive and minimalist WordPress theme for a customer during my second year of the MMI Bachelor's program. This project, part of a two-week intensive Web Week, involved collaboration with a UX designer, content creator, and project manager. Through this experience, I deepened my skills in WordPress, web integration, and client collaboration.",
    imageUrl: marioncremona,
    link: "https://github.com/B0TAstro/MarionCremona",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "CMI Media Webflow Website",
    description:
      "During my internship at Évolutive, I was tasked with fully redesigning the CMI Group's website. Collaborating closely with the design and management teams, I rebuilt a significant portion of the site on Webflow. Unfortunately, I no longer have access to the code, but the final version of the site will soon be available on their official website.",
    imageUrl: cmi,
    link: "https://cmimedia.fr/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Dice Roller Mobile Application",
    description:
      "The Dice Roller mobile application, developed with React, is a Progressive Web App (PWA) that allows users to simulate rolling dice, making it a perfect companion for board games and role-playing games. With its simple and responsive interface, users can select the number of dice to roll and generate random results. The source code is available on GitHub.",
    imageUrl: diceroller,
    link: "https://github.com/B0TAstro/DiceRoller",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Interactive Whack-a-Mole Game",
    description: "The Interactive Whack-a-Mole Game is a team project that combines custom Arduino hardware with a Processing-based software interface. Players use a mallet to hit virtual moles that randomly appear on a screen, featuring dynamic mole spawning, a scoring system, and a leaderboard.",
    imageUrl: tapetaupe,
    link: "https://github.com/B0TAstro/Tape-Taupe",
  },
  /*
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "",
    description:
      "",
    link: "",
  },
  {
    iconUrl: car,
    theme: "btn-back-yellow",
    name: "",
    description:
      "",
    link: "",
  },
*/
];
