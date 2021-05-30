import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ displayedSushi, handleMoreSushi, handleEatenSushi, handleSpending }) {
  const sushiComponents = displayedSushi.map(sushi => {
    return (
      <Sushi
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        src={sushi["img_url"]}
        price={sushi.price}
        handleEatenSushi={handleEatenSushi}
        handleSpending={handleSpending}
      />)
  });
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleClick={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
