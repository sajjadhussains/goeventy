import Layout from "@/components/Layouts/Layout";
import "/src/styles/sass/app.scss";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
