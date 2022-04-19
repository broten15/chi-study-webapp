import React from 'react'
import SingleEx from './SingleEx';


const ABEx = (props) => {
  const {i, length, lines} = props;
  let startI = i;

  if (length % 2 !== 0) {
    console.error("AB length is not div by 2", length)
  }

  return (
    <div>
      {[...Array(length / 2).keys()].map((pairNum, index) => {
        let currI = startI
        startI += 3;
        return (
          <SingleEx
            i={currI}
            key={currI}
            hasNum={index === 0 ? true : false}
            needsSpace={true}
            lines={lines}
          />
        );
      })}
    </div>
  )
}

export default ABEx;