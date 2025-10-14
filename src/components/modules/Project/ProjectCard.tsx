import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {project?.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project?.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          No Image
        </div>
      )}

      <div className="p-6">
        <h3 className="text-md font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          Title: {project?.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          <span className="text-md font-semibold">Description : </span>
          {project?.description}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ">
            <a
              href={project?.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            <a
              href={project?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
