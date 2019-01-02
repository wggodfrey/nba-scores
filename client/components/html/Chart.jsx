import React from 'react';

import { scaleTime, scaleLinear } from 'd3-scale';
import { line, curveCardinal } from 'd3-shape';
import { timeParse } from 'd3-time-format';

import ResponsiveWrapper from './ResponsiveWrapper';
import Axes from './../svg/Axes';
import Lines from './../svg/Lines';

class Chart extends React.Component {

  constructor (props) {
    super(props);
    this.xScale = scaleTime();
    this.yScale = scaleLinear();
  }

  render() {
    const width   = Math.max(this.props.parentWidth, 300)
    const height  = this.props.height;
    const margins = this.props.margins;
    const data    = this.props.teams.map(team => {
      if (team.active) {
        let values = team.values;
        if (!this.props.courts.home)
          values = values.filter(v => v.court !== 'home');
        if (!this.props.courts.away)
          values = values.filter(v => v.court !== 'away');
        return values;
      }
      return [];
      });
    const ymin    = Math.min(...[].concat(...data).map(d => d.points));
    const ymax    = Math.max(...[].concat(...data).map(d => d.points));

    const extents = {
      yMin: Math.floor((ymin * 0.95)/2)*2,
      yMax: Math.ceil((ymax * 1.05)/2)*2,
      xMin: Math.min(...[].concat(...data).map(d => timeParse('%m/%d/%y')(d.date))),
      xMax: Math.max(...[].concat(...data).map(d => timeParse('%m/%d/%y')(d.date))),
    };

    const xScale  = this.xScale
      .domain([extents.xMin, extents.xMax])
      .range([margins.left, width - margins.right]);
    const yScale  = this.yScale
      .domain([extents.yMin, extents.yMax])
      .range([height - margins.bottom, margins.top]);

    const lineFn  = line()
      .curve(curveCardinal)
      .x(d => xScale(timeParse('%m/%d/%y')(d.date)))
      .y(d => yScale(d.points));

    return (
      <svg 
        width={width} 
        height={height}>
        <Axes 
          yLabel={'Points per Game'}
          xLabel={null}
          scales={{xScale, yScale}}
          margins={margins}
          width={width}
          height={height}
        />
        <Lines
          nestedData={data}
          lineFn={lineFn}
        />
      </svg>
    );
  }
};

export default ResponsiveWrapper(Chart);
