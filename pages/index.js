import * as React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SearchBar, ToDo, Clock } from '../components';
const Index = () => {
    const [imgUrl, setImgUrl] = React.useState('/static/backimg/backimg1.jpg');
    const [docWidth, setDocWidth] = React.useState(0);
    const [docHeight, setDocHeight] = React.useState(0);
    function getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - 1)) + 1; //최댓값은 제외, 최솟값은 포함
    }
    React.useEffect(() => {
        setImgUrl(`/static/backimg/backimg${getRandomInt(28)}.jpg`);
        setDocHeight(document.body.offsetHeight);
        setDocWidth(document.body.offsetWidth);
    }, [])
    return (
        <Container>
            <LazyLoadImage
                alt="backImg"
                width={docWidth}
                height={docHeight}
                src={imgUrl}
                effect="opacity"
            />
            <SearchBar top={"10%"} left={"5%"} domain='naver' />
            <SearchBar top={"10%"} right={"5%"} />
            <ToDo />
            <Clock />
        </Container>
    )
}

export default Index;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    /* object-fit: cover; */
    border: 0;
    /* background-image: url(${props => props.imgUrl}); */
    /* background-size: cover; */
    position: relative;
`

