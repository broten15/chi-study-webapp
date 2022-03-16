import React from "react";
import Chapter from "./components/chapter/Chapter";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import { styled } from '@mui/system';
import Home from "./components/Home";
import { lessonData, 
  PY, 
  CHARS, 
  TRANS, 
  SENTS,
  CHAP_TEXT,
  NUM_CHAPS,
} from "./const/Const";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
 
const ContentWrapper = styled('div')({
  padding: 8,
  borderRadius: 4,
  width: "90%",
  margin: "auto",
});

const App = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderChapterTabs = () => {
    return [...Array(NUM_CHAPS).keys()].map((i) => (
      <Tab 
        key={i}
        label={`${CHAP_TEXT} ${i + 1}`} 
      />
    ))
  };

  const renderChapterRoutes = () => {
    return lessonData.map((tup, index) => (
      <Route 
        exact 
        key={index}
        path={`/${index + 1}`}
        element={
          <Chapter 
            py={tup[PY]}
            chars={tup[CHARS]}
            trans={tup[TRANS]}
            sents={tup[SENTS]}
            chap={index + 1}
          />
        } 
      />
    ))
  };

  const renderConditionalChaps = () => {
    return lessonData.map((tup, index) => (
      <div key={index}>
        {value === index && (
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

  return (
    <div>
      <Router>
        <Navbar />
        <ContentWrapper>

          <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              {renderChapterTabs()}
            </Tabs>
          </Box>

          {renderConditionalChaps()}
        </ContentWrapper>
      </Router>
      
    </div>
  );
}

export default App;
