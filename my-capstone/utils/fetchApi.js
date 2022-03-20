import axios from "axios"
//export const baseUrl = "https://exercisedb.p.rapidapi.com/exercises"
export const baseUrl = "https://pizza-and-desserts.p.rapidapi.com/pizzas"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
    //  "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_API_SECRET,
    },
  })
  return data
}
