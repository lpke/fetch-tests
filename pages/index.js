import { useState, useEffect } from 'react';
import fetchWikiData from 'lib/wikiFetch';
import extractCases from 'lib/extractCases';

function Home() {
  
  const [data, setData] = useState(null);
  const [loadMsg, setMsg] = useState(null);

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

      <select name="state" id="state-selector">
        <option value="NSW">NSW</option>
        <option value="VIC">Victoria</option>
        <option value="ACT">ACT</option>
        <option value="QLD">Queensland</option>
        <option value="SA">South Australia</option>
        <option value="TAS">Tasmania</option>
        <option value="NT">Northern Territory</option>
        <option value="WA">Western Australia</option>
      </select>

      <button onClick={getData}>Fetch</button>

      <pre>{data || loadMsg || 'Select a state.'}</pre>

      <style jsx>{`
        hr {
          margin: 26px 0;
        }
        
        select, button {
          display: inline-block;
          height: 35px;
        }

        button {
          margin-left: 8px;
        }
        
        img {
          display: block;
          max-width: 500px;
        }

        pre {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 21px;
          background: #f7f7f7;
          border: 1px solid #dfdfdf;
          border-radius: 5px;
          padding: 6px 10px;
          overflow-x: auto;
          white-space: pre-wrap;
          word-wrap: break-word;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default Home;