import { FaLinkedinIn, FaGithub, FaXTwitter, FaMedium } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";



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
    color: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40",
    ariaLabel: "LinkedIn Profile"
  },
  {
    name: "GitHub",
    url: "https://github.com/realsanjeev",
    icon: FaGithub,
    color: "hover:text-foreground hover:bg-accent",
    ariaLabel: "GitHub Profile"
  },
  {
    name: "Twitter/X",
    url: "https://x.com/realsanjeev2",
    icon: FaXTwitter,
    color: "hover:text-foreground hover:bg-accent",
    ariaLabel: "Twitter/X Profile"
  },
  {
    name: "Medium",
    url: "https://medium.com/@realsanjeev",
    icon: FaMedium,
    color: "hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
    ariaLabel: "Medium Profile"
  },
  {
    name: "Hugging Face",
    url: "https://huggingface.co/realsanjeev",
    icon: SiHuggingface,
    color: "hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40",
    ariaLabel: "Hugging Face Profile"
  }
];
