import { AiOutlineProfile } from "react-icons/ai";
import Button from "@/components/button";
import Project from "@/components/project";

export default function MyProjects() {
  return (
    <div className="pt-10" id="projects">
      <Button Icon={AiOutlineProfile} text={"Portfolio"} />
      <h1 className="text-6xl break-normal md:mb-12 md:w-3/4">
        Featured <span className="text-green-400">Projects</span>
      </h1>
      <div className="text-base text-zinc-500 xs:mt-12 md:w-3/4">
        <Project
          tech1="ReactJS"
          projectTitle="Cryptocurrencies App"
          projectUrl="https://cryptocurrency-app-zeta.vercel.app/"
          urlImage={
            "https://res.cloudinary.com/dzkqopnby/image/upload/v1681255285/crypto_k4gp14.png"
          }
        />
      </div>
    </div>
  );
}
