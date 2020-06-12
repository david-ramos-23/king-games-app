import { getGame, addGame, removeGame } from '../services/games'
import { getHash } from '../services/router'
import play from './../assets/img/play-solid.svg'
import fav from './../assets/img/heart-solid.svg'
import remove from './../assets/img/trash-solid.svg'

const handleEventListener = async () => {
  const gameButtons = document.querySelectorAll('.Games-button')

  gameButtons.forEach((game) => {
    game.addEventListener('click', handleActions)
  })
}

const handleActions = (e) => {
  e.stopPropagation()
  e.preventDefault()
  const button = e.target

  if (button.id === 'fav') {
    addGame(e)
  } else if (button.id === 'remove') {
    removeGame(e)
  } else {
    alert('Opening Game... Enjoy!')
  }
}

const Game = {
  render: async () => {
    const hash = getHash()

    const game = await getGame(hash)
    const { name, image } = game

    const view = `
    <div class="Games-inner">
      <article class="Games-card">
        <img src="${image}" alt="${name}">
        <div class="Games-actions">
          <button class="Games-button" type="submit" id="fav" data-id="${game.id}" data-name="${game.name}" data-short="${game.short}" data-image="${game.image}"  >
            <img src="${fav}" alt="fav">
          </button>
          <button class="Games-button" type="submit" id="remove" data-id="${game.id}" data-name="${game.name}" data-short="${game.short}" data-image="${game.image}"  >
            <img src="${remove}" alt="fav">
          </button>
          <button class="Games-button" type="submit" id="play" data-id="${game.id}" data-name="${game.name}" data-short="${game.short}" data-image="${game.image}"  >
            <img src="${play}" alt="play">
          </button>
        <div class="Games-actions">
      </article>

    </div>
  `

    return view
  },
  after_render: async () => {
    await handleEventListener()
  },
}

export default Game
