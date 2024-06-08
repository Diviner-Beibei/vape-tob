import Link from "next/link";

interface FooterItemProps {
  title: string;
  links: { href: string; text: string }[];
}

export default function FooterItem({ title, links }: FooterItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-base font-medium">{title}</p>

      {links.map(({ href, text }) => (
        <Link key={text} href={href}>
          {text}
        </Link>
      ))}
    </div>
  );
}
