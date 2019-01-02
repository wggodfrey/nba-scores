import React from 'react';
import games from './../data/nba.csv';

import { nest as d3Nest } from 'd3-collection';
import styled from 'styled-components';

import Chart from './html/Chart';

const AppWrapper = styled.div`
  width: 100%;
  min-width: 800px;
  height: 100vh;
  background: #efefef;
`;
const ControlsWrapper = styled.div`
  display: inline-block;
  float: left;
  width: 200px;
  margin: 10px 0px 10px 10px;
  height: 500px;
  background: #fff;
`;
const ChartWrapper = styled.div`
  display: inline-block;
  float: left;
  margin: 10px;
  width: calc(100% - 230px);
  height: 500px;
  background: #fff;
`;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      'teams': null,
    };
  }

  componentDidMount() {
    
    const scores = games.reduce((accum, game) => {
      const team1Performance = {
        date: game['Date'],
        tipoff: game['Start (ET)'],
        team: game['Visitor/Neutral'],
        points: game['PTS0'],
        court: 'visitor',
      };
      const team2Performance = {
        date: game['Date'],
        tipoff: game['Start (ET)'],
        team: game['Home/Neutral'],
        points: game['PTS1'],
        court: 'home',
      };
      return accum.concat([team1Performance, team2Performance]);
    }, []);

    const nests = d3Nest()
      .key(d => d.team)
      .entries(scores);

    const teams = nests.map(nest => {
      nest.active = true;
      return nest;
    });

    this.setState({teams});
  }

  render() {
    return (
      this.state.teams
      ? <AppWrapper>
          <ControlsWrapper>
          </ControlsWrapper>
          <ChartWrapper>
            <Chart 
              teams={this.state.teams}
              margins={{top:20, right: 40, bottom: 25, left: 70}}
              height={400}
            />
          </ChartWrapper>
        </AppWrapper>
      : <div/>
    );
  }
};

export default App;