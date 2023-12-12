import Image from "next/image";


//get id from url with the help of params
const page = async ({ params }) => {
  
  const getid = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${getid}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fc6c318bddmsh70e97dc9b65af41p196f66jsnbf532eb852bc",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;


  return (
    <>
      <div className=" bg-zinc-100 w-full h-screen">
        <h2 className="px-36 py-20 text-3xl font-semibold">
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div className="px-36 mt-[-55px]">
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={400}
            height={300}
          />
        </div>
        <div className="px-36">
          <h1 className="py-4 text-xl font-semibold text-red-400">
            {main_data.title}
          </h1>
          <p className="text-sm text-zinc-400">{main_data.synopsis}</p>
        </div>
      </div>
    </>
  );
};


export default page;
