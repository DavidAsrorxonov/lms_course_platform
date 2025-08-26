import { prisma } from "@/lib/db";

export const getAllCourses = async () => {
  const data = await prisma.course.findMany({
    where: {
      status: "Published",
    },
    select: {
      title: true,
      price: true,
      slug: true,
      fileKey: true,
      id: true,
      duration: true,
      category: true,
      smallDescription: true,
      level: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

export type PublicCourseType = Awaited<ReturnType<typeof getAllCourses>>[0];
