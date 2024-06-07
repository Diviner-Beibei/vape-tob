"use client";

import prod1 from "/public/images/products/prod1.avif";
import prod2 from "/public/images/products/prod2.avif";
import prod3 from "/public/images/products/prod3.avif";
import prod4 from "/public/images/products/prod4.avif";
import prod5 from "/public/images/products/prod5.avif";
import prod6 from "/public/images/products/prod6.avif";
import prod7 from "/public/images/products/prod7.avif";

import ProductCard from "@/components/products/product-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface ProductProps {
  lng: string;
}

export default function ProductsList({ lng }: ProductProps) {
  const products = [
    { imgUrl: prod1, title: "Pi7000" },
    { imgUrl: prod2, title: "Pi7000" },
    { imgUrl: prod3, title: "Pi7000" },
    { imgUrl: prod4, title: "Pi7000" },
    { imgUrl: prod5, title: "Pi7000" },
    { imgUrl: prod6, title: "Pi7000" },
    { imgUrl: prod7, title: "Pi7000" },
  ];

  return (
    <section className="flex flex-col gap-20 justify-center items-center py-24">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-[44px] font-medium">ELFBAR Products</h2>

        <Link href={`/${lng}/products`}>
          <div className="flex gap-3 items-center">
            <span className="text-base ">Learn More</span>
            <FontAwesomeIcon icon={faAngleRight} className="text-sm" />
          </div>
        </Link>
      </div>
      <div className="w-full overflow-hidden  px-32">
        <Swiper
          spaceBetween={10} // 设置滑块之间的间距
          slidesPerView={5} // 设置每次视图中显示的滑块数量
          pagination={true}
          modules={[Pagination]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard imgUrl={product.imgUrl} title={product.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
