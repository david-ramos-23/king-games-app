import { API_URL } from "../config/const";
const getGames = async (id) => {
  const apiURL = id ? `${API_URL}/${id}` : API_URL
  try {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Fetch error', error)
  }
}

export default getGames
