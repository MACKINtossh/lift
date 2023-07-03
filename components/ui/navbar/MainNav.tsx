import { navlinks } from "@/config/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { NavLinks } from "@/types";

interface MainNavProps {
  link: NavLinks;
}

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {navlinks.map((link) => (
        <Link className="text-sm font-medium transition-colors" key={link.id} href={link.href}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
