import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SocialItemProps {
  url: string;
  icon: IconProp;
}

export default function SocialItem({ icon, url }: SocialItemProps) {
  return (
    <div className="border border-[#666] w-7 h-7 rounded-full flex justify-center items-center">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-[#666]" />
    </div>
  );
}
