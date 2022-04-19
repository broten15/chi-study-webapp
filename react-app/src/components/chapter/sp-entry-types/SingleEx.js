import React from 'react'
import styled from "styled-components"
import { Typography } from '@material-ui/core';
import ChiEngPair from './ChiEngPair';

const LineWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ExampleWrapper = styled(LineWrapper)`
  padding-left: 3rem;
`;

const SingleEx = (props) => {
  const { i, lines, hasNum, needsSpace } = props;

  return (
    <ExampleWrapper
      // key={i}
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

      {needsSpace && !hasNum && 
          <Typography
          variant="h6"
          component="div"
        >
          {/* probably need better solution for consistent spacing */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      }

      <ChiEngPair
        i={hasNum ? i + 1 : i}
        lines={lines}
      />
    </ExampleWrapper>
  );
}

export default SingleEx;