function goFetch() {

  fetch('penguin.jpg')
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      console.log(blob);
    });

}

export default goFetch;