import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'


const Layout = ({ Component }) => {
    return (
        <Container>
            <Head>
                <title>My Workstation</title>
                <link rel="icon" type="image/x-icon" href="static/titleIcon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Dynalight" rel="stylesheet" />
            </Head>
            <Component />
            <GlobalStyle />
        </Container>);
}

export default Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
