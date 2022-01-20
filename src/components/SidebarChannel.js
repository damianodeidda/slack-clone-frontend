import React from 'react'
import { useState } from 'react';
import './SidebarChannel.css'
import { TagOutlined } from '@mui/icons-material';
import { DeleteOutline, MoreVertOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SidebarChannel(props) {

    const path = "/rooms/" + props.title;


    const [isPopupClosed, setisPopupClosed] = useState(true)


    const deleteChannel = () => {

        axios.delete(`https://slack-clone-backend-1.herokuapp.com/deleteChannel/${props.title}`)

        
        props.onDelete()

    }



    return (
        <div className='sidebarChannel_main'>
            <div className="sidebarChannel">
        
            <Link to={path}>
            <div className='sidebarChannel__infos'>
            <TagOutlined />
           <p>{props.title}{props.id}</p>
           </div>
           </Link>

           <div className='sidebarChannel__deleteButton' onClick={() => setisPopupClosed(!isPopupClosed)}>

                <MoreVertOutlined />
            </div>
           
       </div>

      

    <div className={isPopupClosed ? "sidebarChannel__popUpClosed" : "sidebarChannel__popUpOpen"} onClick={() => {deleteChannel(); setisPopupClosed(!isPopupClosed) }}>
    <DeleteOutline />
    <p>Elimina il canale {props.title}?</p>
    </div>



       </div>
    
    )
}
