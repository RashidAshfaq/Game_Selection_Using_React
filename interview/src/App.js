import './App.css';
import React from 'react';

function App() {
  const options = ['Cricket','Football','Hockey'];
  const days = ['weekDay', 'weekend'];
  const [game, setGame] = React.useState();
  const [day,setDays] = React.useState();
  return (
    <div className="App">
      <h1>Which Game You want to Play?</h1>
      <h2>Select a Game: </h2>
      {
        options.map((currValue) => {
          return(
            <>
        <input type='radio' name='options' id={currValue} value={currValue} onChange={(e) => setGame(e.target.value)} /> 
          <label htmlFor={currValue}>{currValue}</label>
          <br/>
            </>
          )
        })
      }
      <h2>Select Day: </h2>
      {
        days.map((currValue) => {
          return(
            <>
        <input type='radio' name='options' id={currValue} value={currValue} onChange={(e) => setDays(e.target.value)} /> 
          <label htmlFor={currValue}>{currValue}</label>
          <br/>
            </>
          )
        })
      }
      <h3>You will Play:</h3>
      <p >{game} on {day}</p>
    </div>
  );
}

export default App;
