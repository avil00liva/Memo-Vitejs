import React from 'react'
import "./Home.css"
import owl1 from "../images/owl-1.png"
import owl2 from "../images/owl-2.png"
import { Link } from 'react-router-dom'


const Home = () => {


    return (
        <div className='homeContainer'>
            <div className="card-outerH">
                <div className="cardH">
                    <div className="frontH">
                        <img src={owl2} alt="Logo game" />
                    </div>
                    <div className="backH" />
                </div>
            </div>
            <div className="card-outerH rigthH">
            <div className="cardH">
                <div className="frontH">
                    <img src={owl1} alt="Logo game" />
                </div>
                <div className="backH" />
            </div>
        </div>

          <div className="homeMenu">
                <h1>Memo Vite ⚡</h1>
                <button className="btnMenu">
                   <Link to="/large-device">
                        Large device 🖥
                   </Link> 
                </button>
                <button className="btnMenu">Medium device 💻</button>
                <button className="btnMenu">
                    <Link to="/small-device">
                        Small device 📱
                    </Link>
                </button>
          </div>
        </div>
    )
}

export default Home
