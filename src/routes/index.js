import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../services/getHash'
import resolveRoutes from '../services/resolveRoutes'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

const router = async () => {
  const header = null || document.querySelector('#header')
  const content = null || document.querySelector('#content')

  header.innerHTML = await Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  console.log(route)
  let render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
}

export default router

// manejador mostrar los elementos según la lógica que vamos a establecer
// obtener los valores del navegador para saber cual es la ruta en la que el usuario ha querido moverse
// async await para esperar hasta que algo suceda para entonces ir continuando con nuestra aplicación.
// establecer los templates que tenemos hacía un elemento del DOM
// cuando trabajemos con las rutas debemos crear una función para obtener el hash para que cuando nos movamos a un personaje vamos a mandar un hash/id debemos obtener ese id para saber que personaje mandar

// render la cual va contener el valor de las rutas que tenemos en routes comparada con la que obtenemos con la navegación del usuario
