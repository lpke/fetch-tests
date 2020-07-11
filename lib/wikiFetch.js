async function fetchWikiData(params) {

  //#region -> preparing API call url
  let wAPI = 'https://en.wikipedia.org/w/api.php?origin=*&';

  // Adding argument as url parameters
  for (const [key, value] of Object.entries(params)) {
    wAPI += `${key}=${value}&`;
  }
  // Removing trailing ampersand
  wAPI = wAPI.replace(/&$/gi, '');
  //#endregion <-

  const res = await fetch(wAPI);
  const data = await res.json();

  return data;
}

export default fetchWikiData;