function fetchWikiData(params) {

  //#region -> preparing API call url
  let wAPI = 'https://en.wikipedia.org/w/api.php?';

  // Adding argument as url parameters
  for (const [key, value] of Object.entries(params)) {
    wAPI += `${key}=${value}&`;
  }
  // Removing trailing ampersand
  wAPI = wAPI.replace(/&$/gi, '');
  //#endregion <-

  console.log(wAPI);

}

export default fetchWikiData;