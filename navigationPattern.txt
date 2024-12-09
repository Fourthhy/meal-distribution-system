import { useState, useEffect } from "react";
import './App.css'


function App() {
  const [state, setState] = useState(0)

  const handleNavigation = () => {
    switch(state) {
      case 0:
        return "Insights"
      case 1:
        return "List"
      case 2:
        return "Schedule"
      default:
        return "Insights"
    }
  }

  return (
    <>
      {/*NAVIGATION LOGIC 2*/}
      <button onClick={() => { setState(0) }}> INSIGHTS </button>
      <button onClick={() => { setState(1) }}> LIST </button>
      <button onClick={() => { setState(2) }}> SCHEDULE </button>
      <div>
        { handleNavigation() }
      </div>
    </>
  )
}

export default App;

/*
  NAVIGATION LOGIC 1

  <button onClick={() => { setState(0) }}> INSIGHTS </button>
  <button onClick={() => { setState(1) }}> LIST </button>
  <button onClick={() => { setState(2) }}> SCHEDULE </button>
  <div>
    { state === 0 && <Insights />}
    { state === 1 && <List />}
    { state === 2 && <Schedule />}
  </div>
*/