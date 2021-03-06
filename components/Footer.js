import { SiGithub, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
const Footer = () => {
  return (
    <div className="p-3 text-darkText flex">
      <div className="ml-auto mr-auto text-center">
        <a className="inline-flex text-lg">
          Built with <SiNextdotjs className="mt-1 ml-1 mr-1" />{" "}
          <SiTailwindcss className="mt-1 ml-1 mr-1" /> and 💜 by Ammaar Aslam
        </a>
        <div className="">
          <SiGithub className="text-2xl ml-auto mr-auto" />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
