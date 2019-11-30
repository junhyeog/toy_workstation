import * as React from 'react';
import styled from 'styled-components';
import { SearchBar, ToDo, Clock } from '../components';
const Index = () => {
    var imgUrl = "/static/backimg1.png";
    return (<Background imgUrl={imgUrl}>
        <SearchBar top={"10%"} left={"5%"} domain='naver' />
        <SearchBar top={"10%"} right={"5%"} />
        <ToDo></ToDo>
        <Clock></Clock>
    </Background>)
}

export default Index;

const Background = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    border: 0;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    position: relative;
`

