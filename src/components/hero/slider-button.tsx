import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SliderButtonProps {
  icon: IconDefinition;
  handleClick: () => void;
}

export default function SliderButton({ icon, handleClick }: SliderButtonProps) {
  return (
    <div
      className="bg-[rgba(0,0,0,0.3)] rounded-full p-2 cursor-pointer flex justify-center items-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6 text-white " />
    </div>
  );
}
