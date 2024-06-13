import JoinUs from "@/components/blog/join-us";

interface BlogDetailProps {
  params: {
    lng: string;
    plug: string;
  };
}

export default function BlogDetail({ params: { lng, plug } }: BlogDetailProps) {
  return (
    <main>
      <div className="grid grid-cols-[2fr_1fr] ">
        <div></div>
        <JoinUs />
      </div>
    </main>
  );
}
