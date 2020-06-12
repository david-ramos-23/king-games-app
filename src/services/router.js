export const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id'
    return validRoute
  }
  return `/${route}`
}

export const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export const getSearch = () => location.search.replace('search', 'q')

export const clearnSearch = () => {
  // Remove URL search Parameter from Address Bar
  if (window.parent.location.href.match(/search=/)) {
    if (typeof history.pushState != 'undefined') {
      var obj = { Title: document.title, Url: window.parent.location.pathname }
      history.pushState(obj, obj.Title, obj.Url)
    } else {
      window.parent.location = window.parent.location.pathname
    }
  }
}
