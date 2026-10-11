import SocialLinks from "./sociallinks";
import CopyrightIcon from "./icons/copyright";

const FooterBottom = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      {/* Divider */}
      <hr className="border-t border-[#7B7D82]" />

      {/* Bottom Content */}
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <CopyrightIcon />

          <p className="text-xs uppercase tracking-[1.43px] text-black">
            <span>2026 </span>

            <span className="font-bold">Presynce</span>

            <span> Inc. All rights reserved.</span>
          </p>
        </div>

        {/* Social Icons */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default FooterBottom;