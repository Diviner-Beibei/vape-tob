import FooterItem from "@/components/footer/footer-item";

interface FooterProps {
  lng: string;
}

export default function Footer({ lng }: FooterProps) {
  const products = [
    { href: `/${lng}/products/disposable`, text: "Disposable" },
    { href: `/${lng}/products/pod-system`, text: "Pod System" },
  ];

  const about = [
    { href: `/${lng}/about/story`, text: "ELFBAR Story" },
    { href: `/${lng}/about/blog`, text: "Blog" },
  ];

  return (
    <footer className="bg-[#F7F7F7] py-20 px-10">
      <div className="grid grid-cols-4">
        <FooterItem title="Product" links={products} />
        <FooterItem title="About" links={about} />
      </div>
    </footer>
  );
}
