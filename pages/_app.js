import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  );
}

export default MyApp;
