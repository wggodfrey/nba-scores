import React from 'react';

const Lines = ({nestedData, lineFn}) => (
  <g>
    {
      nestedData.map((data, i) =>
        <path 
          key={`path${i}`}
          className='line'
          d={lineFn(data)}
          stroke={data[0]? data[0].hex: '000000'}
          fill='none'
          strokeWidth={2}
        />
      )
    }
  </g>
);

export default Lines;