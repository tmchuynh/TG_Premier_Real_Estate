// pages/_app.js

// 1. Import `createTheme`
import {NextUIProvider } from "@nextui-org/react"


// 3. Pass the new `theme`` to the `NextUIProvider`
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider >
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
