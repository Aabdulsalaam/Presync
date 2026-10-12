import FooterBottom from "./footerbottom";
import FooterLinks from "./footerlinks";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-12">
          <FooterLinks />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;