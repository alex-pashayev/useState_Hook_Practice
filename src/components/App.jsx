import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [Time, setT] = React.useState();
  function updatetime() {
    const newT = new Date().toLocaleTimeString();
    setT(newT);
  }

  setInterval(updatetime,1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updatetime}>Get Time</button>
    </div>
  );
}

export default App;
