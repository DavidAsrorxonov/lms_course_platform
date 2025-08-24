import { AdminCourseType } from "@/app/data/admin/admin-get-courses";
import { Card } from "@/components/ui/card";
import { useConstructUrl } from "@/hooks/use-construct-url";
import Image from "next/image";

interface iAppProps {
  data: AdminCourseType;
}

export const AdminCourseCard = ({ data }: iAppProps) => {
  const thumbnailUrl = useConstructUrl(data.fileKey);

  return (
    <Card className="group relative">
      <div></div>

      <Image src={thumbnailUrl} alt="Thumbnail URL" width={600} height={400} />
    </Card>
  );
};
