import { getAllCourses } from "@/app/data/course/get-all-courses";
import React, { Suspense } from "react";
import PublicCourseCard, {
  PublicCourseCardSkeleton,
} from "../_components/PublicCourseCard";

const PublicCoursesRoute = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col space-y-2 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Explore Courses
        </h1>
        <p className="text-muted-foreground">
          Discover a wide range of courses designed to help you achieve your
          learning goals. Go <span className="text-primary">beyond</span> the
          limits of traditional learning.
        </p>
      </div>

      <Suspense fallback={<LoadingSkeletonLayout />}>
        <RenderCourses />
      </Suspense>
    </div>
  );
};

export default PublicCoursesRoute;

const RenderCourses = async () => {
  const courses = await getAllCourses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <PublicCourseCard data={course} key={course.id} />
      ))}
    </div>
  );
};

export const LoadingSkeletonLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <PublicCourseCardSkeleton key={index} />
      ))}
    </div>
  );
};
