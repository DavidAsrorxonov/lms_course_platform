import { ChartAreaInteractive } from "@/components/sidebar/chart-area-interactive";
import { SectionCards } from "@/components/sidebar/section-cards";
import React, { Suspense } from "react";
import { adminGetEnrollmentStats } from "../data/admin/admin-get-enrollment-stats";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { adminGetRecentCourses } from "../data/admin/admin-get-recent-courses";
import EmptyState from "@/components/general/EmptyState";
import {
  AdminCourseCard,
  AdminCourseCardSkeleton,
} from "./courses/_components/AdminCourseCard";

const AdminIndexPage = async () => {
  const enrollmentData = await adminGetEnrollmentStats();

  return (
    <>
      <SectionCards />
      <ChartAreaInteractive data={enrollmentData} />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Courses</h2>
          <Link
            href={"/admin/courses"}
            className={buttonVariants({
              variant: "outline",
            })}
          >
            View all courses
          </Link>
        </div>

        <Suspense fallback={<RenderRecentCourseSkeletonLayout />}>
          <RenderRecentCourses />
        </Suspense>
      </div>
    </>
  );
};

export default AdminIndexPage;

export const RenderRecentCourses = async () => {
  const data = await adminGetRecentCourses();

  if (data.length === 0) {
    return (
      <EmptyState
        buttonText="Create a new Course"
        description="You do not have any courses. Create a new course to see it here."
        title="No Courses Found"
        href="/admin/courses/create"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((course) => (
        // @ts-expect-error: AdminCourseCard expects stricter props
        <AdminCourseCard key={course.id} data={course} />
      ))}
    </div>
  );
};

export const RenderRecentCourseSkeletonLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, index) => (
        <AdminCourseCardSkeleton key={index} />
      ))}
    </div>
  );
};
