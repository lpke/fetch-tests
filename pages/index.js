import { useState, useEffect } from 'react';
import fetchWikiData from 'lib/fetch.js';

function Home() {
  
  const [wikiData, setWikiData] = useState(null);

  // useEffect(() => {
  //   fetchWikiData().then(data => {
  //     setWikiData(data);
  //   });
  // }, []);

  fetchWikiData({
    format: 'json',
    action: 'parse',
    page: 'COVID-19_pandemic_in_Australia',
    section: '15'
  }).then(console.log);

  return (
    <>
      <h1>Fetching Wikipedia Content</h1>

      <p>I will be getting and parsing data from wikipedia using the public API.</p>

      <hr/>

      <p>{wikiData || 'Data here...'}</p>

      <style jsx>{`
        img {
          display: block;
          max-width: 500px;
        }

        pre {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          background: #f7f7f7;
          border: 1px solid #dfdfdf;
          border-radius: 5px;
          padding: 6px 10px;
        }
      `}</style>
    </>
  );
}

export default Home;