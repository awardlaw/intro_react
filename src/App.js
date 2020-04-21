import React, { useState } from 'react';


// a "Component"
export function App() {

  // [the value, the setter for that value]
  const [number, setNumber] = useState(2)

  // Components return JSX ("HTML in Javascript")
  return (
    <div className="App">
      <header className="App-header">
        {/* in JSX land */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          // back in JS land
          // write expressions in curly brackets
          number}

      </header>
      <button onClick={function () {
        const newNumber = multiplyNumberBy2(number)

        // how do we update the page?

        // trigger a re-render
        setNumber(newNumber)

      }}>
        Multiply by 2!
      </button>
    </div>
  );
}

function multiplyNumberBy2(number) {
  console.log("🌟🚨: number", number)
  return number * 2
}