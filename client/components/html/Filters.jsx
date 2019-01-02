import React from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  margin: 5px 10px 2px;
`;

const Section = styled.div`
  display: inline-block;
  float: left;
  max-width: calc(100%/4 - 12px);
  flex-grow: 1;
  height: 80px;
  margin: 5px 10px; 
  border-radius: 8px;
  border: solid 1px #d3d3d3;
`;

const Header = styled.span`
  position: relative;
  top: -6px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  float: right;
  margin: 0 10px 0 0;
  padding: 0 5px;
  background: #fff;
  color: #525252
`;

const Item = styled.div`
  float: left;
  width: calc(100% - 18px);
  margin: 5px 10px 2px;
`;

const Filters = ({ courts, toggleCourt }) => (
  <div>
    <Title>Filters</Title>
    <Wrapper>
      <Section>
        <Header>Court Advantage</Header>
        <Item>
          <Toggle
            label={'HOME'}
            handleClick={() => {toggleCourt('home')}}
            active={courts.home}
          />
        </Item>
        <Item>
          <Toggle
            label={'AWAY'}
            handleClick={() => {toggleCourt('away')}}
            active={courts.away}
          />
        </Item>
      </Section>
      <Section>
        <Header>Tip-Off Time</Header>
      </Section>
    </Wrapper>
  </div>
);

export default Filters;

// <Label>Home Games</Label>
// <Label>Away Games</Label>