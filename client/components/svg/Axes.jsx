import React from 'react';

import Axis from './Axis';
import Grid from './Grid';

const Axes = ({scales, margins, width, height, yLabel, xLabel}) => {

  const gProps = {
    scale: scales.yScale,
    ticks: Math.round(height/25),
    translate: `translate(${margins.left}, 0)`, 
    tickSize: width - margins.left - margins.right,
  };
  
  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    ticks: Math.round(width/75),
    translate: `translate(0, ${height - margins.bottom})`,
  };
  
  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    ticks: Math.round(height/25),
    translate: `translate(${margins.left}, 0)`,
  };

  return (
    <g>
      <text
        style={{fontFamily:'Roboto Condensed', fontSize: '13px', textAlign:'center'}}
        transform={`translate(${margins.left/2 - 5},${height/2 + 45}) rotate(-90)`}>
        {yLabel}
      </text>
      <Grid {...gProps} />
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  )
};

export default Axes;
