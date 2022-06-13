import React from "react";

export default function counter() {
  return (
    
    <div id="container">
    <div id="inner">
      <label htmlFor="font-size">Font Size Picker</label>
      <br></br>
      <input id="fontSize-input" type="range" min="16px" max="32px" />
      <br></br>
      <label htmlFor="Word limit Input">Word Limit Input</label><br></br>
      <input type="number" id="char-limit-input" min={50} /><br></br><br></br>
      
        <textarea  id="count" cols="30" rows="10"></textarea>
        <br></br>

        <div id="world-counter">
          <h3>Total No. of World Written-</h3>
        </div>
        <br></br>
        <div id="char-counter">
          <h3>Total No. of Char Written-</h3>
          </div>
        </div>
        <br></br>

    </div>
  );
}
