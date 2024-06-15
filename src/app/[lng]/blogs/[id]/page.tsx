import Image from "next/image";
import JoinUs from "@/components/blog/join-us";
import { getBlog } from "@/services/blog-service";
import { formatDate } from "@/utils/format-date";
import ArticleNavigation from "@/components/blog/article-navigation";
import "@/styles/blog.css";

interface BlogDetailProps {
  params: {
    lng: string;
    id: string;
  };
}

export default async function BlogDetail({
  params: { lng, id },
}: BlogDetailProps) {
  const blog = await getBlog({ id });
  if (blog.code !== "success") {
    return <div>Failed to fetch blog</div>;
  }

  return (
    <main className="blog-content bg-[#f3f5f6]">
      <div className="max-w-screen-xl p-10">
        <div className="font-sans flex flex-col gap-4">
          <h1 className="text-3xl font-medium text-[#1e2d7d]">
            {blog.data.title}
          </h1>

          <div className="flex gap-4 items-center text-[#677279] mb-4">
            <span>{blog.data.author}</span>
            <span className="w-[6px] h-[6px] rounded bg-[#67727966]"></span>
            <span>{formatDate(blog.data.updated_at)}</span>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-20 ">
            <div className="w-full rounded overflow-hidden">
              <Image
                src={blog.data.cover_image}
                alt=""
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
            <JoinUs />
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-20">
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.data.content }}
                className="px-10 mt-10"
              />
              <ArticleNavigation id={id} />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
}
