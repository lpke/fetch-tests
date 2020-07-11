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
  const stateValues = { asString: undefined, asArray: undefined };

  (function getStateCases() {
    let dataElements = data.match(/<value>[^<>]*?<\/value>/gim).toString();
    
    let extratorRegex = new RegExp(`<value>[^<>#]*?,[^<>]*?<\/value>[^<>]*?<value>((${state.long})|(${state.short}))[^<>]*?<\/value>`, 'gim');
    
    let stateElements = dataElements.match(extratorRegex).toString().match(/<value>[^<>]*?<\/value>/gim);
    stateElements.pop();

    stateValues.asString = stateElements.toString().replace(/(<value>)|(<\/value>)/gim, '');
    stateValues.asArray = stateValues.asString.split(', ');
  })();

  return stateValues.asString;
}

export default extractCases;