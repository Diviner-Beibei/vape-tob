import JoinUs from "@/components/blog/join-us";
import BlogList from "@/components/blog/blog-list";
import { getBlogs, BlogPaginationInfo } from "@/services/blog-service";

export default async function BlogsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const res = await getBlogs({ page: 1 });
  if (res.code !== "success") {
    console.log("Failed to fetch blogs");

    return;
  }

  return (
    <main>
      <section className="grid grid-cols-[2fr_1fr] px-10 gap-20 font-sans bg-[#f3f5f6]">
        <div className="flex flex-col gap-5 pt-10 ">
          <h1 className="text-4xl mb-3 font-medium">Blog Posts</h1>
          <BlogList lng={lng} initialBlogs={res.data} />
        </div>
        <div className="mt-28">
          <JoinUs />
        </div>
      </section>
    </main>
  );
}
