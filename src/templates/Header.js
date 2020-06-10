const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <a href="https://king.com/">
          <h1 class=">
            <img src="../assets/img/king-logo.svg" alt="King.com">
          </h1>
        </a>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `
  return view
}

// <div class="col-xs-12"><div class="headerComponent_container"><div class="HeaderComponent_navigation"><div class="HeaderComponent_Links"><a href="/" class="HeaderComponent_link is-active" data-test="headerHomeLink">Inicio</a><a href="/games" class="HeaderComponent_link" data-test="headerGamesLink">Juegos</a><a href="https://careers.king.com/" target="_blank" class="HeaderComponent_link" data-test="headerJobsLink">Trabajos <span class="icon icon-externalLink MenuItem_icon"></span></a><a href="https://communities.king.com/?utm_source=king.com&amp;utm_campaign=king.com_community" target="_blank" class="HeaderComponent_link alignRight" data-test="headerCommunityLink">Comunidad <span class="icon icon-externalLink MenuItem_icon"></span></a></div>
//   <div class="HeaderComponent_titleContainer"><a href="/" class="HeaderComponent_title" data-test="headerLogo"><h1 class="HeaderComponent_logo"><img src="/images/logos/kingLogoRebrand.svg" alt="King.com"></h1></a></div></div></div></div>

export default Header;
