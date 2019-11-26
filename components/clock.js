import React from "react";
import styled from "styled-components";
import useClock from "./useClock";
import Hands from './Hands'

const marks = Array(12).fill();
const smallMarks = Array(60).fill();

const Clock = () => {

  const time = useClock();

  return (
    <Container>
      {marks.map((mark, idx) => (
        <Mark key={idx} rotation={idx * 30 + "deg"} />
      ))}
      {smallMarks.map((mark, idx) => (
        <SmallMark key={idx} rotation={idx * 6 + "deg"} />
      ))}
      <Hands time={time} />
    </Container>
  );
};

export default Clock;

const Container = styled.div`
    position: absolute;
    top: calc(56px + 15%); left: 25%;
`

const Mark = styled.div`
  position: absolute;
  width: 2px;
  height: 20px;
  background: #fff;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 130px;
`;

const SmallMark = styled.div`
  position: absolute;
  width: 0.5px;
  height: 10px;
  background: #fff;
  opacity:0.5;
  border-radius: 100px;
  top: 10px;
  left: 50%;
  transform: rotate(${props => props.rotation || "0deg"})
    translate3d(-50%, 0, 0);
  transform-origin: 0px 130px;
`;
