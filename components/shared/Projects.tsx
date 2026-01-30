import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/utils/projects/data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#32334B]">
      <div className="section-container">
        <h2 className="section-title pb-2">Projects</h2>
        <p className="mb-12 text-lg max-w-3xl">
          Here are some of my recent projects. Each one is built with security
          and performance in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
