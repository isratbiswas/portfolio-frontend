import ProjectCard from "@/components/modules/Project/ProjectCard";
import { IProject } from "@/types";
import React from "react";

const ProjectPage = async () => {
  const res = await fetch(
    "https://portfolio-backend-navy-eight.vercel.app/api/v1/project/all-project",
    {
      cache: "no-store",
    }
  );
  const { data: projects } = await res.json();
  console.log(projects, "llllll");
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Projects</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto max-w-6xl my-5">
        {projects?.map((project: IProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
