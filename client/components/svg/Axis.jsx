import React from 'react';

import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3-selection';
import styled from 'styled-components';

const Wrapper = styled.g`
  & path, line {
    fill: none;
    stroke: #a9a9a9;
    stroke-rendering: crispEdges;
  }
  & g.tick text {
    font-size: 9px;
  }
`;

class Axis extends React.Component {

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const type = `axis${this.props.orient}`;
    const axis = d3Axis[type]()
      .scale(this.props.scale)
      .ticks(this.props.ticks);
    d3Select(this.elem).call(axis);
  }

  render() {
    return (
      <Wrapper 
        ref={ref => this.elem = ref}
        transform={this.props.translate}
      />
    )
  }
};

export default Axis;