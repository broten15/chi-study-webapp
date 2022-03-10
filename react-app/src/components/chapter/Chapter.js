import React from 'react'
import VocabCard from "./VocabCard";

const Chapter = (props) => {
  const {py, chars, trans, sents} = props;

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
      Chapter
      {/* {console.log(checkLength(l1py, l1chars, l1trans))} */}
      <VocabCard 
        py={py}
        chars={chars}
        trans={trans}
      />
    </div>
  )
}

export default Chapter