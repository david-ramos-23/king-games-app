import king from './../assets/img/king-logo.svg'

const Header = {
  render: async () => {
    const view = `
    <div class="Header-main">
      <div class="Header-nav">
        <a class="Header-link" href="/">
          Home
        </a>

        <a class="Header-link" href="#/favourites">
          Favourites
        </a>

      </div>
      <div class="Header-logo">
        <h1>
          <a href="https://king.com/">
            <img src="${king}" alt="King.com">
          </a>
        </h1>
      </div>
      <div class="Header-input">
        <form id="searchForm" class="searchForm">
          <input id="search" type="text" placeholder="Search..." name="search" class="searchForm-input">
        </form>
      </div>
    </div>
  `
    return view
  },
  after_render: () => {},
}

export default Header
