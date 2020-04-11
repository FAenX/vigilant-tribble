import React, { useState } from 'react'

import './App.css';


const Form=()=>{
  const [population, setPopulation]=useState()
  const [timeToElapse, setTimeToElapase] = useState()
  const [reportedCases, setReportedCases] = useState()
  const [totalHospitalBeds, setTotalHospitalBeds] = useState()
  const [periodType, setPeriodType] = useState()
  return(
    <div>
      <div><input type="number" data-population onChange={(event)=>setPopulation(event.target.value)}/></div>
      {population}
      <div><input type="number" data-time-to-elapse onChange={(event)=>setTimeToElapase(event.target.value)}/></div>
      {timeToElapse}
      <div><input type="number" data-reported-cases onChange={(event)=>setReportedCases(event.target.value)}/></div>
      {reportedCases}
      <div><input type="number" data-total-hospital-beds onChange={(event)=>setTotalHospitalBeds(event.target.value)}/></div>
      {totalHospitalBeds}
      <div><input type="number" data-period-type onChange={(event)=>setPeriodType(event.target.value)}/></div>
      {periodType}
    </div>
  )
}


const App=()=> {
  return (
    <div className="App">
      <header className="App-Main">
        <Form />
       
      </header>
    </div>
  );
}

export default App;
