import Link from "next/link";
import { Badge } from "../shadcn/badge";
import { BadgeProps } from "@/app/lib/interfaces";

const BadgeComponent = ({ children }: BadgeProps) => {
  return (
    <Link
      href="https://www.linkedin.com/in/caballerorandy/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gurkha hover:bg-gold text-neutral-950 rounded-full shadow-md font-semibold font-roboto transition-colors hover:bg-gold/80 mb-4"
    >
      <Badge>{children}</Badge>
    </Link>
  );
};

export default BadgeComponent;
