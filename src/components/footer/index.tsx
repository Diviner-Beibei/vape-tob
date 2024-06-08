import FooterItem from "@/components/footer/footer-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import SocialItem from "@/components/footer/social-item";

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
    { href: `/${lng}/about/tech`, text: "QUAQ Tech" },
    { href: `/${lng}/about/sustainability`, text: "ELFBAR Sustainability" },
  ];

  const support = [
    { href: `/${lng}/contact`, text: "Contact Us" },
    { href: `/${lng}/support`, text: "FAQ" },
  ];

  const blogs = [
    { href: `/${lng}/blogs/common/1`, text: "Vaping for Beginners" },
    { href: `/${lng}/blogs/common/2`, text: "Tips On Buying Your First Vape" },
  ];

  return (
    <footer className="bg-[#F7F7F7] py-20 px-10">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_2fr] mb-5">
        <FooterItem title="Product" links={products} />
        <FooterItem title="About" links={about} />
        <FooterItem title="Support" links={support} />
        <FooterItem title="Blogs" links={blogs} />
        <div className="flex flex-col gap-3 items-start px-10">
          <p className="text-base font-medium">Customer Service</p>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            <strong className="text-base mr-2">rookiepbb@gmail.com</strong>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
            <strong className="text-base mr-2">
              Registered in New Zealand: 158705.
            </strong>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 border-b border-[#666] pb-5">
        <p className="text-base font-medium">Follow Us</p>
        <div className="flex gap-5">
          <SocialItem icon={faFacebookF} url="#" />
          <SocialItem icon={faInstagram} url="#" />
          <SocialItem icon={faTwitter} url="#" />
          <SocialItem icon={faYoutube} url="#" />
          <SocialItem icon={faDiscord} url="#" />
        </div>
      </div>
      <p className="text-[#666] text-sm mt-5">
        Copyright © 2024 ELFBAR. All rights reserved.
      </p>
    </footer>
  );
}
