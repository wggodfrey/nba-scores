import React from 'react';
import games from './../data/nba.csv';

import ChartWrapper from './html/ChartWrapper';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      'scores': null,
    }
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
    this.setState({scores});
  }

  render() {
    return (
      this.state.scores
      ? <div>
          <ChartWrapper />
        </div>
      : <div/>
    );
  }
};

export default App;