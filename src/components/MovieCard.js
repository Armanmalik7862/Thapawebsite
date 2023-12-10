import Image from "next/image";
import  Link  from 'next/link';

function MovieCard(currElem) {
  const { id, type, title, synopsis } = currElem.jawSummary;
  return (
    <>
      <div className="">
        <div className="relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow:hidden">
          <Link href="#">
            <Image
              src={currElem.jawSummary.backgroundImage.url}
              alt={title}
              width={250}
              height={250}
              className="w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300"
            />
          </Link>
        </div>
        <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
          <h2 className="flex items-center justify-center text-red-600 text-lg font-semibold cursor-pointer">{title}</h2>
          <p className="py-3 text-xs">{synopsis}</p>
          <Link href={`/movie/${id}`}>
            <button className="bg-black/70 text-white rounded-md active:bg-black ">Read More...</button>
          
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
