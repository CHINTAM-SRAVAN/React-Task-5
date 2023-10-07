import React, { useState } from "react";
export default function App() {
  var currentYear = 2023;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  function clickHandler() {
    var theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    var date = new Date(e);
    var year = date.getFullYear();
    setbirthYear(year);
  }

  return (
    <center>
    <div className="App">
      <h1>Age Calculator</h1>
      <p>Enter Your Date of Birth</p>
      <input type="date" onChange={(e) => inputChangeHandler(e.target.value)} />
      <p><button onClick={clickHandler} style={{backgroundColor:"lightBlue"}}>Calculate Age</button></p>

      <div>You are {age} years old</div>
    </div>
    </center>
  );
}
