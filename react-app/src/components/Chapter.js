import React from 'react'
import { l1py, l1chars, l1trans, l1sents } from "../data/l1/l1data";
import VocabCard from "./VocabCard";

const Chapter = () => {
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
        py={l1py}
        chars={l1chars}
        trans={l1trans}
      />
    </div>
  )
}

export default Chapter