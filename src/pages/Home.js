import { getGames, addGame } from '../services/games'
import { clearnSearch } from '../services/router'
import fav from './../assets/img/heart-solid.svg'

const handleEventListener = async () => {
  const gameButtons = document.querySelectorAll('.Games-actions')

  gameButtons.forEach((game) => {
    game.addEventListener('click', addGame)
  })

  const search = document.getElementById('search')
  search.addEventListener('input', searchGames)
}

const addToDOM = (games) => {
  const content = document.querySelector('.Content')
  const gamesNode = document.querySelector('.Games')
  const noResultsNode = document.querySelector('.NoResults')

  if (games.length > 0) {
    const view = /*html*/ `
      <div class="Games">
        ${games
          .map(
            (game, index) =>
              `
            <article class="Games-item">
              <a href="#/${game.id}/">
                <img class="Games-image" src="${game.image}" alt="${game.name}">
                <h2>
                  <span>${game.name}</span>
                  <div class="Games-actions">
                    <button class="Games-button" type="submit" data-id="${game.id}" data-name="${game.name}" data-short="${game.short}" data-image="${game.image}" >
                      <img src="${fav}" alt="fav">
                    </button>

                  </div>
                </h2>
              </a>
            </article>
          `
          )
          .join('')}
      </div>
    `
    noResultsNode
      ? content.removeChild(noResultsNode)
      : content.removeChild(gamesNode)

    content.insertAdjacentHTML('beforeend', view)
  } else {
    const view = /*html*/ `<div class="NoResults"> No results found.</div>`
    gamesNode
      ? content.removeChild(gamesNode)
      : content.removeChild(noResultsNode)
    content.insertAdjacentHTML('beforeend', view)
  }
}

const searchGames = async (e) => {
  const search = document.getElementById('search')

  const games = await getGames(search.value)
  addToDOM(games)
}

const Home = {
  render: async () => {
    let games = await getGames()
    let view = /*html*/ `
      <div class="Games">
        ${games
          .map(
            (game, index) =>
              `
            <article class="Games-item">
              <a href="#/${game.id}/">
                <img class="Games-image" src="${game.image}" alt="${game.name}">
                <h2>
                  <span>${game.name}</span>
                  <div class="Games-actions">
                    <button class="Games-button" type="submit" data-id="${game.id}" data-name="${game.name}" data-short="${game.short}" data-image="${game.image}" >
                      <img src="${fav}" alt="fav">
                    </button>
                  </div>
                </h2>
              </a>
            </article>
          `
          )
          .join('')}
      </div>
    `
    return view
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted
  after_render: async () => {
    await handleEventListener()
    clearnSearch()
  },
}

export default Home
