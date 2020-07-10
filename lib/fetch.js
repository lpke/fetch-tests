function goFetch() {

  fetch('penguin.jpg').then(response => {

    console.log(response);
    
  });

}

export default goFetch;