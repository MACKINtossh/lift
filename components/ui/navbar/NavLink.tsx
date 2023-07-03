import { NavLinks } from "@/types";
import { Link } from "lucide-react";

interface NavLinkProps {
  link: NavLinks;
}

const NavLink = ({ link }: NavLinkProps) => {
  return (
    <Link key={link.id} href={link.href} >
      {link.title}
    </Link>
  );
};

export default NavLink;
