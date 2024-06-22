import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Tom</span> 👋
      <br />A young develloper full stack from France
    </h1>
  ),
  2: (
    <InfoBox
      text="I am a young student in the Multimedia and Internet Technologies Bachelor's program, passionate about Japanese culture, video games, and music"
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="I have worked on various projects, full stack development to UI/UX design and game development."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a developer for your project ? Or just want to chat ? Feel free to contact me !"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
