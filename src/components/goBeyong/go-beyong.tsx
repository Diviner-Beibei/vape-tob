"use client";

import GoBeyondCard from "@/components/goBeyong/go-beyong-card";
import { Swiper, SwiperSlide } from "swiper/react";
import by1 from "/public/images/by1.avif";
import by2 from "/public/images/by2.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

interface GoBeyondProps {
  lng: string;
}

export default function GoBeyond({ lng }: GoBeyondProps) {
  return (
    <section className="bg-[#F7F7F7] py-24 swiper-container">
      <div className="flex flex-col gap-20 justify-center items-center">
        <h2 className="text-[44px] font-medium">Go Beyond</h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          <SwiperSlide>
            <GoBeyondCard lng={lng} imgUrl={by1} />
          </SwiperSlide>
          <SwiperSlide>
            <GoBeyondCard lng={lng} imgUrl={by2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
