import Image, { StaticImageData } from "next/image";

interface ProductProps {
  title: string;
  imgUrl: StaticImageData;
}

export default function ProductCard({ title, imgUrl }: ProductProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center pb-10">
      <div className="bg-[#f8f8f8] p-1">
        <Image src={imgUrl} alt="product 1" className="bg-transparent" />
      </div>

      <p>{title}</p>
    </div>
  );
}
