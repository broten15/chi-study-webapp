import React from 'react'
import { Typography } from '@material-ui/core';

const ChiEngPair = (props) => {
  const { i, lines } = props;

  return (
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
  )
}

export default ChiEngPair