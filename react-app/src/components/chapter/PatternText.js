import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import { END_OF_LATIN } from '../../const/Const'
import SingleEx from './sp-entry-types/SingleEx';
import Header from './sp-entry-types/Header';
import ABEx from './sp-entry-types/ABEx';

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
  };

  const startsWithAorB = (line) => {
    return line.charAt(0) === 'A' || line.charAt(0) === 'B';
  };

  const getABLength = (i) => {
    // first line is paraNum;
    i += 1;
    // after then line find how many ab lines there are
    let length = 0;
    while (i < lines.length && startsWithAorB(lines[i])) {
      length++;
      i++;
    }
    return length;
  };


  // ENTRY TYPES ---------------------------------------------------------------------------------------------
  const isHeaderEx = (i) => {
    if (i + 1 >= lines.length) {
      return false;
    }

    return !isLatin(lines[i]) 
      && isLatin(lines[i + 1])
      && !isParaNum(lines[i + 1]);
  };

  const isSingleEx = (i) => {
    if (i + 2 >= lines.length) {
      return false;
    }

    return isParaNum(lines[i]) 
      && !isLatin(lines[i + 1]) 
      && isLatin(lines[i + 2]);
  };

  const isABEx = (i) => {
    if (i + 2 >= lines.length) {
      return false;
    }

    return isParaNum(lines[i]) 
      && startsWithAorB(lines[i + 1]) 
  };


  const isSubHeader = (i) => {
    if (i + 1 >= lines.length) {
      return false;
    }
    // lines[i] could start with chi or eng
    return isParaNum(lines[i + 1]);
  };
  // END ENTRY TYPES ---------------------------------------------------------------------------------------------

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
      // console.log(i)
      if (isHeaderEx(i)) {
        // console.log("is header example")
        comps.push(
          <SingleEx
            i={i}
            key={i}
            hasNum={false}
            lines={lines}
          />
        );
        i += 2;

      } else if (isSubHeader(i)) {
        // console.log("is sub header")
        comps.push(
          <Header
            eng={lines[i]}
            chi={""}
            i={i}
          />
        );
        i += 1;

      } else if (isSingleEx(i)) {
        // console.log("is single example")
        comps.push(
          <SingleEx
            i={i}
            hasNum={true}
            lines={lines}
          />
        );
        i += 3;  

      } else if (isABEx(i)) {
        // console.log("in ab ex")
        const abLength = getABLength(i);
        comps.push(          
          <ABEx
            key={i}
            i={i}
            length={abLength}
            lines={lines}
          />
        );
        i += 1 + abLength // 1 is for paraNum line

      // TODO: deal with AB pattern
      } else {
        // console.log("is else")
        comps.push(
          <SingleEx
            i={i}
            key={i}
            hasNum={true}
            lines={lines}
          />
        );
        i += 3;  
      }
      
    }
  
    return comps
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

        <Header
          eng={lines[1]}
          chi={lines[2]}
          i={0}
        />
      </LineWrapper>
      {getComps()}
    </CompsWrapper>
  )
};

export default PatternText;