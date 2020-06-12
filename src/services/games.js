import { API_URL, KING_API_URL } from '../config/const'
import { getSearch } from '../services/router'

export const getGame = async (id) => {
  const apiURL = `${API_URL}/${id}`
  try {
    const response = await fetch(apiURL)

    const game = await response.json()
    game.image = await getImages(game.short, true)

    return game
  } catch (error) {
    console.log('Fetch error', error)
  }
}

export const getGames = async (name) => {
  let search = getSearch()
  const apiURL = name
    ? `${API_URL}?q=${name}`
    : search
    ? `${API_URL}${search}`
    : API_URL
  try {
    const response = await fetch(apiURL)

    const games = await response.json()

    games.map(async (game) => {
      game.image = await getImages(game.short)
    })
    return games
  } catch (error) {
    console.log('Fetch error', error)
  }
}

export const getImages = async (name, card) => {
  const apiURL = card
    ? `${KING_API_URL}${name}/tournamentPage/${name}_764x260.jpg`
    : `${KING_API_URL}${name}/dumps/screen_${name}.gif`

  return apiURL
}

export const getFavGames = async (name) => {
  try {
    let search = getSearch()
    const favGames = search
      ? filterByValue('favGames', search.substr(3))
      : name
      ? filterByValue('favGames', name)
      : [...JSON.parse(localStorage.getItem('favGames'))]

    return favGames
  } catch (error) {
    console.log('Fetch error', error)
  }
}

export const addGame = async (e) => {
  e.stopPropagation()
  e.preventDefault()
  const favGames = [...JSON.parse(localStorage.getItem('favGames'))]

  const newGame = { ...e.srcElement.dataset }

  !favGames.find((game) => game.name === newGame.name)
    ? addToLocalStorage(newGame, favGames)
    : alert(`${newGame.name} is already present on your Favourites Games!`)
}

export const removeGame = (e) => {
  e.stopPropagation()
  e.preventDefault()
  let favGames = [...JSON.parse(localStorage.getItem('favGames'))]
  const game = { ...e.srcElement.dataset }

  favGames = arrayRemove(favGames, game.id)

  localStorage.setItem('favGames', JSON.stringify(favGames))
  alert(`${game.name} removed from your Favourites Games!`)
  location.reload()
}

const addToLocalStorage = (newGame, favGames) => {
  favGames.push(newGame)

  localStorage.setItem('favGames', JSON.stringify(favGames))

  alert(`${newGame.name} added to your Favourites Games!`)
}

const filterByValue = (storage, value) => {
  console.log('value', value)
  return JSON.parse(localStorage.getItem(storage)).filter(
    (data) =>
      JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

const arrayRemove = (arr, value) => {
  return arr.filter((game) => {
    return game.id != value
  })
}
