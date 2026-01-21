import { Project } from "@/app/types";
import { EnvConfig } from "@/lib/utils";
import { CheckCheck, ChevronLeft, Info, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DEFAULT_IMAGE from "@/assets/project-default-large.webp";

async function ProjectContent({ project }: { project: Project }) {
  const { title, description, cover, type, status } = project;

  const imageUrl = cover
    ? EnvConfig().strapi_url + cover?.formats?.large.url
    : DEFAULT_IMAGE;

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-dark-bg/50 to-transparent z-10"></div>
        <Image
          src={imageUrl}
          alt={project.cover?.alternativeText || title}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-28 left-0 w-full z-20 px-6 lg:px-12">
          <div className="max-w-350 mx-auto">
            <Link
              href={"/#projects"}
              className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-primary transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <ChevronLeft size={18} />
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-350 mx-auto px-6 lg:px-12 -mt-20 relative z-20 pb-20">
        <div className="bg-dark-card border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl mb-12 flex flex-col md:flex-row justify-between gap-8 items-start">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {status === "in_development" && (
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-wider rounded border border-yellow-500/20">
                  In Development
                </span>
              )}
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded border border-primary/20">
                {type || "Product"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto min-w-50"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Info />
                </div>
                <h2 className="text-2xl font-bold">Project Overview</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                I designed and implemented a high-performance operational
                workflow for perishable goods (specifically seafood)
                procurement. This project bridged the gap between sourcing
                teams, centralized buying units, distribution centers, and
                retail outlets. I architected the entire process flowchart,
                authored the technical documentation, and managed the field
                implementation to ensure maximum freshness and minimal waste.
              </p>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                    <Target />
                  </div>
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The existing supply chain suffered from manual coordination
                  gaps, inconsistent quality check logging, and transit issues
                  like weight fluctuations due to temperature control. This
                  resulted in data silos and high wastage.
                </p>
              </section>
              <section>
                <div className="flex items-center gap-3 text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <Zap />
                  </div>
                  <h2 className="text-2xl font-bold">The Solution</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Engineered a synchronized workflow that digitizes demand
                  forecasting, quality control gates, and real-time inventory
                  movements. By integrating automated replenishment (STO/PO) and
                  dispatch logging (DN/GRN), we achieved a transparent and
                  traceable supply chain from source to shelf.
                </p>
              </section>
            </div>
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <CheckCheck className="text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-300 font-medium">
                    Centralized &quot;Actual Demand&quot; Compilation
                  </span>
                </div>
                <div className="flex items-start p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <CheckCheck className="text-primary mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-300 font-medium">
                    Multi-Gate Quality Control (QC) Protocols
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-dark-card border border-white/5 rounded-2xl p-8 sticky top-24">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  Process Engineering
                </span>
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  Workflow Automation
                </span>
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  ERP Integration
                </span>
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  Operational Strategy
                </span>
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  Visio
                </span>
                <span className="px-3 py-1.5 bg-black text-gray-300 text-xs font-mono rounded border border-white/10">
                  Agile
                </span>
              </div>
              <div className="w-full h-px bg-white/10 my-8"></div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Project Impact
              </h3>
              <ul className="space-y-4">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-teal rounded-full"></span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Optimized seafood procurement cycles across multiple
                    regional hubs
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-teal rounded-full"></span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Reduced transit wastage through standardized
                    temperature/handling protocols
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-teal rounded-full"></span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Achieved 100% audit accuracy for quality check documentation
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-teal rounded-full"></span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Established real-time performance visibility for buying and
                    DC teams
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectContent };
