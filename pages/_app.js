import "../styles/globals.css";
import { PaginationProvider } from "../contexts/PaginationContext";

function MyApp({ Component, pageProps }) {
  return (
    <PaginationProvider>
      <Component {...pageProps} />
    </PaginationProvider>
  );
}

export default MyApp;
