import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.svg";

import NavItem from "@/components/header/nav-item";
import { FaGlobe } from "react-icons/fa";

interface HeaderProps {
  lng: string;
}

export default async function Header({ lng }: HeaderProps) {
  return (
    <header className="h-24 border-b bg-white">
      <nav className="flex items-center justify-between px-10 max-w-[1740px] h-full">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex  items-center gap-8 text-[#4D4D4D] text-sm font-medium mr-52">
          <NavItem text="Products" url={`/${lng}/products`} />
          <NavItem text="Blogs" url={`/${lng}/blogs`} />

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
