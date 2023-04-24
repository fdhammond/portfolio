import { BsArrowDown } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { motion } from "framer-motion";
import Button from "@/components/button";
import styles from "../styles/presentation.module.css";

export default function Presentation() {
  return (
    <div className="h-full">
      <>
        <Button Icon={BsHouse} text={"Introduce"} />
        <h1 className="text-7xl break-normal md:mb-12">
          Say Hi from <span className="text-green-400">Fede</span>,
          <span className="xs:flex">Front End Developer</span>
        </h1>
        <div className="text-base text-zinc-500 xs:mt-12 md:w-4/5">
          I code beautifully simple things and i love what i do.
          <div>Just simple like that!</div>
        </div>
        <div className={`${styles.animation} xs:mt-12`}>
          <div className={styles.component}>
            <BsArrowDown size={32} className={styles.arrow} />
            <motion.div
              className={styles.circle}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            />
          </div>
        </div>
      </>
    </div>
  );
}
