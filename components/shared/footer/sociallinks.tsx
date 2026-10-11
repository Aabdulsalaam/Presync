import Link from "next/link";
import FacebookIcon from "./icons/facebookicon";
import InstagramIcon from "./icons/instagramicon";
import TwitterIcon from "./icons/twittericon";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-5 lg:justify-end">
      <Link
        href="#"
        aria-label="Facebook"
        className="transition-transform duration-300 hover:scale-110 hover:text-[#4C71FE]"
      >
        <FacebookIcon />
      </Link>

      <Link
        href="#"
        aria-label="Instagram"
        className="transition-transform duration-300 hover:scale-110 hover:text-[#4C71FE]"
      >
        <InstagramIcon />
      </Link>

      <Link
        href="#"
        aria-label="Twitter"
        className="transition-transform duration-300 hover:scale-110 hover:text-[#4C71FE]"
      >
        <TwitterIcon />
      </Link>
    </div>
  );
};

export default SocialLinks;