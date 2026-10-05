import Image from "next/image";
import Link from "next/link";

interface SolubleLogoProps {
  href?: string;
  className?: string;
}

export default function SolubleLogo({
  href = "/",
  className = "",
}: SolubleLogoProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center ${className}`}
      aria-label="Soluble Digivations home"
    >
      <Image
        src="/assets/images/logo/logo-6.png"
        alt="Soluble Digital Innovation"
        width={90}
        height={90}
        priority
        className="w-10 md:w-12 aspect-square h-auto"
      />

      <span className="flex items-center mt-auto -ml-2 gap-1.5 text-2xl md:text-3xl font-bold tracking-[-0.06em]">
        oluble
      </span>
    </Link>
  );
}