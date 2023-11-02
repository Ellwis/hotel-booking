import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { SnackbarProvider, useSnackbar } from 'notistack'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'yekan',
    },
  });
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SnackbarProvider>
    </Provider>
  )
}
