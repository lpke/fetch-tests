function extractCases(data, targetState) {

  const state = {
    short: targetState.toUpperCase(),
    long: (() => {
      switch (targetState.toUpperCase()) {
        case 'NSW':
          return 'New South Wales';
          break;
        case 'VIC':
          return 'Victoria';
          break;
        case 'QLD':
          return 'Queensland';
          break;
        case 'WA':
          return 'Western Australia';
          break;
        case 'SA':
          return 'South Australia';
          break;
        case 'TAS':
          return 'Tasmania';
          break;
        case 'ACT':
          return 'Australian Capital Territory';
          break;
        case 'NT':
          return 'Northern Territory';
          break;
      }
    })()
  }

  let valueElements = data.match(/<value>[^<>]*?<\/value>/gim);
  let allValues = valueElements.toString();

  function stateCases(targetState) {

    let stateValuesAllString = allValues.match(
      new RegExp(`<value>[^<>#]*?,[^<>]*?<\/value>[^<>]*?<value>((${state.long})|(${state.short}))[^<>]*?<\/value>`, 'gim')
    ).toString();

    let stateValuesArray = stateValuesAllString.match(/<value>[^<>]*?<\/value>/gim);
    stateValuesArray.pop();

    let stateValuesString = stateValuesArray.toString().replace(/(<value>)|(<\/value>)/gim, '');

    let stateValues = {
      asString: stateValuesString,
      asArray: stateValuesString.split(', ')
    };

    return stateValues.asString;
  }

  let casesNSW = stateCases('New South Wales', 'NSW');
  
  return casesNSW;
}

export default extractCases;