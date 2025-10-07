import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  console.log(project);
  return (
    <Link
      href={`/project/${project._id}`}
      className="block group transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {project?.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project?.thumbnail}
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
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            Title: {project?.title}
          </h3>
          <h3 className="text-base  mb-2  transition-colors">
            Repo Link: {project?.repoLink}
          </h3>
          <h3 className="text-base  mb-2  transition-colors">
            Live Link: {project?.liveLink}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            Content: {project?.description.slice(0, 50)}.....
          </p>

          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
