import { useState, useEffect } from 'react';
import fetchWikiData from 'lib/wikiFetch';
import extractCases from 'lib/extractCases';

function Home() {
  
  const [cases, setCases] = useState(null);

  useEffect(() => {
    fetchWikiData({
      action: 'parse',
      format: 'json',
      page: 'COVID-19_pandemic_in_Australia',
      prop: 'parsetree',
      section: '15'
    }).then(data => {
      let parseTree = data.parse.parsetree['*'];
      setCases(extractCases(parseTree, 'nsw'));
    });
  }, []);

  return (
    <>
      <h1>Fetching Wikipedia Content</h1>

      <p>I will be getting and parsing data from wikipedia using the public API.</p>

      <hr/>

      <pre>{cases || 'Loading data...'}</pre>

      <style jsx>{`
        img {
          display: block;
          max-width: 500px;
        }

        pre {
          display: inline-block;
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