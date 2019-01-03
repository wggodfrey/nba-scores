import React from 'react';
import styled from 'styled-components';

import IntakeForm from './html/IntakeForm';
import Legend from './html/Legend';
import Filters from './html/Filters';
import Chart from './html/Chart';

const AppWrapper = styled.div`
  width: 100%;
  min-width: 800px;
  height: 100vh;
  background: #efefef;
`;

const IntakeWrapper = styled.div`
  display: inline-block;
  float: left;
  width: calc(100% - 20px);
  margin: 10px;
  height: calc(100vh - 20px);
  background: #fff;
`;

const LegendWrapper = styled.div`
  display: inline-block;
  float: left;
  width: 200px;
  margin: 10px 0px 10px 10px;
  height: calc(100vh - 20px);
  background: #fff;
`;

const FiltersWrapper = styled.div`
  display: inline-block;
  float: left;
  margin: 10px 10px 0px 10px;
  width: calc(100% - 230px);
  height: 120px;
  background: #fff;
`;

const ChartWrapper = styled.div`
  display: inline-block;
  float: left;
  margin: 10px;
  width: calc(100% - 230px);
  height: 420px;
  background: #fff;
`;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      'teams': null,
      'courts': {home: true, away: false},
    };
  }

  handleFormattedData(teams) {
    if (teams.length > 0) {
      this.setState({teams});
    } else {
      alert('Please provide a properly-structured dataset.');
    }
  }

  toggleCourt(court) {
    this.setState(prev => {
      prev.courts[court] = !prev.courts[court];
      return ({
        courts: prev.courts,
      });
    });
  }

  toggleTeam(key) {
    this.setState(prev => {
      let team = prev.teams.filter(t => t.key === key)[0];
      team.active = !team.active;
      return ({
        teams: prev.teams,
      });
    });
  }

  render() {
    return (
      this.state.teams
      ? <AppWrapper>
          <LegendWrapper>
            <Legend
              toggleTeam={this.toggleTeam.bind(this)}
              teams={this.state.teams}
            />
          </LegendWrapper>
          <FiltersWrapper>
            <Filters
              courts={this.state.courts}
              toggleCourt={this.toggleCourt.bind(this)}
            />
          </FiltersWrapper>
          <ChartWrapper>
            <Chart 
              teams={this.state.teams}
              courts={this.state.courts}
              margins={{top:20, right: 40, bottom: 20, left: 70}}
              height={410}
            />
          </ChartWrapper>
        </AppWrapper>
      : <AppWrapper>
          <IntakeWrapper>
            <IntakeForm
              handleFormattedData={this.handleFormattedData.bind(this)}
            />
          </IntakeWrapper>
        </AppWrapper>
    );
  }
};

export default App;