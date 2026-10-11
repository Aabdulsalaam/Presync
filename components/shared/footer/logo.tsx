import svgPaths from "../../svg-hir4f0sap1";

const Logo = () => {
  return (
    <div className="flex h-[30px] w-[210px] items-center justify-between">
      <div className="relative h-[30px] w-[78px] shrink-0">
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          viewBox="0 0 78 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#logoClip)">
            <path d={svgPaths.p3fcd3d00} fill="#4C71FE" />
            <path d={svgPaths.p39b8a00} fill="#4C71FE" />
          </g>

          <defs>
            <clipPath id="logoClip">
              <rect width="78" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <h2 className="whitespace-nowrap text-2xl font-black uppercase text-[#4C71FE]">
        Presynce
      </h2>
    </div>
  );
};

export default Logo;
