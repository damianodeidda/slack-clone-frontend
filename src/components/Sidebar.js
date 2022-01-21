import { AddOutlined, ArrowDropDown, ChatBubbleOutline, EditOutlined, MenuOpenOutlined, SettingsOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Sidebar() {

const [channelsList, setChannelsList] = useState([]);
const [name, setName] = useState("Nuovo canale");

const newChannelInput = useRef(null);

const clearChannelInput = () => {

    newChannelInput.current.value = "" ;
}


const [isClosed, setIsClosed] = useState(true);
const [channelListClosed, setchannelListClosed] = useState(true)


const deleteSidebarChannel = (props) => {

    window.location.reload();

    console.log("ttasto triggerato")


    setChannelsList(channelsList => {

        return channelsList.filter((id, index) => {
            return index !== props.id
        })
       })

}



useEffect(() => {

    axios.get("https://slack-clone-backend-1.herokuapp.com").then((response) => {

        setChannelsList(response.data);
    })
        
}, [])



const createChannel = () => {

    axios.post("https://slack-clone-backend-1.herokuapp.com/newChannel", {name}).then((response) =>{

setChannelsList([...channelsList, {name}])
    })

}




return (
        <div className='sidebar_main'>

        <div className="sidebar" >

        <div className="openSidebar">

            <MenuOpenOutlined />
        </div>
            
            <div className="sidebar__header">

                <h2>Nuova area di lavoro</h2>
                <EditOutlined />
                
            </div>

   

            <div className="sidebarChannels">
                <div className="sidebarChannels__header" onClick={() => setchannelListClosed(!channelListClosed)}>
            
                    <ArrowDropDown />
                    <h3> Canali </h3>
            </div>
                
                <div className={channelListClosed ? "channelList_open" : "channelList_closed"}>

                {channelsList.map((channel, id) =>{

                    return (
              
                <SidebarChannel key={channel._id} title={channel.name} onDelete={deleteSidebarChannel}  />

                    )
                })
                }

                </div>
        
                <div className="sidebarChannels__header add_channel" onClick={() => setIsClosed(!isClosed)}>  
                <AddOutlined/> <h3>  Aggiungi canale </h3>
                  </div>

                <div className={isClosed ? "popup__newChannel_closed" : "popup__newChannel_open"}>
                    
                    <input type="text" placeholder="Aggiungi canale" onChange={(event) => {setName(event.target.value)}} ref={newChannelInput} />
                    <div onClick={() => { createChannel(); clearChannelInput(); setIsClosed(!isClosed)}}> <AddOutlined /> </div>
    
                </div>

                <div className="sidebarChannels__header">
            
                    <ChatBubbleOutline />
                    <h3> Messaggi diretti </h3>
                    
                </div>

                <div className="sidebarChannels__header">
            
                    <SettingsOutlined />
                    <h3> Preferenze </h3>
                    
                </div>
            </div>      
       </div>


       </div>
    )
}
