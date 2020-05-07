import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'

const Layout = ({ Component }) => {
  ReactGA.initialize('UA-165852651-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <Head>
        <title>My Workstation</title>
        <link rel="icon" type="image/x-icon" href="/static/titleIcon.ico" />
        <script data-ad-client="ca-pub-6060451333944175" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Component />
      <GlobalStyle />
    </>);
}

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
