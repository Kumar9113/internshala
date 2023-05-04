import React from "react";
import { Route,Routes } from "react-router-dom";
import ShowList from "./Components/ShowList";
import ShowDetails from "./Components/ShowDetails";
// import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
  
      <Routes>
        <Route  path="/" element={<ShowList></ShowList>}></Route>
        <Route path="/shows/:id" element={<ShowDetails></ShowDetails>} />
       
      </Routes>
        
    </div>
      
  )
}

export default App



