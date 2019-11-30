import * as React from 'react';
import styled from 'styled-components';
import { SearchBar, ToDo, Clock } from '../components';
const Index = () => {
    const imgUrl = React.useState('/static/backimg/backimg1.jpg')
    function getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - 1)) + 1; //최댓값은 제외, 최솟값은 포함
    }
    React.useEffect(() => {
        imgUrl[1](`/static/backimg/backimg${getRandomInt(28)}.jpg`)
    }, [])
    return (<Background imgUrl={imgUrl[0]}>
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

