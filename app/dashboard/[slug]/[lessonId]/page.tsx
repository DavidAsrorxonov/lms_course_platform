import { getLessonContent } from "@/app/data/course/get-lesson-content";
import React from "react";
import CourseContent from "./_components/CourseContent";

type Params = Promise<{ lessonId: string }>;

const LessonContentPage = async ({ params }: { params: Params }) => {
  const { lessonId } = await params;

  const data = await getLessonContent(lessonId);

  return <CourseContent data={data} />;
};

export default LessonContentPage;
