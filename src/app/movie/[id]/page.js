
//get id from url with the help of params
function page({params}) {
  const getid = params.id;
  return (
    <div>I am dynamic root{getid} </div>
  )
}

export default page;