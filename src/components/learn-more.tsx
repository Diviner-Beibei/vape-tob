import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface LearnMoreProps {
  lng: string;
}

export default function LearnMore({ lng }: LearnMoreProps) {
  return (
    <div className="flex gap-3 items-center">
      <span className="text-base ">Learn More</span>
      <FontAwesomeIcon icon={faAngleRight} className="text-sm" />
    </div>
  );
}
