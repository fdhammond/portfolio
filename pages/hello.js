import { BsHouse } from "react-icons/bs";
import Button from "@/components/button";

export default function Hello() {
  return (
    <>
      <Button Icon={BsHouse} text={'Introduce'}/>
      <h1 className="text-7xl break-normal w-2/3 mb-11">
        Say Hi from <span className="text-green-400">Fede</span>,
        Front End Developer
      </h1>
      <p className="text-base text-zinc-500 w-2/5">
        I code beautifully simple things and i love what i do. Just simple like
        that!
      </p>
    </>
  );
}
