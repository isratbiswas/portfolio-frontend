"use client";

import { createProject } from "@/actions/createProject";
import Form from "next/form";

const CreateProjectForm = () => {
  return (
    <Form
      action={createProject}
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full"
    >
      <h2 className="text-xl font-semibold mb-4">Create Project</h2>
      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* live link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Live Link
        </label>
        <input
          type="url"
          id="liveLink"
          name="liveLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* repo link */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Repo Link
        </label>
        <input
          type="url"
          id="repoLink"
          name="repoLink"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* features */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="features">
          Features
        </label>
        <input
          type="text"
          id="features"
          name="features"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="thumbnail">
          Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnail"
          name="thumbnail"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </Form>
  );
};

export default CreateProjectForm;
