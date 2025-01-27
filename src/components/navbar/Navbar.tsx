import Image from "next/image";
import logo from "../../../public/logo.jpg";
import MobileNavbar from "./MobileNav";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full px-9  sticky top-0 bg-white shadow-md  py-2  z-30">
      <div className="flex items-center justify-between lg:justify-around ">
        <a href="/">
          <Image
            src={logo}
            alt="more copy systems logo"
            width={2880}
            height={1440}
            className="w-[140px]"
          />
        </a>
        <div className=" gap-8 hidden md:flex">
          <Link href="aboutus" className="text-black/80  hover:text-blue-500 ">
            About
          </Link>
          <Link href="products" className="text-black/80  hover:text-blue-500 ">
            Products
          </Link>
          <Link href="contact" className="text-black/80  hover:text-blue-500 ">
            Contact
          </Link>
          <Link href="/users" className="text-black/80  hover:text-blue-500 ">
            Users
          </Link>
          <Link href="/todos" className="text-black/80  hover:text-blue-500 ">
            Todos
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
