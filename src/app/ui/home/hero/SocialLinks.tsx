import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariants } from "@/app/lib/animations";
import LinkedinIcon from "@/app/ui/home/hero/icons/LinkedinIcon";
import GithubIcon from "@/app/ui/home/hero/icons/GithubIcon";
import { Badge } from "../../shadcn/badge";

const SocialLinks = () => {
  return (
    <nav className="flex justify-center items-center gap-6 font-roboto mb-8">
      <Link
        href="https://www.linkedin.com/in/caballerorandy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div variants={linkVariants} whileHover="hover">
          <Badge
            variant="outline"
            className="flex justify-center items-center gap-2 border-gurkha hover:border-gold text-gurkha hover:text-gold transition-colors rounded-full text-sm border-2"
          >
            <span>Linkedin</span>
            <LinkedinIcon />
          </Badge>
        </motion.div>
      </Link>

      <Link
        href="https://github.com/caballerorandy6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div variants={linkVariants} whileHover="hover">
          <Badge
            variant="outline"
            className="flex justify-center items-center gap-2 border-gurkha hover:border-gold text-gurkha hover:text-gold transition-colors rounded-full text-sm border-2"
          >
            <span>Github</span>
            <GithubIcon />
          </Badge>
        </motion.div>
      </Link>
    </nav>
  );
};

export default SocialLinks;
