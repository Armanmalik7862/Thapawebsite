import Image from "next/image";
import Link from "next/link";

function MovieCard(currElem) {
  const { id, type, title, synopsis } = currElem.jawSummary;
  return (
    <>
      <div className=" flex flex-col md:flex-row">
        <div className="w-[300px] h-[320px] srelative bg-white group border-[2px] border-zinc-200 rounded-md hover:border-zinc-500 duration-300 hover:shadow-xl overflow:hidden">
          <Link href="#">
            <Image
              src={currElem.jawSummary.backgroundImage.url}
              alt={title}
              width={295}
              height={300}
              className="object-contain lg:object-cover group-hover:scale-105 duration-300"
            />
          </Link>
          <div className="w-full h-[40%] mt-4  p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300 overflow-hidden">
            <h2 className="flex items-center justify-center text-red-600 text-lg font-semibold cursor-pointer">
              {title.length > 16 ? `${title.substring(0, 16)}...` : title}
            </h2>
            <p className="py-3 text-xs">{`${synopsis.substring(0, 66)}...`}</p>
            <Link href={`/movie/${id}`}>
              <button className="bg-black/70 text-white rounded-md active:bg-black w-[8em] ">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
