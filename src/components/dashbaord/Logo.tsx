import { Sansita } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { SwitchCamera } from "lucide-react";

const sansita = Sansita({ subsets: ["latin"], weight: ["400", "700", "800"] });
const Logo = () => {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        className:
          " hidden md:flex navlink !mb-10 lg:hover:bg-transparent lg:!p-0",
        variant: "ghost",
        size: "lg",
      })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <p
        className={`font-semibold text-xl hidden lg:block ${sansita.className}`}
      >
        HeroGram
      </p>
    </Link>
  );
};

export default Logo;
