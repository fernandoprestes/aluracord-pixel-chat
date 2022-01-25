import appConfig from '../config.json'

function GlobalStyle() {
  return (
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'VT323', monospace;
        background-color: ${appConfig.theme.colors.neutrals[400]};
        background-image: url(https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      #btn span {
        font-family: 'Press Start 2P', cursive;
        font-size: 12px;
      }
      /* ./App fit Height */
    `}</style>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
