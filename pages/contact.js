import { AiOutlineContacts } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import Button from "@/components/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -80,
        transition: {
          duration: 1,
          bounce: 0.3,
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
      });
    }
  }, [inView, animation]);
  return (
    <div ref={ref} className="mb-14" id="contact">
      <motion.div animate={animation} className="md:mt-36 xs:mt-32">
        <Button Icon={AiOutlineContacts} text={"Contact"} />
        <h1 className="text-6xl break-normal md:mb-12 md:w-3/4">
          Contact <span className="text-green-400">me</span>
        </h1>
        <div className="text-base xs:mt-12 md:w-3/4 flex">
          <h1 className="text-2xl font-light">federico.hammond8@gmail.com</h1>
          <span className="ml-12">
            <a href="mailto:federico.hammond8@gmail.com">
              <RiMailSendLine className="text-4xl hover:text-green-400" />
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
