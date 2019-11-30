import React from 'react';
import styled from 'styled-components';

export default ({ domain, top, left, right }) => {

    // 검색하고 뒤로가기 했을 때, 기록 남지 않게 하기
    if (domain == 'naver')
        return (
            <SearchBar top={top} left={left} right={right} action="https://search.naver.com/search.naver">
                <a href="https://www.naver.com"></a>
                <input autoComplete="off" type="text" name="query" maxLength="255"></input>
            </SearchBar>
        )
    return (
        <SearchBar top={top} left={left} right={right} action="https://www.google.com/search">
            <a style={{
                background: "url(/static/search.png)", backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }} href="https://www.google.com"></a>
            <input autoComplete="off" type="text" name="q" maxLength="255"></input>
        </SearchBar>
    )
}

const SearchBar = styled.form`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    box-shadow: 0 -3px 20px 0 rgba(0, 0, 0, 0.1);
    width: 40%;
    border-radius: 8px;
    a {
        position: absolute;
        display: flex;
        top: 0;
        width: 48px;
        height: 56px;
        background: url(/static/naver.png);
        background-repeat: no-repeat;
        background-position: center;
        font-size: 0;
        z-index: 3;
        :after {
            content: ' ';
            position: absolute;
            display: flex;
            top: 14px;
            right: 0;
            width: 1px;
            height: 29px;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
        }
    }
    input {
        outline: none;
        position: relative;
        display: flex;
        width: calc(100% - 61px);
        height: 56px;
        border: 0;
        border-radius: 8px;
        background: rgba(249, 249, 249, 0.42);
        font-size: 15px;
        font-weight: normal;
        color: #fff;
        direction: ltr;
        padding-inline-start: 61px;
        transition-property: background;
        transform: translateZ(0);
        z-index: 1;
    }
`
