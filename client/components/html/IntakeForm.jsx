import React from 'react';
import { nest as d3Nest } from 'd3-collection';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100% - 20px);
`;

const Title = styled.div`
  width: 100%;
  font-family: 'Roboto Condensed';
  font-size: 14px;
  padding: 10px 10px 2px;
`;

const Input = styled.textarea`
  width: calc(100% - 40px);
  height: calc(100% - 200px);
  background: #a9a9a9;
  border: none;
  margin: 10px;
  padding: 10px;
  color: #ffffff;
  outline: none !important;
  outline-offset: none !important;
  & ::placeholder {
    color: #ffffff;
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 150px;
  float: right;
  margin: 2px 10px 10px calc(100% - 170px);
  padding: 4px 0px 2px;
  border: none;
  border-radius: 5px;
  background: #525252;
  color: #fff;
  font-family: 'Roboto Condensed';
  line-height: 24px;
  font-size: 13px;
  transition: 250ms background, 250ms color;
  outline: none !important;
  outline-offset: none !important;
  cursor: pointer;
  &:hover {
    background: steelblue;
    color: #fff;
  }
`;

class IntakeForm extends React.Component {

  constructor(props) {
    super(props);
    this.input = null;
  }

  parseCsv(text, cb) {
    const rows = text.split('\n').slice(1);
    const scores = rows.reduce((accum, row) => {
      const game = row.split(',');
      const team1Performance = {
        date: game[0],
        tipoff: game[1],
        team: game[2],
        opponent: game[4],
        points: game[3],
        duration: game[7] === ''? 'standard': game[7],
        court: 'away',
      };
      const team2Performance = {
        date: game[0],
        tipoff: game[1],
        team: game[4],
        opponent: game[2],
        points: game[5],
        duration: game[7] === ''? 'standard': game[7],
        court: 'home',
      };
      return accum.concat([team1Performance, team2Performance]);
    }, []);

    const nests = d3Nest()
      .key(d => d.team)
      .entries(scores);

    const teams = nests.map(nest => {
      nest.active = true;
      let randhex = '#'+Math.floor(Math.random()*16777215).toString(16);
      nest.values.map(value => {
        value.hex = randhex;
        return value;
      });
      return nest;
    });

    cb(teams);
  }

  render() {
    return (
      <Wrapper>
        <Title>Data</Title>
        <Input 
          ref={ref => this.input = ref}
          type={'textarea'}
          placeholder={'Paste CSV data here.'}
        />
        <Button
          onClick={() => {this.parseCsv(this.input.value, this.props.handleFormattedData) }}>
          {'Submit'}
        </Button>
      </Wrapper>
    );
  }
};


export default IntakeForm;