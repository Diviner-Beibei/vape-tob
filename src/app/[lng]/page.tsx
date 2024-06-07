import Hero from "@/components/hero";
import ProductsList from "@/components/products";
import GoBeyond from "@/components/goBeyong/go-beyong";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Hero />
      <ProductsList lng={lng} />
      <GoBeyond lng={lng} />
    </main>
  );
}
