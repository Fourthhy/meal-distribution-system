import { useState, useEffect } from "react";
import './App.css'
import Insights from "./components/Insights";
import List from "./components/List";
import Schedule from "./components/Schedule";


function App() {
  const [state, setState] = useState(0)

  return (
    <>
      <button onClick={() => { setState(0) }}> INSIGHTS </button>
      <button onClick={() => { setState(1) }}> LIST </button>
      <button onClick={() => { setState(2) }}> SCHEDULE </button>
      <div>
        { state === 0 && <Insights />}
        { state === 1 && <List />}
        { state === 2 && <Schedule />}
      </div>
    </>
  )
}

export default App;