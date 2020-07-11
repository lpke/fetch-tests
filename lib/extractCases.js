function extractCases(data, filter) {

  let valueElements = data.match(/<value>[^<>]*?<\/value>/gim);
  
  return valueElements;
}

export default extractCases;