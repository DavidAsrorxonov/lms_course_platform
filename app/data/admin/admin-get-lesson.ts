import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";
import { notFound } from "next/navigation";

export const AdminGetLesson = async (lessonId: string) => {
  await requireAdmin();

  const data = await prisma.lesson.findUnique({
    where: {
      id: lessonId,
    },
    select: {
      title: true,
      videoKey: true,
      thumbnailKey: true,
      description: true,
      id: true,
      position: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
};

export type AdminGetLessonType = Awaited<ReturnType<typeof AdminGetLesson>>;
