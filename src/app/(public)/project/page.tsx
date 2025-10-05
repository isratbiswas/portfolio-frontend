import ProjectCard from "@/components/modules/Project/ProjectCard";
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
    <div>
      <h1>Project All</h1>
      {projects?.map((project: any) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
