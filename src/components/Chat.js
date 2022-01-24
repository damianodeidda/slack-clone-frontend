import React, { useEffect } from 'react'
import './Chat.css'
import ChatInput from './ChatInput'
import Message from './Message'
import { useParams } from 'react-router'
import { TagOutlined } from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'
import { DeleteOutline, HighlightOffOutlined } from '@material-ui/icons'


export default function Chat(props) {
    
    let {roomId} = useParams();

    const [messagesList, setMessagesList] = useState([]);
    const [channelDetail, setChannelDetail] = useState("");
    const [deleteIsclosed, setDeleteIsClosed] = useState(true);

    
    useEffect(() => {

        if (roomId) {
        

        axios.get(`https://slack-clone-backend-1.herokuapp.com/channel/${roomId}`).then((response) => {
            

            setChannelDetail(response.data.name);
            setMessagesList(response.data.messages);
            
        

        })}}, [messagesList, roomId])


    const deleteChannel = () => {

        axios.delete(`https://slack-clone-backend-1.herokuapp.com/deleteChannel/${roomId}`);
        

    }

    
    return (

        <div className="chat">
        
        <div className="chat__messagesArea">
            <div className="chat__header">
                <div className='chat__headerName'>
            <TagOutlined /> <h2> {channelDetail}</h2>
            </div>

            
            <div className='chat__headerDelete' onClick={() => setDeleteIsClosed(!deleteIsclosed)}>
                <DeleteOutline />
                <h4> Elimina Canale </h4>
                </div>
            
            
            <div className={deleteIsclosed ? 'chat__headerDeletePopup_closed' : 'chat__headerDeletePopup'}>
            <HighlightOffOutlined />
                <h2> Eliminare il canale {channelDetail}? </h2>
                <div className='chat__headerDeletePopup_buttons'>  
                <a href='https://slack-clone-portfolio.netlify.app/'>
                <button className="yes_deleteChannel" onClick={()=> {deleteChannel(); setDeleteIsClosed(!deleteIsclosed);}}>Si</button>
                </a>
                <button className="no_deleteChannel" onClick={() => setDeleteIsClosed(!deleteIsclosed)}>No</button>
                </div>
            </div>

            </div>

<div className='messages__container'>
        {messagesList.map((messages) => {

            return (
    
        <Message 
        
        key={messages._id} 
        messageUser="user1"
        messageText={messages.messageText}
        
        />
      
            )
         } )}

</div>
        </div>
        <ChatInput />
        </div>

    )
}
