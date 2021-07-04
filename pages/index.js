import Head from "next/head";
import Contacts from "../components/main/Contacts";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import Nav from "../components/main/Nav";
import Work from "../components/main/Work";
import Bio from "../components/main/Bio";

export default function Home() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Head>
        <title>Constantin Carstens</title>
        <meta
          name="description"
          content="Constantin Carstens is a Berlin based Sound Designer and -Engineer."
        />
        <meta name="keywords" content="Constantin Carstens" />
        <meta name="author" content="Armando Guarino" />
        <base href="https://www.constantincarstens.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Constantin Carstens" />
        <meta
          property="og:description"
          content="Constantin Carstens is a Berlin based Sound Designer and -Engineer."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Constantin Carstens" />
        <meta
          property="twitter:description"
          content="Constantin Carstens is a Berlin based Sound Designer and -Engineer."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <div className="h-screen">
        <Nav />
        <Header />
      </div>
      <Bio />
      <Work />
      <Contacts />
      <Footer />
    </div>
  );
}
