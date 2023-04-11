export default function Button({Icon, text}) {
  return (
    <>
    <button className="flex justify-center self-center border-zinc-700 border rounded-3xl w-32 pt-2 pb-2 mb-12">
    <Icon className="flex justify-center self-center" />
    <span className="ml-2 uppercase text-xs">{text}</span>
    </button>
    </>
  )
}
