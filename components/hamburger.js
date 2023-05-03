import {
  AiOutlineProfile,
  AiOutlineContacts,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsHouse, BsCardText } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import { useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed z-50">
      <nav className="ml-6 sm:fixed top-0 md:hidden">
        <AiOutlineMenu
          size={44}
          className="border-white border rounded-full p-2 text-white bg-black"
          onClick={handleNav}
        />
      </nav>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-zinc-900 p-10 ease-in duration-500"
            : "fixed right-[-100%] top-0 p-10 ease-out duration-500"
        }>
        <div className="flex w-full items-center justify-start">
          <div className="cursor-pointer" onClick={handleNav}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 ml-10">
          <ul>
            <Link href="#presentation" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400 flex self-center">
                <BsHouse className="self-center" />
                <p className="ml-4">Introduce</p>
              </li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400 flex">
                <RxPerson className="self-center" />
                <p className="ml-4">About</p>
              </li>
            </Link>
            <Link
              href="#resume"
              scroll={false}
              className="[&.active]:text-indigo-500">
              <li className="py-4 cursor-pointer hover:text-green-400 flex">
                <BsCardText className="self-center" />
                <p className="ml-4">Services</p>
              </li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400 flex">
                <SiDarkreader className="self-center" />
                <p className="ml-4">Advantages</p>
              </li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400 flex">
                <AiOutlineProfile className="self-center" />
                <p className="ml-4">Portfolio</p>
              </li>
            </Link>
            <Link href="#contact" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400 flex">
                <AiOutlineContacts className="self-center" />
                <p className="ml-4">Contact</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
