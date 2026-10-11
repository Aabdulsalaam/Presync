import { CheckIcon, CancelIcon } from "./icons";

interface FeatureItemProps {
  text: string;
  available: boolean;
}

export default function FeatureItem({
  text,
  available,
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        {available ? <CheckIcon /> : <CancelIcon />}
      </div>

      <p className="text-base text-black font-normal leading-6">
        {text}
      </p>
    </div>
  );
}