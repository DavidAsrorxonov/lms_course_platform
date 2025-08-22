"use client";

import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { RenderEmptyState, RenderErrorState } from "./RenderState";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface UploaderState {
  id: string | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
  fileType: "image" | "video";
}

const Uploader = () => {
  const [fileState, setFileState] = useState<UploaderState>({
    error: false,
    file: null,
    id: null,
    uploading: false,
    progress: 0,
    isDeleting: false,
    fileType: "image",
  });

  const uploadFile = (file: File) => {
    setFileState((prev) => ({
      ...prev,
      uploading: true,
      progress: 0,
    }));

    try {
    } catch (error) {}
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // do smth
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];

      setFileState({
        file: file,
        uploading: false,
        progress: 0,
        objectUrl: URL.createObjectURL(file),
        error: false,
        id: uuidv4(),
        isDeleting: false,
        fileType: "image",
      });
    }
  }, []);

  const rejectedFiles = (fileRejection: FileRejection[]) => {
    if (fileRejection.length) {
      const tooManyFiles = fileRejection.find(
        (rejection) => rejection.errors[0].code === "too-many-files"
      );

      const fileSizeTooBig = fileRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );

      if (tooManyFiles) {
        toast.error("Too many files selected. Max is one.");
      }
      if (fileSizeTooBig) {
        toast.error("File size exceeds the limit. The limit is 5 MBs.");
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "images/*": [],
    },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024, // 5MB calculation
    onDropRejected: rejectedFiles,
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors duration-200 w-full h-64",
        isDragActive
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary"
      )}
    >
      <CardContent className="flex items-center justify-center h-full w-full p-4">
        <input {...getInputProps()} />
        <RenderEmptyState isDragActive={isDragActive} />
        {/* <RenderErrorState /> */}
      </CardContent>
    </Card>
  );
};

export default Uploader;
