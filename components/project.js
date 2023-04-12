import Image from "next/image";
import Link from "next/link";

export default function Project({ urlImage }) {
  const techStyle = `rounded-[19px] border-white border-2 w-24 h-fit p-2 flex
  justify-center ml-2 mr-2 bg-white text-black group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900`;

  return (
    <div className="group">
      <div className="relative">
        <Link href="https://www.google.com" passHref legacyBehavior>
          <a target="_blank">
            <Image
              src={urlImage}
              alt={"Portfolio Project Image"}
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </a>
        </Link>
      </div>
      <div className="flex justify-start relative bottom-24">
        <div className={techStyle}>
          <p>Tech 1</p>
        </div>
        <div className={techStyle}>
          <p>Tech 2</p>
        </div>
        <div className={techStyle}>
          <p>Tech 3</p>
        </div>
      </div>
      <h1 className="text-2xl text-white mt-[-24px] group-hover:underline mb-14">
        Project Title
      </h1>
    </div>
  );
}
