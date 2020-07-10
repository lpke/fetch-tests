async function fetchImg() {

  const response = await fetch('penguin.jpg');
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  return url;
}

export default fetchImg;