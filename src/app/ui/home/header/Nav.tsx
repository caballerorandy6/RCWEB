"use client";

import Link from "next/link";
import HomeIcon from "./header-icons/HomeIcon";
import ExperienceIcon from "./header-icons/ExperienceIcon";
import ProjectsIcon from "./header-icons/ProjectsIcon";
import AboutIcon from "./header-icons/AboutIcon";
import { motion } from "framer-motion";
import { linkVariants } from "@/app/lib/animations";
import TooltipComponent from "../../components/TooltipComponent";
import { usePathname } from "next/navigation";

const nav_links = [
  {
    href: "#home",
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    href: "#experience",
    id: "experience",
    label: "Experience",
    icon: <ExperienceIcon />,
  },
  {
    href: "#projects",
    id: "projects",
    label: "Projects",
    icon: <ProjectsIcon />,
  },
  {
    href: "#about",
    id: "about",
    label: "About",
    icon: <AboutIcon />,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex justify-center items-center gap-8">
        {nav_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover={"hover"}>
            <Link
              href={link.href}
              rel="noopener noreferrer"
              className={`${
                pathname === link.href ? "text-gold" : "text-gurkha/80"
              }flex items-center gap-2 text-gurkha/80 hover:text-gold/80 transition-colors`}
            >
              <TooltipComponent icon={link.icon}>{link.label}</TooltipComponent>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
