import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";

// first there lines will appear together

// after that if there isnt `(n)` then the next 2 lines will be example

// after that if there isnt `(n)` then next line is pattern (only chi)

// else if there is a `(n)` then next NUM_HEADER_LINES lines (inc.) will be example

const CompsWrapper = styled.div`
  display: flex;
`;

const ExamplesWrapper = styled.div`
  width: 80%;
`;

const PatternText = (props) => {
  const NUM_HEADER_LINES = 3;
  const { sent } = props
  const lines = sent.split("\n");


  const isExample = (line) => {
    return true;
  };

  const getHeaderComp = (chi, eng) => {
    // const headerStr = `${num} ${chi} = ${eng}`
    return (
      <Typography
        variant="h5"
        component="div"
        key={0}
      >
        {chi}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{eng}
      </Typography>
    );
  }

  const getExampleComp = (i) => {
    return (
      <div
        key={i}
      >
        <Typography
          variant="h6"
          component="div"
        >
          {lines[i]}
        </Typography>
        <Typography
          variant="h6"
          component="div"
        >
          {lines[i + 1]}
        </Typography>
      </div>
    );
  }

  const getComps = (sent) => {
    let i = NUM_HEADER_LINES;
    const comps = [];

    // TODO: make use some nested divs for the spacing of differnt types of lines
    comps.push(getHeaderComp(lines[1], lines[2]));
    


    if (isExample(lines[i])) {
      comps.push(getExampleComp(lines, i));
      i += 2;  
    } else {

    }
    


    return comps
  };

  return (
    <CompsWrapper>
      <Typography
        variant="h5"
        component="div"
        key={0}
      >
        {lines[0]}&nbsp;
      </Typography>
      {getComps(sent)}
    </CompsWrapper>
    // sent.split("\n").map((line, index) => {
    //   return (
    //     <Typography
    //       key={index}
    //       variant="h6"
    //     >
    //       {line}  
    //     </Typography>
    //   );
    // })
  )
};

export default PatternText;