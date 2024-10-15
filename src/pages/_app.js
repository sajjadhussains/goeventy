import Layout from "@/components/Layouts/Layout";
import "/src/styles/sass/app.scss";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
