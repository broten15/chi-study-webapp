import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";

// first there lines will appear together

// after that if there isnt `(n)` then the next 2 lines will be example

// after that if there isnt `(n)` then next line is pattern (only chi)

// else if there is a `(n)` then next NUM_HEADER_LINES lines (inc.) will be example

const CompsWrapper = styled.div`
  
`;

const LineWrapper = styled.div`
  display: flex;
`;

const Spacer = styled.div`
  width: 4rem;
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

  const renderChiEngPair = (i) => (
    <div>
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


  const getExampleComp = (i) => { 
    return (
      <LineWrapper
        key={i}
      >
        {renderSpacers(1)}
        
        {renderChiEngPair(i)}
      </LineWrapper>
    );
  }

  const getComps = () => {
    let i = NUM_HEADER_LINES;
    const comps = [];
    
    while (i < lines.length) {
      if (isExample(lines[i])) {
        console.log("is eample")
        comps.push(getExampleComp(i));
        i += 2;  
      } else {

      }
    }
    


    return comps
  };

  const renderSpacers = (numSpaces) => {
    const spacerComps = [];
    for (let i = 0; i < numSpaces; i++) {
      spacerComps.push(<Spacer key={i} />);
    }
    return spacerComps;
  };

  return (
    <CompsWrapper>
      <LineWrapper>
        <Typography
          variant="h5"
          component="div"
        >
          {lines[0]}&nbsp;
        </Typography>
        {getHeaderComp(lines[1], lines[2])}
      </LineWrapper>

      {getComps()}

      
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