import {
  BsCardText,
  BsCodeSlash,
  BsUniversalAccessCircle,
} from "react-icons/bs";
import Button from "@/components/button";
import Specialization from "../components/specialization";

export default function Resume() {
  return (
    <div className="md:mt-24 md:h-1/2">
      <Button Icon={BsCardText} text={"Services"} />
      <h1 className="text-6xl break-normal md:mb-12">
        My <span className="text-green-400">Specializations</span>
      </h1>
      <div>
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
    </div>
  );
}
