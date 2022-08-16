import Layout from "../components/layout";

require("../locomotive-scroll.css");
require("../style.css");

export default function NextApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main data-scroll-container className="container">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
