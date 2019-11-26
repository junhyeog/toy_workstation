import * as React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../components';

const Index = () => {

    // 검색하고 뒤로가기 했을 때, 기록 남지 않게 하기
    var imgUrl = "static/backimg1.png";
    return (<Background imgUrl={imgUrl}>
        {/* <NaverSearchBar action="https://search.naver.com/search.naver">
            <a href="https://www.naver.com"></a>
            <input type="text" name="query" maxLength="255"></input>
        </NaverSearchBar> */}
        <SearchBar top={"10%"} left={"5%"} domain='naver' />
        <SearchBar top={"10%"} right={"5%"} />
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

