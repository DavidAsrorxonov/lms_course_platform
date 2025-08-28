import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export const getDashboardStats = async () => {
  await requireAdmin();

  const [totalSignups, totalCustomers, totalCourses, totalLessons] =
    await Promise.all([
      prisma.user.count(), // total singups
      prisma.user.count({
        where: {
          enrollment: {
            some: {},
          },
        },
      }), // total customers/enrollments

      prisma.course.count(), // total courses
      prisma.lesson.count(), // total lessons
    ]);

  return {
    totalSignups,
    totalCustomers,
    totalCourses,
    totalLessons,
  };
};
