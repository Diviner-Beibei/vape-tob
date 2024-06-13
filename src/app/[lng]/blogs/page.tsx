import Image from "next/image";
import BlogCard from "@/components/blog/blog-card";
import JoinUs from "@/components/blog/join-us";
import SubscribeUs from "@/components/subscribe-us";

import BlogTop from "/public/images/blogtop.webp";
import Blog1 from "/public/images/blog1.webp";

export default function BlogsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <main>
      <section className="grid grid-cols-[2fr_1fr] px-10 gap-20 font-sans bg-[#f3f5f6]">
        <div className="flex flex-col gap-5 py-10 border-b">
          <h1 className="text-4xl mb-3 font-medium">Blog Posts</h1>

          <div className="grid grid-cols-2 gap-10">
            <BlogCard
              lng={lng}
              id="1"
              title="Lost Mary Flavours: These Are the Ones You Have to Try"
              imgUrl={Blog1}
              date="May 26, 2024"
              description="There is no question that flavour is everything in vaping – and in the world of disposable vapes, there’s no question that the Lost Mary brand is k..."
            />
            <BlogCard
              lng={lng}
              id="2"
              title="Lost Mary Flavours: These Are the Ones You Have to Try"
              imgUrl={BlogTop}
              date="May 26, 2024"
              description="There is no question that flavour is everything in vaping – and in the world of disposable vapes, there’s no question that the Lost Mary brand is k..."
            />
            <BlogCard
              lng={lng}
              id="3"
              title="Lost Mary Flavours: These Are the Ones You Have to Try"
              imgUrl={Blog1}
              date="May 26, 2024"
              description="There is no question that flavour is everything in vaping – and in the world of disposable vapes, there’s no question that the Lost Mary brand is k..."
            />
          </div>
        </div>
        <div className="">
          <JoinUs />
        </div>
      </section>
      {/* <SubscribeUs lng="" /> */}
    </main>
  );
}
