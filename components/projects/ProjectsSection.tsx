"use client";

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-8 py-24"
    >
      <div className="mb-16">

        <p className="uppercase tracking-[0.3em] text-violet-400">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Building Now
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          A collection of projects I'm currently building while
          learning software engineering, algorithms and backend
          development.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}