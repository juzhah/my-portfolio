"use server";
import { getProjects } from "@/app/data/get-projects";
import { Project } from "@/app/types";
import { ArrowUpRight, NotebookText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-32 border-t border-white/5">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold text-white">Selected Works</h2>
            <p className="text-gray-400 mt-4 max-w-lg">
              Click on any project to view the detailed case study, including
              the problem statement, solution architecture, and impact metrics.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => {
            return <ProjectCard project={project} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`projects/${project.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative h-100 overflow-hidden mb-6 bg-dark-card rounded-lg border border-white/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
            alt="Farming Management System"
            width="600"
            height="400"
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
              <NotebookText />
            </div>
            <span className="text-white font-bold mt-4 tracking-widest text-sm uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              View Case Study
            </span>
          </div>
          <div className="absolute top-0 right-0 bg-primary p-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <ArrowUpRight />
          </div>
        </div>
        <div className="flex justify-between items-start h-full">
          <div className="flex flex-col">
            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
              Product
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2 overflow-hidden group-hover:text-gray-400 transition-colors leading-relaxed min-h-[2.8em]">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Projects;
