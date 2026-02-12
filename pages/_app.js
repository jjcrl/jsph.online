import Layout from "../components/layout";
require("../styles/locomotive-scroll.css");
require("../styles/globals.css");
export default function NextApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main data-scroll-container className="w-full max-w-wide mx-auto">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
