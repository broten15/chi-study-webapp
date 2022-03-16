import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import PatternText from './PatternText';

const TextWrapper = styled('div')({
  // width: "80%",  
});

const PatternCards = (props) => {
  const { sents } = props;

  const printSent = (sent) => {
    let result = "";
    let lines = sent.split("\n").map()
    // console.log(lines)
    return sent;
  };

  return (
    <div>
      {sents.map((sent, index) => (
        <Card 
          key={index}
          sx={{ marginTop: 2, 
                marginBottom: 2, 
                marginLeft: 1, 
                marginRight: 1 
              }}  
        >
          <CardContent 
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextWrapper>
              <Typography variant="h6" component="div">
                {/* {console.log(sent)} */}
                <PatternText
                  sent={sent}
                />
              </Typography>
            </TextWrapper>
            
          </CardContent>
        </Card>
      ))}

    </div>
  )
};

export default PatternCards;