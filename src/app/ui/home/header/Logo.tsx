import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-sans text-5xl font-bold text-gurkha/90 hover:text-gold/80 transition-colors"
    >
      <Image
        src="/logo.webp"
        alt="Logo"
        width={100}
        height={100}
        priority={true}
        quality={100}
        className="h-auto cursor-pointer object-contain w-28"
      />
    </Link>
  );
};

export default Logo;
