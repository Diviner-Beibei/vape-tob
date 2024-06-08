"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";

import NavItem from "@/components/header/nav-item";
import { FaGlobe } from "react-icons/fa";
import { useEffect, useRef } from "react";
import "@/styles/header.css";

interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  const headerRef = useRef(null); // 创建引用
  const logoRef = useRef(null); // 创建引用

  useEffect(() => {
    const header = headerRef.current; // 获取DOM对象
    const logo = logoRef.current; // 获取DOM对象
    const warnEl = document.querySelector(".warn-el");
    if (!header || !logo || !warnEl) return;

    const headerNode = header as HTMLElement; // 类型断言
    const logoNode = logo as HTMLElement; // 类型断言

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting && entry.intersectionRatio < 0.1) {
          // 当header快要离开视窗时
          headerNode.classList.add("header-sticky");
          logoNode.classList.add("logo-sticky");
        }
        if (entry.isIntersecting) {
          // 当header完全进入视窗时
          headerNode.classList.remove("header-sticky");
          logoNode.classList.remove("logo-sticky");
        }

        console.log(entry.isIntersecting, entry.boundingClientRect.top);
      },
      {
        root: null, // 观察视窗
        rootMargin: "0px",
        threshold: [0.1],
      }
    );

    observer.observe(warnEl); // 开始观察header
  });

  return (
    <header ref={headerRef} className={`h-24 border-b bg-white`}>
      <nav className="flex items-center justify-between px-10 max-w-[1740px] h-full">
        <div ref={logoRef}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex  items-center gap-8 text-[#4D4D4D] text-sm font-medium mr-52">
          <NavItem text="Products" url={`/${lng}/products`} />
          <NavItem text="support" url={`/${lng}/support`} />
          <NavItem text="About" url={`/${lng}/about`} />
          <NavItem text="Contact us" url={`/${lng}/contact`} />
        </ul>
        <div>
          <FaGlobe className="w-5 h-5" />
        </div>
      </nav>
    </header>
  );
}
