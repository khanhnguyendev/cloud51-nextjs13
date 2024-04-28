import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import Info from "./Info";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 ">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Cloud<span className="text-purple-500">51</span>
          </div>
        </Link>
        <Info />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
