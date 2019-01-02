import React from 'react';

import { scaleTime, scaleLinear } from 'd3-scale';
import { line, curveCardinal } from 'd3-shape';
import { timeParse } from 'd3-time-format';
import styled from 'styled-components';

import ResponsiveWrapper from './ResponsiveWrapper';

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
    const data    = this.props.teams.map(team => team.active? team.values: [] );
    const ymin    = Math.min(...[].concat(...data).map(d => d.points));
    const ymax    = Math.max(...[].concat(...data).map(d => d.points));

    const extents = {
      yMin: Math.floor((ymin * 0.9)/5)*5,
      yMax: Math.ceil((ymax * 1.1)/5)*5,
      xMin: Math.min(...[].concat(...data).map(d => timeParse('%m/%d/%y')(d.date))),
      xMax: Math.max(...[].concat(...data).map(d => timeParse('%m/%d/%y')(d.date))),
    };

    return (
      <div>hi</div>

    );
  }
};

export default ResponsiveWrapper(Chart);