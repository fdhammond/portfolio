import {
  BsCardText,
  BsCodeSlash,
  BsUniversalAccessCircle,
} from "react-icons/bs";
import Button from "@/components/button";
import Specialization from "../components/specialization";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Resume() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -100,
        transition: {
          duration: 1.2,
          bounce: 0.4,
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
    <div ref={ref} className="md:mt-24 md:h-1/2 pt-10" id="resume">
      <motion.div animate={animation} className="md:mt-24 xs:mt-24">
        <Button Icon={BsCardText} text={"Services"} />
        <h1 className="text-6xl break-normal md:mb-12">
          My <span className="text-green-400">Specializations</span>
        </h1>
        <div className="xs:mt-12">
          <Specialization
            title={"Development"}
            paragraph={
              "I build websites with ReactJS, NextJS, NodeJS, Express, Tailwind"
            }
            projects={"10+ Projects"}
            Icon={BsCodeSlash}
          />
          <Specialization
            title={"Accessibility"}
            paragraph={
              "I worked with accessibility making websites usable by as many people as possible"
            }
            projects={"5+ Projects"}
            Icon={BsUniversalAccessCircle}
          />
        </div>
      </motion.div>
    </div>
  );
}
