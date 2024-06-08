interface ProductDetailsProps {
  params: {
    lng: string;
    plug: string;
  };
}

export default function ProductDetails({
  params: { lng, plug },
}: ProductDetailsProps) {
  return <main>ProductDetails {plug}</main>;
}
