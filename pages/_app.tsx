import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';

import {setupStore} from "../src/store";

import "styles/globals.css";
import "styles/bootstrap-grid.css";
import "swiper/css";
import "swiper/css/pagination";


const store = setupStore()

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}
