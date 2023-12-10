import api from '@/api/index';
import MovieCard from '@/components/MovieCard';


const page = async() =>{

   // Call the api function to get the data
   const getdata = await api();

   //console.log(getdata);

  return (
  <>
  <div className="mt-10">
    <h1 className="flex items-center justify-center text-2xl font-semibold">Movies & WebSeries</h1>
  {/* to display in card we have to map under the this div */}
   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10 ml-4 mr-4">
    {
          getdata.map((currElem)=>{
            return <MovieCard key={currElem.jawSummary.id} {...currElem} />
          })
        }


</div>
</div>

  </>
  )
}

export default page;
