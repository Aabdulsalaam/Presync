import FooterLinks from "./footerlinks";
import FooterBottom from "./footerbottom";

const FooterSection = () => {
  return (
    <div className="w-full max-w-[1204px] flex flex-col gap-12">
      <FooterLinks />
      <FooterBottom />
    </div>
  );
};

export default FooterSection;