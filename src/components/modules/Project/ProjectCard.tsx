import { IProject } from "@/types";
import Image from "next/image";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {project?.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src="https://bigpicture.stage.appfire.com/wp-content/uploads/2022/03/3-project-portfolio-examples-portfolio-vs-program.png"
            alt={project?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          <Image
            src="https://bigpicture.stage.appfire.com/wp-content/uploads/2022/03/3-project-portfolio-examples-portfolio-vs-program.png"
            alt={project?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-md font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          Title: {project?.title}
        </h3>
        <h3 className="text-base text-gray-600 font-md  mb-2  transition-colors">
          <span className="text-md font-semibold">Repo Link : </span>
          {project?.repoLink}
        </h3>
        <h3 className="text-base text-gray-600 font-md  mb-2  transition-colors">
          <span className="text-md font-semibold"> Live Link : </span>
          {project?.liveLink}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          <span className="text-md font-semibold">Description : </span>
          {project?.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
