export default function Technologies({Icon, tech}) {
  return (
    <div className='pl-3 pr-3 w-[190px] h-[300px]'>
        <div className='border w-[166px] h-[224px] rounded-t-[85px] rounded-b-[85px] flex justify-center self-center mb-5 hover:border-green-400'>
            <Icon className='text-6xl m-8 flex justify-center self-center'/>
        </div>
        <div className='w-[166px] h-fit flex justify-center'>
            <p>{ tech }</p>
        </div>
    </div>
  )
}
