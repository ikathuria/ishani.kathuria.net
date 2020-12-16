import Head from "next/head";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import ProjectHeader from "../components/project-header";
import SocialHeader from "../components/social-header";
import Footer from "../components/footer";

library.add(fab, fas);

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Ishani Kathuria" />
        <meta
          name="description"
          content="Just a simple girl from India with a passion for technology. I absolutely love web development, programming, and data science. In my free time, I draw, write, and take pictures of beautiful things."
        />

        {/* google fonts - Archivo Black, Baloo 2, Confortaa, Poppins */}
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

      <SocialHeader />

      {router.pathname != "/" ? <ProjectHeader /> : <Header />}

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
