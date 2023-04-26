import { SiDarkreader, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiSass, DiJavascript1 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import Button from "@/components/button";
import Technologies from "../components/technologies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -100,
        transition: {
          duration: 1,
          bounce: 0.3,
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "0",
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref} className="md:mt-24 md:h-1/2 md:w-3/4 pt-10" id="skills">
      <motion.div animate={animation} className="md:mt-24">
        <Button Icon={SiDarkreader} text={"MY SKILLS"} />
        <h1 className="text-6xl break-normal md:mb-12">
          My <span className="text-green-400">Advantages</span>
        </h1>
        <div className="flex justify-start flex-wrap">
          <Technologies Icon={DiJavascript1} tech={"Javascript"} />

          <Technologies Icon={FaReact} tech={"React"} />

          <Technologies Icon={TbBrandNextjs} tech={"NextJS"} />

          <Technologies Icon={SiTailwindcss} tech={"Tailwind"} />

          <Technologies Icon={DiSass} tech={"Sass"} />

          <Technologies Icon={BsFillBootstrapFill} tech={"Bootstrap"} />
        </div>
      </motion.div>
    </div>
  );
}
