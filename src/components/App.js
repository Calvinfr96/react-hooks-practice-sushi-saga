import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        setSushi(data)
      })
  }, [])

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const displayedSushi = sushi.slice(start, end);

  function handleMoreSushi() {
    setStart(start => start + 4)
    setEnd(end => end + 4)
  }
  if (end > 100) {
    setStart(0)
    setEnd(4)
  }

  const [plates, setPlates] = useState([])
  function handleEatenSushi(event) {
    const EatenSushi = event.target.id;
    setPlates([...plates, EatenSushi])
  }

  const [sushiBudget, setSushiBudget] = useState(100);
  function handleSpending(event, price, handleSushiClick) {
    if (sushiBudget >= price) {
      setSushiBudget(sushiBudget => sushiBudget - price)
      handleSushiClick(event)
    }
  }

  return (
    <div className="app">
      <SushiContainer
        displayedSushi={displayedSushi}
        handleMoreSushi={handleMoreSushi}
        handleEatenSushi={handleEatenSushi}
        handleSpending={handleSpending}
      />
      <Table plates={plates} sushiBudget={sushiBudget} />
    </div>
  );
}

export default App;
