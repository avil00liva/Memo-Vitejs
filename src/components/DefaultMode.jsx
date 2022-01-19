import './DefaultMode.css'
import Images from "./Images"
import { useState } from 'react'
import { shuffle } from "lodash"

function DefaultMode() {
  const [cards, setCards] = useState( shuffle([...Images, ...Images]) )
  const [clicks,setClicks] = useState(0);
  const [won,setWon] = useState(false);
  const [activeCards, setActiveCards] = useState([])
  const [foundPairs, setFoundPairs] = useState([])

  console.log(activeCards);

  function flipCard(index){
    if(won) {
      setCards(shuffle([...Images, ...Images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if(activeCards.length === 0) {
      setActiveCards([index])
    }
    if(activeCards.length === 1) {
      const firstIndex = activeCards[0]
      const secondIndex = index

      if(cards[firstIndex] === cards[secondIndex]) {
        if(foundPairs.length + 2 === cards.length){
          setWon(true)
        }
        setFoundPairs([...foundPairs, firstIndex, secondIndex])
      }
      setActiveCards([...activeCards, index])
    }
    if(activeCards.length === 2) {
      setActiveCards([index])
    }
    setClicks(clicks + 1)

  }

  return (
    <div style={{background: "#123", padding: "20px"}}>
      <div className="board">
        {cards.map((card,index)=>{
          const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1

          return (
            <div key={index} className={"card-outer " + ( flippedToFront ? "flipped" : "") } onClick={()=> flipCard(index)}>
              <div className="card">
                <div className="front">
                  <img src={card} alt="meme-card" />
                </div>
                <div className="back" />
              </div>
            </div>
          )
        })}
      </div>
      <div className="stats">
        {won && (
          <>Ganaste el juego! Felicidades!<br />
            Click cualquier carta para jugar de nuevo.<br /><br />
          </>
        )}
        Clicks: {clicks} &nbsp;&nbsp;&nbsp;<br /> Pares encontrados: {foundPairs.length/2}
      </div>
    </div>
  )
}

export default DefaultMode
