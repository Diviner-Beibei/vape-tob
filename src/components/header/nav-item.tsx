import Link from "next/link";

interface NavItemProps {
  text: string;
  url: string;
}

export default function NavItem({ text, url }: NavItemProps) {
  return (
    <li>
      <Link href={url} className="px-2 py-1">
        <span className="hover:text-black">{text}</span>
      </Link>
    </li>
  );
}
