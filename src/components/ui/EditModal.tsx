"use client";

import { useId, useState } from "react";
import { CheckIcon, ImagePlusIcon, XIcon } from "lucide-react";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import AlertModal from "./AlertModal";

// Pretend we have initial image files

export default function EditModal() {
  const id = useId();

  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4 text-1xl px-6 py-2">
          Edit Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Update Blog
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a
          username.
        </DialogDescription>
        <div className="overflow-y-auto">
          <div className="px-6 pt-4 pb-6">
            <form className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`${id}-title`}>Title</Label>
                  <Input id={`${id}-title`} type="text" required />
                </div>
              </div>

              <div className="*:not-first:mt-2">
                <div className=" rounded-md shadow-xs">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="thumbnail"
                  >
                    Thumbnail URL
                  </label>
                  <input
                    type="url"
                    id="thumbnail"
                    name="thumbnail"
                    className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="*:not-first:mt-2">
                <Label htmlFor={`${id}-bio`}>Content</Label>
                <Textarea id={`${id}-bio`} maxLength={maxLength} />
              </div>
            </form>
          </div>
        </div>
        <DialogFooter className="border-t px-6 py-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <AlertModal />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// function ProfileBg() {
//   const [{ files }, { removeFile, openFileDialog, getInputProps }] =
//     useFileUpload({
//       accept: "image/*",
//       initialFiles: initialBgImage,
//     });

//   const currentImage = files[0]?.preview || null;

//   return (
//     <div className="h-32">
//       <div className="bg-muted relative flex size-full items-center justify-center overflow-hidden">
//         {currentImage && (
//           <img
//             className="size-full object-cover"
//             src={currentImage}
//             alt={
//               files[0]?.preview
//                 ? "Preview of uploaded image"
//                 : "Default profile background"
//             }
//             width={512}
//             height={96}
//           />
//         )}
//         <div className="absolute inset-0 flex items-center justify-center gap-2">
//           <button
//             type="button"
//             className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
//             onClick={openFileDialog}
//             aria-label={currentImage ? "Change image" : "Upload image"}
//           >
//             <ImagePlusIcon size={16} aria-hidden="true" />
//           </button>
//           {currentImage && (
//             <button
//               type="button"
//               className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
//               onClick={() => removeFile(files[0]?.id)}
//               aria-label="Remove image"
//             >
//               <XIcon size={16} aria-hidden="true" />
//             </button>
//           )}
//         </div>
//       </div>
//       <input
//         {...getInputProps()}
//         className="sr-only"
//         aria-label="Upload image file"
//       />
//     </div>
//   );
// }

// function Avatar() {
//   const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
//     accept: "image/*",
//     initialFiles: initialAvatarImage,
//   });

//   const currentImage = files[0]?.preview || null;

//   return (
//     <div className="-mt-10 px-6">
//       <div className="border-background bg-muted relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 shadow-xs shadow-black/10">
//         {currentImage && (
//           <img
//             src={currentImage}
//             className="size-full object-cover"
//             width={80}
//             height={80}
//             alt="Profile image"
//           />
//         )}
//         <button
//           type="button"
//           className="focus-visible:border-ring focus-visible:ring-ring/50 absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
//           onClick={openFileDialog}
//           aria-label="Change profile picture"
//         >
//           <ImagePlusIcon size={16} aria-hidden="true" />
//         </button>
//         <input
//           {...getInputProps()}
//           className="sr-only"
//           aria-label="Upload profile picture"
//         />
//       </div>
//     </div>
//   );
// }
