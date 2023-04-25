import Link from "next/link";
import { RxPerson } from "react-icons/rx";
import { BsHouse, BsCardText } from "react-icons/bs";
import { SiDarkreader } from "react-icons/si";
import { AiOutlineProfile, AiOutlineContacts } from "react-icons/ai";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className="md:fixed">
      <nav className="flex column mt-36">
        <ul className="m-4 border-green-400 border rounded-full text-zinc-500">
          <Link href="#presentation" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <BsHouse />
            </li>
          </Link>
          <Link href="#about" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <RxPerson />
            </li>
          </Link>
          <Link href="#resume" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <BsCardText />
            </li>
          </Link>
          <Link href="#skills" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <SiDarkreader />
            </li>
          </Link>
          <Link href="#projects" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <AiOutlineProfile />
            </li>
          </Link>
          <Link href="#contact" scroll={false}>
            <li className={`${styles.list} hover:text-green-400`}>
              <AiOutlineContacts />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
