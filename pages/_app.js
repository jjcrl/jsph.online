import Layout from "../components/layout";
require("../styles/locomotive-scroll.css");
require("../styles/globals.css");
export default function NextApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main data-scroll-container className="w-screen">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
