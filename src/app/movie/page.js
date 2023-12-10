import api from '@/api/index';


const page = async() =>{

   // Call the api function to get the data
   const getdata = await api();

   //console.log(getdata);

  return (
  <>
    <div>movie page</div>
  </>
  )
}

export default page;
