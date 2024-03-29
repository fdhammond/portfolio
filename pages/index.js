import Presentation from "./presentation";
import About from "@/pages/about";
import Resume from "@/pages/resume";
import Skills from "@/pages/skills";
import MyProjects from "@/pages/myprojects";
import Contact from "@/pages/contact";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Hamburger from "../components/hamburger";
import Head from "next/head";

export default function Home() {
  const iconStyle = {
    fontSize: "2em",
  };
  return (
    <>
      <Head>
        <title>fhammond dev.</title>
      </Head>
      <div
        className="bg-zinc-900 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-28 h-full"
        id="presentation">
        <aside className="text-white md:w-1/3 lg:w-1/4 xs:m-6 md:ml-10 md:mt-14 top-14 md:mr-32 lg:mr-32">
          <div className="flex justify-end cursor-pointer z-50">
            <Hamburger />
          </div>
          <div className="flex-column border-zinc-700 border rounded-3xl md:fixed">
            <div className="flex justify-between m-6">
              <h2 className="m-2">Federico Hammond</h2>
              <p className="m-2">Front End Developer</p>
            </div>
            <div className="flex justify-center mt-10">
              <Image
                src="https://res.cloudinary.com/dzkqopnby/image/upload/v1680461220/profile_txdjhj.jpg"
                width={200}
                height={200}
                alt="Profile image"
                className="rounded-3xl"
              />
            </div>
            <div className="flex-column text-center mt-10 text-xl">
              <p>Base in Argentina!</p>
              <p>federico.hammond8@gmail.com</p>
            </div>
            <div className="flex justify-center text-center mt-5">
              <a href="https://github.com/fdhammond" target="__blank">
                <FaGithub style={iconStyle} className="hover:text-green-500" />
              </a>
            </div>
            <div className="flex justify-center text-center">
              <button className="flex justify-center rounded-full bg-green-500 w-2/3 p-2 mt-10 mb-10">
                <CiMail size={"1.5rem"} />
                <span className="ml-3">
                  <a
                    href="https://www.linkedin.com/in/federico-hammond"
                    target="__blank">
                    HIRE ME!
                  </a>
                </span>
              </button>
            </div>
          </div>
        </aside>
        <div className="xs:m-6">
          <main className="bg-zinc-900 text-white md:ml-20">
            <Presentation />
            <About />
            <Resume />
            <Skills />
            <MyProjects />
            <Contact />
          </main>
        </div>
        <div className="text-white md:w-1/3 lg:w-1/5 xs:m-6 md:ml-10 hidden md:block">
          <Navbar />
        </div>
      </div>
    </>
  );
}
