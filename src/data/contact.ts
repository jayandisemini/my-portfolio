import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

export const contactInfo = {
  email: "jayandisemini2003@gmail.com",
  location: "Based in Sri Lanka · Open to remote",
};

export const socials: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jayandi-semini-b6723a326",
    label: "LinkedIn",
  },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/share/1BFNTxACD1/", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/semini1101?igsh=cXBxbDljcGZvcmdq",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:jayandisemini2003@gmail.com", label: "Email" },
];
