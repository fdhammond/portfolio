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
        <Project
          tech1="ReactJS"
          tech2="Typescript"
          tech3="Tailwind"
          projectTitle="BMI Mass Calculator App"
          projectUrl="https://bmi-calculator-app-tan.vercel.app/"
          urlImage={
            "https://res.cloudinary.com/dzkqopnby/image/upload/v1698366790/bmi_lw1zrh.png"
          }
        />
        <Project
          tech1="ReactJS, Typescript"
          tech2="TanStack ReactQuery, React Router"
          tech3="Tailwind, Framer Motion"
          projectTitle="React Typescript Movies"
          projectUrl="https://movies-typescript-full.vercel.app/"
          urlImage={
            "https://res.cloudinary.com/dzkqopnby/image/upload/v1712153692/movies-typescript_qtw6rd.png"
          }
        />
        <Project
          tech1="NextJS, ReactJs, Typescript, Tailwind,"
          tech2="TanStack ReactQuery, React Router"
          tech3="Tailwind, Framer Motion"
          projectTitle="React Typescript Movies"
          projectUrl="https://car-rent-app-nine.vercel.app/"
          urlImage={
            "https://res.cloudinary.com/dzkqopnby/image/upload/v1719271875/web_o1efzb.png"
          }
        />
      </div>
    </div>
  );
}
