function extractCases(data, filter) {

  let valueElements = data.match(/<value>[^<>]*?<\/value>/gim);
  let allValues = valueElements.toString();

  function stateRegex(stateFull, stateShort) {
    return new RegExp(`<value>[^<>#]*?,[^<>]*?<\/value>[^<>]*?<value>((${stateFull})|(${stateShort}))[^<>]*?<\/value>`, 'gim');
  }

  function stateCases(stateFull, stateShort) {
    let stateValuesAllString = allValues.match(
      new RegExp(`<value>[^<>#]*?,[^<>]*?<\/value>[^<>]*?<value>((${stateFull})|(${stateShort}))[^<>]*?<\/value>`, 'gim')
    ).toString();

    let stateValuesArray = stateValuesAllString.match(/<value>[^<>]*?<\/value>/gim);
    stateValuesArray.pop();

    let stateValues = stateValuesArray.toString().replace(/(<value>)|(<\/value>)/gim, '');

    return stateValues;
  }

  let casesNSW = stateCases('New South Wales', 'NSW');
  
  return casesNSW;
}

export default extractCases;