import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariants } from "@/app/lib/animations";
import ArrowDownIcon from "@/app/ui/home/hero/icons/ArrowDownIcon";

const ExperienceComponent = () => {
  return (
    <Link href="#experience" className="flex justify-center items-center mt-24">
      <motion.h2
        className="p-2 rounded-lg flex justify-center items-center gap-2 text-2xl text-donkeybrown font-concertOne hover:text-gold  transition-colors"
        variants={linkVariants}
        whileHover="hover"
      >
        <span className="mb-2">Experience</span>
        <ArrowDownIcon />
      </motion.h2>
    </Link>
  );
};

export default ExperienceComponent;
