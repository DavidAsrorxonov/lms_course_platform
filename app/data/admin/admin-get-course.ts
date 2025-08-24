import "server-only";
import { requireAdmin } from "./require-admin";
import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export const AdminGetCourse = async (id: string) => {
  await requireAdmin();

  const data = prisma.course.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      smallDescription: true,
      duration: true,
      level: true,
      status: true,
      description: true,
      price: true,
      fileKey: true,
      slug: true,
      category: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
};

export type AdminCourseSingularType = Awaited<
  ReturnType<typeof AdminGetCourse>
>;
