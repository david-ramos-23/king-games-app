import { getGames } from '../services'

const Home = async () => {

  const games = await getGames()

  const view = `
    <div class="Characters">
      ${games.map(games =>
        `
        <article class="Character-item">
          <a href="#/${games.id}/">
            <img src="${games.image}" alt="${games.name}">
            <h2>${games.name}</h2>
          </a>
        </article>
        `
      ).join('')}
    </div>
  `
  return view
}

export default Home
