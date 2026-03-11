import { FaLinkedinIn, FaGithub, FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";

export const NAME = "Sanjeev Bhandari";
export const TITLE = "Machine Learning Engineer";
export const EMAIL = "075bei033.sanjeev@pcampus.edu.np";
export const LINKEDIN_URL = "https://www.linkedin.com/in/realsanjeev";
export const GITHUB_URL = "https://github.com/realsanjeev";
export const TWITTER_URL = "https://twitter.com/realsanjeev2";
export const MEDIUM_URL = "https://medium.com/@sanjeev-bhandari";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
  ariaLabel?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/realsanjeev",
    icon: FaLinkedinIn,
    color: "hover:text-blue-600 hover:bg-blue-50",
    ariaLabel: "LinkedIn Profile"
  },
  {
    name: "GitHub",
    url: "https://github.com/realsanjeev",
    icon: FaGithub,
    color: "hover:text-gray-900 hover:bg-gray-100",
    ariaLabel: "GitHub Profile"
  },
  {
    name: "Twitter/X",
    url: "https://x.com/realsanjeev2",
    icon: FaXTwitter,
    color: "hover:text-gray-900 hover:bg-gray-100",
    ariaLabel: "Twitter/X Profile"
  },
  {
    name: "Medium",
    url: "https://medium.com/@sanjeev-bhandari",
    icon: FaMedium,
    color: "hover:text-white hover:bg-green-600",
    ariaLabel: "Medium Profile"
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/sanjeev-bhandari01",
    icon: SiHuggingface,
    color: "hover:text-white hover:bg-yellow-500",
    ariaLabel: "Hugging Face Profile"
  }
];
