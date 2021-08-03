import "../styles/globals.css";
import type { AppProps } from "next/app";
// import dotenv from "dotenv";
// import dotenvExpand from "dotenv-expand";
// console.log(process.env.NODE_ENV);
// const envPath =
//   process.env.NODE_ENV === "development" ? "../../.env" : "../.env";
// dotenv.config({ path: envPath });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
