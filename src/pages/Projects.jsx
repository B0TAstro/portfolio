import React from "react";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          This is where I showcase my most recent and technically refined
          projects, the ones I'm particularly passionate about and proud of.
          Many of them are open-source and available on my GitHub profile, so if
          you come across something that piques your interest, feel free to
          explore the codebase and see how they were built!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="flex items-center gap-6">
              <div className="block-container w-12 h-12 flex-shrink-0">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
            </div>
            <div className="mt-5 flex flex-col">
              <p className="text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center justify-between font-poppins">
                <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              </div>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-60 object-cover mt-5"
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;