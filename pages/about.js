import { RxPerson } from "react-icons/rx";
import Button from "@/components/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function About() {
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
    <div ref={ref} className="pt-40" id="about">
      <motion.div animate={animation} className="md:mt-24">
        <Button Icon={RxPerson} text={"About"} />
        <h1 className="text-6xl break-normal md:mb-12 md:w-3/4">
          The key to success is{" "}
          <span className="text-green-400">hard work </span>
          and <span className="text-green-400">determination</span>
        </h1>
        <div className="text-base text-zinc-500 xs:mt-12 md:w-3/4">
          I am a self-taught web developer with a flair for creating elegant
          solutions in the least amount of time. Looking for growth
          opportunities to try new technologies and grow my technicals skill set
          in a teamwork based atmosphere synergy.
        </div>
      </motion.div>
    </div>
  );
}
