import '../styles/globals.css';
import { Provider } from "next-auth/client/_utils";

export default function App({ Component, pageProps }) {
  return (<Provider session = {pageProps.session}><Component {...pageProps}/></Provider>);
}