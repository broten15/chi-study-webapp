import Chapter from "./components/chapter/Chapter";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import { styled } from '@mui/system';
import { l1py, l1chars, l1trans, l1sents } from "./data/l1/l1data";
import { l2py, l2chars, l2trans, l2sents } from "./data/l2/l2data";
import { l3py, l3chars, l3trans, l3sents } from "./data/l3/l3data";
import { l4py, l4chars, l4trans, l4sents } from "./data/l4/l4data";
import { l5py, l5chars, l5trans, l5sents } from "./data/l5/l5data";
import { l6py, l6chars, l6trans, l6sents } from "./data/l6/l6data";
import Home from "./components/Home";

const ContentWrapper = styled('div')({
  padding: 8,
  borderRadius: 4,
  width: "70%",
  margin: "auto",
});

const App = () => {


  return (
    <div>
      <Router>
        <Navbar />
        <ContentWrapper>
          <Routes >
            <Route 
              path="/" 
              element={<Home/>}
            />
            {/* I should just loop over each chapter */}
            <Route 
              exact 
              path="/1" 
              element={
                <Chapter 
                  py={l1py}
                  chars={l1chars}
                  trans={l1trans}
                  sents={l1sents}
                  chap={1}
                />} 
            />

            <Route 
              exact 
              path="/2" 
              element={
                <Chapter 
                  py={l2py}
                  chars={l2chars}
                  trans={l2trans}
                  sents={l2sents}
                  chap={2}
                />} 
            />
            
            <Route 
              exact 
              path="/3" 
              element={
                <Chapter 
                  py={l3py}
                  chars={l3chars}
                  trans={l3trans}
                  sents={l3sents}
                  chap={3}
                />} 
            />

            <Route 
              exact 
              path="/4" 
              element={
                <Chapter 
                  py={l4py}
                  chars={l4chars}
                  trans={l4trans}
                  sents={l4sents}
                  chap={4}
                />} 
            />

            <Route 
              exact 
              path="/5" 
              element={
                <Chapter 
                  py={l5py}
                  chars={l5chars}
                  trans={l5trans}
                  sents={l5sents}
                  chap={5}
                />} 
            />

            <Route 
              path="/6" 
              element={
                <Chapter 
                  py={l6py}
                  chars={l6chars}
                  trans={l6trans}
                  sents={l6sents}
                  chap={6}
                />} 
            />
          </Routes >
        </ContentWrapper>
      </Router>
      
    </div>
  );
}

export default App;
