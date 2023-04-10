import { BsCardText } from 'react-icons/bs'
import Button from "@/components/button";

export default function Resume() {
  return (
    <div className='md:mt-24 md:h-1/2'>
       <Button Icon={BsCardText} text={'Services'}/>
       <h1 className="text-6xl break-normal md:mb-12">
        My <span className="text-green-400">Specializations</span>
      </h1>
      <div className="text-base text-zinc-500 xs:mt-12 md:w-3/4">

      </div>
    </div>
  )
}
