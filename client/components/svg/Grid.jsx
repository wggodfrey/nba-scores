import React from 'react';

import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import styled from 'styled-components';

const Wrapper = styled.g`
  & path {
    stroke-width: 0;
  }
  & line {
    shape-rendering: crispEdges;
    stroke: lightgrey;
    stroke-width: 2px;
    stroke-opacity: 0.7;
    stroke-dasharray: 1, 4;
  }
  & g.tick text {
    display: none;
  }
`;

class Grid extends React.Component {

  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  renderGrid() {
    const grid = d3Axis.axisLeft()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize)
      .ticks(this.props.ticks);
    d3Select(this.elem).call(grid);
  }

  render() {
    return (
      <Wrapper 
        className={`grid`} 
        ref={ref => this.elem = ref}
        transform={this.props.translate}
      />
    )
  }
};

export default Grid;