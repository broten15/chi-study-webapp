import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import { END_OF_LATIN } from '../../const/Const'

// first there lines will appear together

// after that if there isnt `(n)` then the next 2 lines will be example

// after that if there isnt `(n)` then next line is pattern (only chi)

// else if there is a `(n)` then next NUM_HEADER_LINES lines (inc.) will be example

const CompsWrapper = styled.div`
  
`;

const LineWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
`;


const Spacer = styled.div`
  width: 4rem;
`;

const ExampleWrapper = styled(LineWrapper)`
  padding-left: 3rem;
`;

const PatternText = (props) => {
  const NUM_HEADER_LINES = 3;
  const { sent } = props
  const lines = sent.split("\n").map(line => line.trim());

  const isParaNum = (line) => {
    // check if the first character is an open parenthesis
    // TODO: have better check and do not use trim
    return line.charAt(0) === '(';
  };

  const isLatin = (line) => {
    return line.charCodeAt(0) <= END_OF_LATIN;
  }

  const isHeaderEx = (i) => {
    if (i + 1 >= lines.length) {
      return false;
    }

    return !isLatin(lines[i]) 
      && isLatin(lines[i + 1])
      && !isParaNum(lines[i + 1]);
  };

  const isEx = (i) => {
    if (i + 2 >= lines.length) {
      return false;
    }

    return isParaNum(lines[i]) 
      && !isLatin(lines[i + 1]) 
      && isLatin(lines[i + 2]);
  };

  const isSubHeader = (i) => {
    if (i + 1 >= lines.length) {
      return false;
    }
    // lines[i] could start with chi or eng
    return isParaNum(lines[i + 1]);
  };

  const getHeaderComp = (chi, eng, i) => {
    // const headerStr = `${num} ${chi} = ${eng}`
    return (
      <Typography
        variant="h5"
        component="div"
        key={i}
      >
        {/* spacing for subheader */}
        {eng.length === 0 && 
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </>
        }
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


  const getExampleComp = (i, hasNum) => { 
    return (
      <ExampleWrapper
        key={i}
      >
        {/* {renderSpacers(1)} */}

        {hasNum && 
          <Typography
            variant="h6"
            component="div"
          >
            {lines[i]}&nbsp;&nbsp;
          </Typography>
        }

        {renderChiEngPair(hasNum ? i + 1 : i)}
      </ExampleWrapper>
    );
  }

  /* 
  TYPES OF LINES (N = ?):
  - header => first 3 items (dont need to worry about this)
  - headerEx => chi, eng
  - ex => paraNum, chi, eng
  - subHeader => sent, num
  - multiEx => paraNum, N chi, N Eng (ends once the next line does not have A or B)
  */

  const getComps = () => {
    let i = NUM_HEADER_LINES;
    const comps = [];
    
    while (i < lines.length) {
      console.log(i)
      if (isHeaderEx(i)) {
        console.log("is header example")
        comps.push(getExampleComp(i, false));
        i += 2;

      } else if (isSubHeader(i)) {
        console.log("is sub header")
        comps.push(getHeaderComp(lines[i], "", i));
        i += 1;

      } else if (isEx(i)) {
        console.log("is example")
        comps.push(getExampleComp(i, true));
        i += 3;  
  



      } else {
        console.log("in else")
        comps.push(getExampleComp(i, false));
        i += 2;
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
        {getHeaderComp(lines[1], lines[2], 0)}
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