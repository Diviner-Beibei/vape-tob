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
    <header>
      <nav className="flex items-center justify-between px-10">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex  items-center gap-5 text-[#4D4D4D] text-sm font-medium">
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
