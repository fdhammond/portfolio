import Link from "next/link";
import { RxPerson } from "react-icons/rx";
import { BsHouse, BsCardText } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import { AiOutlineProfile, AiOutlineContacts } from "react-icons/ai";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className="md:fixed">
      <nav className="flex column">
        <ul className="m-4 border-green-400 border rounded-3xl text-zinc-500">
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#presentation" scroll={false}>
              <BsHouse />
            </Link>
          </li>
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#about" scroll={false}>
              <RxPerson />
            </Link>
          </li>
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#resume" scroll={false}>
              <BsCardText />
            </Link>
          </li>
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#skills" scroll={false}>
              <SiDarkreader />
            </Link>
          </li>
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#projects" scroll={false}>
              <AiOutlineProfile />
            </Link>
          </li>
          <li className={`${styles.list} hover:text-green-400`}>
            <Link href="#contact" scroll={false}>
              <AiOutlineContacts />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
