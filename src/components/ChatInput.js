import { SendOutlined } from '@mui/icons-material'
import React from 'react'
import './ChatInput.css'
import { useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

export default function ChatInput() {

    

    let {roomId} = useParams();

    const [input, setInput] = useState("");

    const chatInput = useRef(null);

    const clearChatInput = () => {

        chatInput.current.value = "";
    }

   
    const sendMessage = (event) => {
    
        event.preventDefault();
        
        if (roomId) {
        axios.put(`https://slack-clone-backend-1.herokuapp.com/newMessage/${roomId}`, {
            
        messageText: input
    });
     setInput("");
}
    
    }

    return (
        <div className="chatInput">
            
      
            <input className="form__Input" placeholder={`Invia messaggio alla chat ${roomId}`} onChange={(event) => setInput(event.target.value)} ref={chatInput} rows="2"></input>

                <button onClick={(event) => {clearChatInput(); sendMessage(event);}}> <SendOutlined /></button>
                
        </div>
    )
}
