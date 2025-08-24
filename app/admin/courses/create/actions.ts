"use server";

import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaInput } from "@/lib/zodSchemas";

export const CreateCourse = async (
  data: CourseSchemaInput
): Promise<ApiResponse> => {
  try {
    const validation = courseSchema.safeParse(data);

    if (!validation.success) {
      return {
        status: "error",
        message: "Invalid Form Data",
      };
    }

    const course = await prisma.course.create({
      data: {
        ...validation.data,
        userId: "hello",
      },
    });

    return {
      status: "success",
      message: "Course created successfully",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to create course",
    };
  }
};
