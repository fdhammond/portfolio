import Layout from "@/components/layout";
import Hello from "./hello";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Home() {
  const iconStyle = {
    fontSize: "2em",
  };
  return (
    <>
      <div className="min-h-screen w-full h-full bg-zinc-900">
        <div className="flex">
          <aside className="text-white w-1/4 ml-10 mt-14 h-screen sticky top-14">
            <div className="flex-column border-zinc-700 border rounded-3xl w-full">
              <div className="flex justify-between m-6">
                <h2>Federico Hammond</h2>
                <p>Front End Developer</p>
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
                <FaGithub style={iconStyle} className="hover:text-green-500" />
              </div>
              <div className="flex justify-center text-center">
                <button className="flex justify-center rounded-full bg-green-500 w-2/3 p-2 mt-10 mb-10">
                  <CiMail size={"1.5rem"} />
                  <span className="ml-3">HIRE ME!</span>
                </button>
              </div>
            </div>
          </aside>
          <main className="text-white w-2/4 ml-56 mt-14">
            <Hello />
          </main>
        </div>
      </div>
    </>
  );
}
