import React from 'react'
import { Typography } from '@mui/material';

const Header = (props) => {
  const { chi, eng, i } = props;

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

export default Header