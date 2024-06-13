import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  lng: string;
  id: string;
  imgUrl: StaticImageData;
  title: string;
  date: string;
  description: string;
}

export default function BlogCard({
  lng,
  id,
  imgUrl,
  title,
  date,
  description,
}: BlogCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href={`/${lng}/blogs/${id}`}
        className="mb-2 rounded overflow-hidden"
      >
        <Image
          src={imgUrl}
          alt=""
          style={{ objectFit: "cover" }}
          className="h-64"
        />
      </Link>

      <Link href={""}>
        <h3 className="text-[22px] text-[#1e2d7d] font-openSans font-semibold mb-1">
          {title}
        </h3>
      </Link>

      <p className="text-sm text-[#677279] mb-2">{date}</p>
      <div className="text-[#677279] break-words text-base font-openSans">
        {description}
      </div>
    </div>
  );
}
