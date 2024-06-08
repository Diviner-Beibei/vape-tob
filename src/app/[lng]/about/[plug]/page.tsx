interface AboutDetailsProps {
  params: {
    lng: string;
    plug: string;
  };
}

export default function AboutDetails({
  params: { lng, plug },
}: AboutDetailsProps) {
  return <main>AboutDetails {plug}</main>;
}
