import Header from '../templates/Header.js'
import Home from '../pages/Home'
import Game from '../pages/Game'
import Error404 from '../pages/Error404'
import { getHash, resolveRoutes } from '../services/router'
import Favourites from '../pages/Favourites'

// Initialize localStorage to save favGames
localStorage.setItem(
  'favGames',
  localStorage.getItem('favGames') || JSON.stringify([])
)

const routes = {
  '/': Home,
  '/:id': Game,
  '/favourites': Favourites,
}

const router = async () => {
  const header = null || document.querySelector('#header')
  const content = null || document.querySelector('#content')

  header.innerHTML = await Header.render()
  await Header.after_render()

  let hash = getHash()
  let route = await resolveRoutes(hash)

  let page = routes[route] ? routes[route] : Error404
  content.innerHTML = await page.render()
  await page.after_render()
}

export default router
