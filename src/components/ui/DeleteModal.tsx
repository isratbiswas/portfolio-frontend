"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBlog } from "@/actions/create";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface DeleteModalProps {
  blogId: string;
}
export default function DeleteModal({ blogId }: { blogId: string }) {
  const handleDelete = async () => {
    try {
      const data = await deleteBlog(blogId);
      if (data.success) {
        toast.success("Blog deleted successfully!");
      } else {
        toast.error("Failed to delete blog!");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="mt-4 text-1xl px-6 py-2">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>Delete Your Blog...</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleDelete}>Okay</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
