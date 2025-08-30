"use server";

import { requireUser } from "@/app/data/user/require-user";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { revalidatePath } from "next/cache";

export const MarkLessonAsCompleted = async (
  lessonId: string,
  slug: string
): Promise<ApiResponse> => {
  const session = await requireUser();

  try {
    await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId: session.id,
          lessonId: lessonId,
        },
      },
      update: {
        completed: true,
      },
      create: {
        lessonId: lessonId,
        userId: session.id,
        completed: true,
      },
    });

    revalidatePath(`/dashboard/${slug}`);

    return {
      status: "success",
      message: "Lesson marked as completed. Progress updated",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again",
    };
  }
};
