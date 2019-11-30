import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'


const Layout = ({ Component }) => {
  return (
    <>
      <Head>
        <title>My Workstation</title>
        <link rel="icon" type="image/x-icon" href="static/titleIcon.ico" />
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
