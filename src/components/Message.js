import { AccountBoxOutlined, HighlightOffOutlined } from '@material-ui/icons'
import React from 'react'
import './Message.css'
import { useState } from 'react'

export default function Message(props) {

const [isDeleteOpen, setIsDeleteOpen] = useState(true);


    return (
        <div className="message">

        <div className='message__left'>
            <AccountBoxOutlined />
        <div className="textArea">
            <h4>{props.messageUser}{props.id} </h4>
            <p>{props.messageText}{props.id}</p>
        </div>

        </div>

        <div className='message__right'>

            

            <div className={isDeleteOpen ? 'message__deletePopUp_hidden' : 'message__deletePopUp'}>
                <h3>Eliminare il messaggio? (Questa funzione non è attiva al momento)</h3>
                <button className="yes_delete">Si</button>
                <button className="no_delete" onClick={() => setIsDeleteOpen(!isDeleteOpen)}>No</button>
            </div>

           <div className='message__deleteButton' onClick={() => setIsDeleteOpen(!isDeleteOpen)}> <HighlightOffOutlined /> </div>

        </div>
    
        </div>
    )
}
