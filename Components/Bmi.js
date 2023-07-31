import React, { useState } from 'react';
import './bmi.css';

function Bmi() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmiResult, setBmiResult] = useState();

  const calculateBMI = () => {
    if (height > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));     }
  };

  return (
    <div>
      <h1>Bmi</h1>
      <div>
        <p>Weight:</p> <input type="number" id="w" value={weight} onChange={(e)=>setWeight(Number(e.target.value))} />
        <p>Height:</p>
        <input type="number" id="h" value={height} placeholder='in cms' onChange={(e)=>setHeight(Number(e.target.value))} />
      </div>
      <button id="b" onClick={calculateBMI}>Calculate</button>
      <p>Your BMI is {bmiResult}</p>
    </div>
  );
}

export default Bmi;
