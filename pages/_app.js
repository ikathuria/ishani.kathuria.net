import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// components
import Nav from "../components/nav";
import Footer from "../components/footer";

library.add(fab, fas);

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Open graph meta tags */}
        <meta property="og:url" content="https://ishani.kathuria.net/"></meta>
        <meta name="og:title" content="Ishani Kathuria"></meta>
        <meta
          name="og:description"
          content="A simple girl from India with a passion for technology. I absolutely love programming, data science, and web development. In my free time, I draw, write, and take pictures of beautiful things."
        ></meta>
        <meta
          property="og:image"
          content="https://ishani.kathuria.net/pages/ishani-kathuria.png"
          key="ogimage"
        ></meta>

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@IshaniKathuria" />
        <meta name="twitter:title" content="Ishani Kathuria" />
        <meta
          name="twitter:description"
          content="A simple girl from India with a passion for technology. I absolutely love programming, data science, and web development. In my free time, I draw, write, and take pictures of beautiful things."
        />
        <meta
          name="twitter:image"
          content="https://ishani.kathuria.net/pages/ishani-kathuria.png"
        />

        {/* google fonts - Archivo Black, Baloo 2, Confortaa, Poppins, Roboto Slab, Raleway */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Baloo+2&family=Comfortaa:wght@300&family=Poppins:wght@200&family=Roboto+Slab&family=Raleway:wght@900&display=swap"
          rel="stylesheet"
        />

        {/* animations */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>

      <Nav />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
