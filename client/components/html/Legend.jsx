import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: scroll;
  height: calc(100% - 20px);
`;

const Title = styled.div`
  font-family: 'Roboto Condensed';
  font-size: 14px;
  margin: 5px 5px 5px 10px;
`;

const Item = styled.div`
  display: inline-block;
  font-family: 'Roboto';
  font-weight: 400;
  float: left;
  width: calc(100% - 10px);
  margin: 2px 0px 2px 10px;
  cursor: pointer;
`;

const Icon = styled.div`
  display: inline-block;
  float: left;
  width: 10px;
  height: 10px;
  pointer-events: none;
  margin: 1px 0 0 0;
`;

const Label = styled.div`
  display: inline-block;
  float: left;
  margin: 0px 0px 0px 10px;
  font-size: 12px;
  line-height: 12px;
  pointer-events: none;
`;

const Legend = ({ teams, toggleTeam }) => (
  <Wrapper>
    <Title>Legend</Title>
    {
      teams.map((team, i) => 
        <Item 
          key={`item_${i}`}
          style={{opacity:`${team.active? 1: 0.4}`}}
          onClick={() => { toggleTeam(team.key)}}>
          <Icon style={{background:`${team.values[0].hex}`}} />
          <Label>{team.key}</Label>
        </Item>
      )
    }
  </Wrapper>
);

export default Legend;