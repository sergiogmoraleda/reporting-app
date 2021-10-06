
import "./App.css";
import React from "react";
import {generateReport, generateReportFromTemplate} from "./reportGenerator.jsx"


function App() {
  return(
    <>
    <div class= "container">
          <button id = "buttonReport" onClick= {generateReport} >
            
            Generate Reports
            
          </button>
    </div>
    <div class= "container2">
          <button id = "buttontemplate" onClick= {generateReportFromTemplate} >
            
            Generate Reports from template
            
          </button>
    </div>
    </>
    
  )
}
export default App;