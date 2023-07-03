"use client";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./ui/navbar/MainNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
