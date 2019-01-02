import React from 'react';
import styled from 'styled-components';
import { CSSTransition, transit } from 'react-css-transition';

const Label = styled.div`
  float: left;
  display:inline-block;
  width: 50px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 11px;
  line-height: 24px;
  color: #525252;
`;

const Wrapper = styled.div`
  display:inline-block;
  float: left;
  height: 100%;
  width: 50px;
  border-radius: 5px;
  padding: 4px 4px 5px 4px;
  background: #efefef;
  cursor: pointer;
`;

const Track = styled.div`
  display: inline-block;
  float: left;
  height: 7px;
  width: 40px;
  margin: 4px 0px;
  border-radius: 3px;
  background: #a9a9a9;
`;

const transitionStyles = {
  defaultStyle: {
    transform: "translate(0, 0)",
  },
  enterStyle: {
    transform: transit("translate(32px, 0)", 250, 'ease-in-out'),
  },
  leaveStyle: {
    transform: transit("translate(0, 0)", 250, 'ease-in-out'),
  },
  activeStyle: {
    transform: 'translate(32px, 0)',
  },
};

const Toggle = ({label, handleClick, active}) => {
  
  const Circle = styled.div`
    position: relative;
    top: -5px;
    display: inline-block;
    float: left;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    background: ${active? 'limegreen': 'orangered'};
    transition: background 250ms;
    border: solid 1px #a9a9a9;
  `;

  return (  
    <div>
      <Label>{label}</Label>
      <Wrapper onClick={handleClick}>
        <Track>
          <CSSTransition {...transitionStyles} active={active}>
          <Circle/>
          </CSSTransition>
        </Track>
      </Wrapper>
    </div>
  )
};

export default Toggle;