const api = async() =>{
    const url = process.env.RAPID_KEY;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fc6c318bddmsh70e97dc9b65af41p196f66jsnbf532eb852bc",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };
    try {
        // Fetch API
        const res = await fetch(url, options);
        const data = await res.json();
        return data.titles;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error to the caller
      }
}
export default api;