import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";

const App = () => {
  
  
  return (
    <div className="App">
      
      <ReactFullpage
        debug
        
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx" 
        render={() => (
          <ReactFullpage.Wrapper>
            
    <div className="section"><h1>fullPage.js</h1></div>
    <div className="section">
        <div className="slide"><h1>Section 2</h1></div>
        <div className="slide"><h1>Slide 2.2</h1></div>
        <div className="slide"><h1>Slide 2.3</h1></div>
    </div>
    <div className="section" id="section2"><h1>Section3</h1></div>

          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default App;