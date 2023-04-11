import { SiDarkreader, SiTailwindcss } from 'react-icons/si'
import { FaReact, FaCss3Alt } from 'react-icons/fa'
import { DiSass, DiJavascript1 } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import Button from "@/components/button";
import Technologies from './technologies';

export default function Skills() {
  return (
    <div className='md:mt-24 md:h-1/2 md:w-3/4'>
       <Button Icon={SiDarkreader} text={'MY SKILLS'}/>
       <h1 className="text-6xl break-normal md:mb-12">
        My <span className="text-green-400">Advantages</span>
      </h1>
      <div className='flex justify-start flex-wrap'>
        <Technologies Icon={DiJavascript1} tech={'Javascript'}/>
        <Technologies Icon={FaReact} tech={'React'}/>
        <Technologies Icon={TbBrandNextjs} tech={'NextJS'}/>
        <Technologies Icon={SiTailwindcss} tech={'Tailwind'}/>
        <Technologies Icon={FaCss3Alt} tech={'CSS3'}/>
        <Technologies Icon={DiSass} tech={'Sass'}/>
        <Technologies Icon={BsFillBootstrapFill} tech={'Bootstrap'}/>
      </div>
    </div>
  )
}
