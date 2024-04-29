import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariants } from "@/app/lib/animations";
import TooltipComponent from "@/app/ui/components/TooltipComponent";
import PhoneIcon from "@/app/ui/home/hero/icons/PhoneIcon";
import EmailIcon from "@/app/ui/home/hero/icons/EmailIcon";
import DownloadIcon from "@/app/ui/home/hero/icons/DownloadIcon";

const contact_links = [
  {
    id: "phone",
    icon: <PhoneIcon />,
    label: "Call me",
    href: "tel:+18325465983",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    label: "Send me an email",
    href: "mailto:caballerorandy7@gmail.com",
  },
  {
    id: "resume",
    icon: <DownloadIcon />,
    label: "Download my resume",
    href: "/resume.pdf",
    download: "resume.pdf",
  },
];

const ContactLinks = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-8">
        {contact_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover={"hover"}>
            <Link
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-gurkha/60 hover:text-gold/80 transition-colors"
            >
              <TooltipComponent icon={link.icon}>{link.label}</TooltipComponent>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactLinks;
