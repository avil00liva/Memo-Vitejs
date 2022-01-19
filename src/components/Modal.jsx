import React from 'react'
import "./Modal.css"
import { HiX } from "react-icons/hi"

const Modal = ({advise, setAdvise, show}) => {
    return (
        <div className={advise ? "modalContainerActive" : 'modalContainer'}>
            <div className="modalContent">
                <HiX onClick={show}/>
                Ganaste el juego! Felicidades!<br />
                Click en cualquier carta para jugar de nuevo.<br /><br />
            </div>
        </div>
    )
}

export default Modal
