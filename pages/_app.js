import Head from 'next/head';
import Wrapper from 'layouts/_wrapper';
import 'styles/global.scss';

function App() {

  let Component = this.props.Component;
  let pageProps = this.props.pageProps;

  return (
    <>
      <Head>
        <title>Fetch Tester</title>
        <link rel="icon" href="vercel-favicon.ico" />
      </Head>

      <Wrapper>
        
        <Component {...pageProps} />

      </Wrapper>
    </>
  );
}

export default App;