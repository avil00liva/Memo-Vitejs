import './SmallDeviceMode.css'
import Images from "./ImagesSD"
import { useState } from 'react'
import { shuffle } from "lodash"
import Modal from './Modal'

function SmallDeviceMode() {
  const [cards, setCards] = useState( shuffle([...Images, ...Images]) )
  const [clicks,setClicks] = useState(0);
  const [won,setWon] = useState(false);
  const [activeCards, setActiveCards] = useState([])
  const [foundPairs, setFoundPairs] = useState([])

  const [advise, setAdvise]=useState(false)

  const show = ()=>{
    setAdvise(!advise)
  }
  console.log(advise);

  console.log(activeCards);

  function flipCard(index){
    if(won) {
      setAdvise(true)
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
    <div className='containerSD'>
    <Modal advise={advise} setAdvise={setAdvise} show={show} />
      <div className="boardSD">
        {cards.map((card,index)=>{
          const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1

          return (
            <div key={index} className={"card-outerSD " + ( flippedToFront ? "flipped" : "") } onClick={()=> flipCard(index)}>
              <div className="cardSD">
                <div className="frontSD">
                  <img src={card} alt="meme-card" />
                </div>
                <div className="backSD" />
              </div>
            </div>
          )
        })}
      </div>
      <div className="statsSD">
        Clicks: {clicks} &nbsp;&nbsp;&nbsp;<br /> Pares encontrados: {foundPairs.length/2}
      </div>
    </div>
  )
}

export default SmallDeviceMode

