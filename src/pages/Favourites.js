import { getFavGames, removeGame } from '../services/games'
import remove from './../assets/img/trash-solid.svg'

const handleEventListener = async () => {
  const gameButtons = document.querySelectorAll('.Games-actions')

  gameButtons.forEach((game) => {
    game.addEventListener('click', removeGame)
  })

  const search = document.getElementById('search')
  search.addEventListener('input', searchFavGames)
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
                      <img src="${remove}" alt="fav">
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

const searchFavGames = async (e) => {
  const search = document.getElementById('search')

  const games = await getFavGames(search.value)
  addToDOM(games)
}

const Favourites = {
  render: async () => {
    let view = ` <div class="NoResults"> You don't have any Favourite Game!</div>`
    const games = await getFavGames()

    games.length > 0
      ? (view = `
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
                        <img src="${remove}" alt="fav">
                      </button>

                    </div>
                  </h2>
                </a>

              </article>
            `
            )
            .join('')}
        </div>
        `)
      : view

    return view
  },
  after_render: async () => {
    await handleEventListener()
    // clearnSearch()
  },
}

export default Favourites
