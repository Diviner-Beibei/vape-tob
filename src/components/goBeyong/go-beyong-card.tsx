import Image, { StaticImageData } from "next/image";
import LearnMore from "@/components/learn-more";

interface GoBeyondCardProps {
  lng: string;
  imgUrl: StaticImageData;
}

export default function GoBeyondCard({ lng, imgUrl }: GoBeyondCardProps) {
  return (
    <div className="grid grid-cols-2 w-full h-[600px] px-24 pb-10">
      <div className="rounded-bl-lg rounded-tl-lg overflow-hidden h-full">
        <Image
          src={imgUrl}
          alt="by1"
          style={{
            objectFit: "cover",
          }}
          className="h-full"
        />
      </div>
      <div className="p-[60px] bg-white h-full">
        <p className="text-3xl font-medium mb-6">Lighthouse Guardian Program</p>
        <p className="text-base font-medium mb-2">
          Light minors’ way and guard their future.
        </p>
        <p className="text-base font-normal mb-12">
          ELFBAR always insists on caring about teenagers&apos; health and
          preventing the use of nicotine in any form by minors. We are committed
          to restricting underage access to our products and limiting underage
          appeal of our products through the &apos;Lighthouse Guardian
          Program&apos;. This program aims to protect minors by combating
          underage use of e-cigarettes through concerted efforts that stretch
          from our product development and marketing to sales.
        </p>
        <LearnMore lng={lng} />
      </div>
    </div>
  );
}
