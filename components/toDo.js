import React from 'react';
import styled from 'styled-components';

export default () => {
    const todos = React.useState([])
    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem('todos')))
            todos[1](JSON.parse(localStorage.getItem('todos')));
        console.log(todos[0])
    }, [])

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos[0]))
    })
    return (<Background>
        <Header>
            할 일 목록
            <span className="todo-num">{todos[0].length}</span>
        </Header>
        <ListContainer>
            {todos[0].map((todo, idx) => {
                return (
                    <li key={idx}>
                        {todo}
                        <button onClick={() => {
                            var array = todos[0]
                            todos[1]([...array.slice(0, idx), ...array.slice(idx + 1, todos.lenght)])
                        }}></button>
                    </li>
                )
            })}
        </ListContainer>
        <FormContainer>
            <input style={{ display: "none" }} />
            <input autoComplete="off" placeholder="Don't feed me..." onKeyPress={(e) => {
                if ((event.keyCode == 13) && (e.target.value != "")) {
                    todos[1]([...todos[0], e.target.value])
                    e.target.value = ""
                }
            }} />
        </FormContainer>
    </Background>)
}

const FormContainer = styled.div`
    padding: 0 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background: #fafafa;
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    input {
        outline: none;
        border: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        padding-inline-start: 15px;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        cursor: text;
        font-size: 15px;
        color: #878481;
    }
`

const ListContainer = styled.ul`
    position: relative;
    height: 265px;
    box-sizing: border-box;
    margin-inline-end: 6px;
    padding-inline-end: 7px;
    padding-inline-start: 13px;
    margin-block-start: 15px;
    padding-block-end: 10px;
    overflow: auto;
    li {
        height: 28px;
        position: relative;
        padding-inline-start: 26px;
        list-style: none;
        display: list-item;
        font: 400 20px;
        color: #878481;
        margin-bottom: 5px;
        button {
            position: absolute;
            top: 0;
            right: 0;
            width: 28px;
            height: 50%;
            border: 0;
            background: url(static/delete.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            font-size: 0;
            cursor: pointer;
        }
    }
`

const Header = styled.div`
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: flex-start;
    border: 0;
    padding: 0 28px;
    margin: 0;
    font-size: 14px;
    color: #121212;
    font-weight: bold;
    line-height: 1;
    margin-block-start: 30px;
    position: relative;
    text-align: left;
    box-sizing: border-box;
    span {
        font-size: 13px;
        font-weight: normal;
        padding-left: 5px;
        opacity: 0.5;
        float: right;
        line-height: 1;
        color: #121212;
        text-align: left;
    }
`
const Background = styled.div`
    display: block;
    position: absolute;
    width: 40%;
    right: 5%;
    top: calc(56px + 15%);
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    z-index: 3;
    transform-origin: right bottom;
    overflow: hidden;
`
