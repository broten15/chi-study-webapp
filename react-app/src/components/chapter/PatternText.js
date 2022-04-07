import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";



// first there lines will appear together

// after that if there isnt `(n)` then the next 2 lines will be example

// after that if there isnt `(n)` then next line is pattern (only chi)

// else if there is a `(n)` then next 3 lines (inc.) will be example

const CompsWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
`;

const PatternText = (props) => {
  const { sent } = props


  const isExample = (line) => {
    return true;
  };

  const getHeaderComp = (num, chi, eng) => {
    // const headerStr = `${num} ${chi} = ${eng}`
    return (
      <Typography
        variant="h5"
        component="div"
        key={0}
      >
        {num} {chi}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{eng}
      </Typography>
    );
  }

  const getExampleComp = (lines, i) => {
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
    let i = 3;
    const comps = [];
    const lines = sent.split("\n");

    comps.push(getHeaderComp(lines[0], lines[1], lines[2]));
    
    if (isExample(lines[i])) {
      comps.push(getExampleComp(lines, i));
      i++;  
    } else {

    }
    


    return comps
  };

  return (
    <CompsWrapper>
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