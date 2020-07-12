import { useState, useEffect } from 'react';
import Dropdown from 'components/dropdown';

import fetchWikiData from 'lib/wikiFetch';
import extractCases from 'lib/extractCases';

function Home() {
  
  const [loadMsg, setMsg] = useState(null);
  const [data, setData] = useState(null);

  const getData = () => {
    setMsg('Loading data...');
    fetchWikiData({
      action: 'parse',
      format: 'json',
      page: 'COVID-19_pandemic_in_Australia',
      prop: 'parsetree',
      section: '15'
    }).then(data => {
      let parseTree = data.parse.parsetree['*'];
      setData(extractCases(parseTree, 'nsw'));
    });
  };

  return (
    <>
      <h1>Fetching Wikipedia Content</h1>

      <p>I will be getting and parsing data from wikipedia using the public API.</p>

      <hr/>

      <Dropdown
        title="Select a State"
      />

      {/* <option value="NSW">NSW</option>
        <option value="VIC">Victoria</option>
        <option value="ACT">ACT</option>
        <option value="QLD">Queensland</option>
        <option value="SA">South Australia</option>
        <option value="TAS">Tasmania</option>
        <option value="NT">Northern Territory</option>
        <option value="WA">Western Australia</option> */}

      <button onClick={getData}>Fetch</button>

      <pre>{data || loadMsg || 'Select a state.'}</pre>

      <style jsx>{`
        button {
          margin-left: 8px;
        }

        pre {
          margin-top: 26px;
        }
      `}</style>
    </>
  );
}

export default Home;