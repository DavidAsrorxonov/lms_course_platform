import { LessonContentType } from "@/app/data/course/get-lesson-content";
import RenderDescription from "@/components/rich-text-editor/RenderDescription";
import { Button } from "@/components/ui/button";
import { useConstructUrl } from "@/hooks/use-construct-url";
import { BookIcon, CheckCircle } from "lucide-react";
import React from "react";

interface iAppProps {
  data: LessonContentType;
}

const CourseContent = ({ data }: iAppProps) => {
  const VideoPlayer = ({
    thumbnailKey,
    videoKey,
  }: {
    thumbnailKey: string;
    videoKey: string;
  }) => {
    const videoUrl = useConstructUrl(videoKey);
    const thumbnailUrl = useConstructUrl(thumbnailKey);

    if (!videoKey) {
      return (
        <div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center">
          <BookIcon className="size-16 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">This lesson has no video yet</p>
        </div>
      );
    }

    return (
      <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          poster={thumbnailUrl}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-background pl-6">
      <VideoPlayer
        videoKey={data.videoKey ?? ""}
        thumbnailKey={data.thumbnailKey ?? ""}
      />

      <div className="py-4 border-b">
        <Button variant={"outline"}>
          <CheckCircle className="mr-2 size-4 text-green-500" />
          Mark as Completed
        </Button>
      </div>

      <div className="space-y-3 pt-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {data.title}
        </h1>

        {data.description && (
          <RenderDescription json={JSON.parse(data.description)} />
        )}
      </div>
    </div>
  );
};

export default CourseContent;
