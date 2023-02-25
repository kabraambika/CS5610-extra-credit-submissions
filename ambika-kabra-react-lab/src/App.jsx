import { useState } from 'react'
import './App.css'
import Box from './box'
import Warning from './warning'

function App() {
  const [color, setColor] = useState("");
  const [updatedColor, setUpdatedColor] = useState(color);
  const [warning, setWarning] = useState(false);

  //Handles color change in input, sets value to color and warning false
  const handleColorInput = (event) => {
    setColor(event.target.value);
    setWarning(false);
  }

  //Validates color on click of button, sets value to updatedColor and warning true or false according to validation
  const handleChange = () => {
    if(color == "") {
      setUpdatedColor("white");
      setWarning(false);
      return;
    }

    if(color.trim().toLowerCase() === "red" 
    || color.trim().toLowerCase() === "blue"
    || color.trim().toLowerCase() === "green"){
      setUpdatedColor(color);
      setWarning(false);
    }
    else {
      setUpdatedColor("white");
      setWarning(true);
    }
  };

  return (
    <div className="App">
      <div>
        <Box colorValue={updatedColor.trim().toLowerCase()}/>
        <div>
          <input id="colorInput" value={color} onChange={handleColorInput}/>
          <button onClick={handleChange}>
            Change color
          </button>
        </div>
        <Warning colorName={color} active={warning}/>
      </div>
      <div>
      </div>
    </div>
  )
}

export default App
