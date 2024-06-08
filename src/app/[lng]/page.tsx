import Hero from "@/components/hero";
import ProductsList from "@/components/products";
import GoBeyond from "@/components/goBeyong";
import SubscribeUs from "@/components/subscribe-us";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Hero />
      <ProductsList lng={lng} />
      <GoBeyond lng={lng} />
      <SubscribeUs lng={lng} />
    </main>
  );
}
