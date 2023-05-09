import Image from "next/image";
import Link from "next/link";

export default function Project({ urlImage, tech1, tech2, tech3, projectTitle, projectUrl }) {
  const techStyle = `rounded-[19px] border-white border-2 w-24 h-fit p-2 flex
  justify-center ml-2 mr-2 bg-white text-black group-hover:bg-green-400 group-hover:text-white group-hover:border-zinc-900`;

  return (
    <div className="group">
      <div className="relative">
        <Link href={projectUrl} passHref legacyBehavior>
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
      { tech1 ?
        <div className={techStyle}>
          <p>{tech1}</p>
        </div>
        : ''
      }
      {
        tech2 ?
        <div className={techStyle}>
          <p>{tech2 ? tech2 : ''}</p>
        </div>
        : ''
      }
      {
        tech3 ?
        <div className={techStyle}>
          <p>{tech3 ? tech3 : ''}</p>
        </div>
        : ''
      }
      </div>
      <h1 className="text-2xl text-white mt-[-24px] group-hover:underline mb-14">
        <Link href={projectUrl} legacyBehavior>
        <a target="_blank">
          {projectTitle}
        </a>
        </Link>
      </h1>
    </div>
  );
}
