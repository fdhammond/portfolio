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
import styles from "../styles/navbar.module.css";

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed">
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
              <li className="py-4 cursor-pointer hover:text-green-400">
                <BsHouse />
              </li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400">
                <RxPerson />
              </li>
            </Link>
            <Link href="#resume" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400">
                <BsCardText />
              </li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400">
                <SiDarkreader />
              </li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400">
                <AiOutlineProfile />
              </li>
            </Link>
            <Link href="#contact" scroll={false}>
              <li className="py-4 cursor-pointer hover:text-green-400">
                <AiOutlineContacts />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
