import '../styles/globals.css'
import Meta from '../src/Meta';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
