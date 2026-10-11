import svgPaths from "../../../svg-hir4f0sap1";
import { imgGroup } from "../../../svg-tq8e3";

const TwitterIcon = () => {
  return (
    <div
      className="relative h-6 w-6"
      style={{
        maskImage: `url("${imgGroup}")`,
        WebkitMaskImage: `url("${imgGroup}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "24px 24px",
        WebkitMaskSize: "24px 24px",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 24 22"
        fill="none"
      >
        <path d={svgPaths.p3e3ab00} fill="currentColor" />
      </svg>
    </div>
  );
};

export default TwitterIcon;
