import React from 'react'
import VocabCards from "./VocabCards";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PatternCards from './PatternCards';

const Chapter = (props) => {
  const {py, chars, trans, sents, chap} = props;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkLength = (l1, l2, l3) => {
    let length = l1.length;
    let result = true;
    console.log(`py ${l1.length}, chars ${l2.length}, trans ${l3.length}`)
    if (l2.length !== length) {
      result = false;
    }
    if (l2.length !== length) {
      result = false;
    }
    return result;
  };

  return (
    <div>
      {/* <Typography
        variant="h4" 
      >
        Chapter {chap}
      </Typography> */}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Vocab" />
          <Tab label="Patterns" />
        </Tabs>
      </Box>

      {value === 0 && (
        <VocabCards
          py={py}
          chars={chars}
          trans={trans}
        />
      )}
      {value === 1 && (
        <PatternCards 
          sents={sents}
        />
      )}

    </div>
  )
}

export default Chapter