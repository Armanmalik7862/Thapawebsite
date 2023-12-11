import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center mt-[12em]">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="mt-[22px]">Could not find requested resource</p>
      <Link href="/" className="flex items-center justify-center w-[8em] mt-[40px] bg-black/70 text-white border-[1px] border-black rounded-md active:bg-black">Return Home</Link>
    </div>
  )
}