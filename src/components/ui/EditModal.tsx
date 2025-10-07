"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { updateBlog } from "@/actions/create";

interface EditModalProps {
  data: {
    title: string;
    content: string;
    thumbnail: string;
  };
  blogId: string;
}

export default function EditModal({ data, blogId }: EditModalProps) {
  const [title, setTitle] = useState(data.title);
  const [thumbnail, setThumbnail] = useState(data.thumbnail);
  const [content, setContent] = useState(data.content);
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("thumbnail", thumbnail);
      formData.append("content", content);

      const result = await updateBlog(formData, blogId);

      if (result) {
        toast.success("Blog updated successfully!");
      } else {
        toast.error("Failed to update blog!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4 px-6 py-2">
          Edit Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg p-0">
        <DialogHeader className="contents">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Update Blog
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pt-4 pb-6 space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="border-t px-6 py-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleEdit} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
