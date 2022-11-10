import "../src/styles/main.scss";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import Router from 'next/router';
import NProgress from 'nprogress';
import { SearchProvider } from '../src/components/use-search';
import client from "../src/components/ApolloClient";
import { AppProvider } from "../src/components/context/AppContext";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  
  return <AuthContextProvider><AppProvider><SearchProvider><ApolloProvider client={client}><Component {...pageProps}  />
  <Head>
  <meta name="application-name" content="C.O.S. Laboratories" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Vitamine pentru par complex de recuperare" />

<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="theme-color" content="#000000" />

<link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/manifest.json" />
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://pentru-par.cos-laboratories.com" />
{/*<meta name="twitter:title" content=" Vitamine pentru par complex de recuperare" />
<meta name="twitter:description" content="Vitamine naturale de la producător" />*/}
<meta name="twitter:image" content="https://pentru-par.cos-laboratories.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpattern_chant.6baaf591189f0b631d32b3b48e81a803.jpg&w=3840&q=75" />
<meta name="twitter:creator" content="@DavidWShadow" />
<meta property="og:type" content="website" />
{/*<meta property="og:title" content=" Vitamine pentru par complex de recuperare" />
<meta property="og:description" content="Vitamine naturale de la producător" />*/}
<meta property="og:site_name" content="C.O.S. Laboratories" />
<meta property="og:url" content="https://pentru-par.cos-laboratories.com" />
<meta property="og:image" content="https://pentru-par.cos-laboratories.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpattern_chant.6baaf591189f0b631d32b3b48e81a803.jpg&w=3840&q=75" />
<meta name="google-site-verification" content="iYTg6Zq-Rc5oYebATvttwS8GweL_qIB-bG4Ev_V4XWg" />
  </Head>
  </ApolloProvider></SearchProvider></AppProvider></AuthContextProvider>



}

export default MyApp

