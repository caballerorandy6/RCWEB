"use client";

import Link from "next/link";
import HomeIcon from "./header-icons/HomeIcon";
import ExperienceIcon from "./header-icons/ExperienceIcon";
import ProjectsIcon from "./header-icons/ProjectsIcon";
import AboutIcon from "./header-icons/AboutIcon";
import { motion } from "framer-motion";
import { linkVariants } from "@/app/lib/animations";
import TooltipComponent from "../../components/TooltipComponent";

const nav_links = [
  {
    url: "/",
    id: "home",
    label: "Home",
    hash: "#home",
    icon: <HomeIcon />,
  },
  {
    url: "/experience",
    id: "experience",
    label: "Experience",
    hash: "#experience",
    icon: <ExperienceIcon />,
  },
  {
    url: "/projects",
    id: "projects",
    label: "Projects",
    hash: "#projects",
    icon: <ProjectsIcon />,
  },
  {
    url: "/about",
    id: "about",
    label: "About",
    hash: "#about",
    icon: <AboutIcon />,
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-8">
        {nav_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover={"hover"}>
            <Link
              href={link.hash}
              rel="noopener noreferrer"
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

export default Nav;
