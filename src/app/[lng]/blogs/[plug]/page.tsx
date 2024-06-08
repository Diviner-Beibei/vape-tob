interface BlogDetailProps {
  params: {
    lng: string;
    plug: string;
  };
}

export default function BlogDetail({ params: { lng, plug } }: BlogDetailProps) {
  return <main>BlogDetail {plug}</main>;
}
