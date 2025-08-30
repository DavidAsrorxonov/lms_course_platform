import { CourseSidebarDataType } from "@/app/data/course/get-course-sidebar-data";
import { Play } from "lucide-react";
import React from "react";

interface iAppProps {
  course: CourseSidebarDataType["course"];
}

const CourseSidebar = ({ course }: iAppProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="pb-4 pr-4 border-b border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Play className="size-5 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <h1>{course.title}</h1>
            <p>{course.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
