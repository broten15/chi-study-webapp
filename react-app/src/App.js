import Chapter from "./components/Chapter";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { styled } from '@mui/system';
import { l1py, l1chars, l1trans, l1sents } from "./data/l1/l1data";
import Home from "./components/Home";

const ContentWrapper = styled('div')({
  padding: 8,
  borderRadius: 4,
  width: "80%",
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
            <Route 
              exact 
              path="/1" 
              element={
                <Chapter 
                  py={l1py}
                  chars={l1chars}
                  trans={l1trans}
                  sents={l1sents}
                />} 
            />

            {/* <Route 
              path="/2" 
              element={
                <Chapter 
                  py={l1py}
                  chars={l1chars}
                  trans={l1trans}
                  sents={l1sents}
                />} 
            /> */}
          </Routes >
        </ContentWrapper>
      </Router>
      
    </div>
  );
}

export default App;
