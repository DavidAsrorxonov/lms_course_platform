import { getLessonContent } from "@/app/data/course/get-lesson-content";
import React from "react";

type Params = Promise<{ lessonId: string }>;

const LessonContentPage = async ({ params }: { params: Params }) => {
  const { lessonId } = await params;

  const data = await getLessonContent(lessonId);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default LessonContentPage;
