import goFetch from 'lib/fetch.js';

function Home() {

  goFetch();
  
  return (
    <>
      <h1>Example HTML file</h1>

      <p>I will be fetching an image locally and adding below.</p>

      <img id="penguin" src="" alt="Fetched image here..." />

      <pre>penguin.jpg</pre>

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