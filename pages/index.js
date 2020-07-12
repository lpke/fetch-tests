import { useState, useEffect } from 'react';
import Dropdown from 'components/dropdown';

import fetchWikiData from 'lib/wikiFetch';
import extractCases from 'lib/extractCases';

const ausStates = [
  {
    id: 1,
    value: 'NSW',
    name: 'NSW'
  },
  {
    id: 2,
    value: 'VIC',
    name: 'Victoria'
  },
  {
    id: 3,
    value: 'ACT',
    name: 'ACT'
  },
  {
    id: 4,
    value: 'QLD',
    name: 'Queensland'
  },
  {
    id: 5,
    value: 'SA',
    name: 'South Australia'
  },
  {
    id: 6,
    value: 'TAS',
    name: 'Tasmania'
  },
  {
    id: 7,
    value: 'NT',
    name: 'Northern Terrirory'
  },
  {
    id: 8,
    value: 'WA',
    name: 'Western Australia'
  },
];

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
        items={ausStates}
      />

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