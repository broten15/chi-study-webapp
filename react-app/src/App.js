import React from "react";
import Chapter from "./components/chapter/Chapter";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import { styled } from '@mui/system';
import { lessonData, 
  PY, 
  CHARS, 
  TRANS, 
  SENTS,
  CHAP_TEXT,
  NUM_CHAPS,
  ALL_TEXT,
} from "./const/Const";

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
 
const ContentWrapper = styled('div')({
  padding: 8,
  borderRadius: 4,
  width: "65%",
  minWidth: "42rem",
  margin: "auto",
});

const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderChapterTabs = () => {
    return [...Array(NUM_CHAPS + 1).keys()].map((i) => (
      <Tab 
        key={i - 1}
        label={`${i === 0 ? "" : CHAP_TEXT} ${i === 0 ? ALL_TEXT : i}`} 
      />
    ))
  };

  const renderConditionalChaps = () => {
    return lessonData.map((tup, index) => (
      <div key={index + 1}>
        {value === index + 1 && (
          <Chapter
            py={tup[PY]}
            chars={tup[CHARS]}
            trans={tup[TRANS]}
            sents={tup[SENTS]}
            chap={index + 1}
          />
        )}
      </div>
    ))
  };

  const renderAllLessons = () => {
    const allLessonData = [[],[],[],[]]
    lessonData.forEach((tup, index) => {
      allLessonData[PY] = allLessonData[PY].concat(tup[PY])
      allLessonData[CHARS] = allLessonData[CHARS].concat(tup[CHARS])
      allLessonData[TRANS] = allLessonData[TRANS].concat(tup[TRANS])
      allLessonData[SENTS] = allLessonData[SENTS].concat(tup[SENTS])
    })
    console.log(allLessonData)
    return (
      // <div>hello</div>
      <Chapter
        py={allLessonData[PY]}
        chars={allLessonData[CHARS]}
        trans={allLessonData[TRANS]}
        sents={allLessonData[SENTS]}
        chap={0 }
      />
    );

  };

  return (
    <div>
      <Router>
        <Navbar />
        <ContentWrapper>

          <Box sx={{ borderBottom: 4, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"  
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                },
              }}
            >
              {renderChapterTabs()}
            </Tabs>
          </Box>

          {value === 0 && (
            renderAllLessons() // change this to comp later
          )}

          {renderConditionalChaps()}
        </ContentWrapper>
      </Router>
      
    </div>
  );
}

export default App;
