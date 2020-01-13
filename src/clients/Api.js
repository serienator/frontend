export const getSeries = async () => {
  return fetch('https://api.trakt.tv/shows/trending',{      headers: new Headers({
      'trakt-api-key': '74e217f4a8767131d2036b289ecbbdf0924761639c9f2533deb2b1f3173f7fb1',
    })
  })
  .then(response => response.json())
}

export const getFavorites = async () =>  {
  return [{show: {title: "Favourite serie"}}];
}