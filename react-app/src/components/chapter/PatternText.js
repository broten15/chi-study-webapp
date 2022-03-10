import { Typography } from '@mui/material';
import React from 'react';

const PatternText = (props) => {
  const { sent } = props

  return (
    
    // <div>{sent}</div>
    sent.split("\n").map((line, index) => (
      <Typography
        key={line}
        variant="body1"
      >
        {line}  
      </Typography>
    ))
  )
};

export default PatternText;