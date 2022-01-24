import React from 'react'
import './Header.css';
import { AccountCircleOutlined, GitHub, ScheduleOutlined, SearchOutlined } from "@material-ui/icons"


export default function Header() {
    return (
        <div className="header">

        <div className="header__left">
            <ScheduleOutlined />
        </div>

        <div className="header__search">
        <SearchOutlined />
            <input className="searchBar" placeholder="Cerca nuova area di lavoro"></input>

        </div>

        <div className="header__right">
            <a href='https://github.com/damianodeidda/slack-clone'>
           <GitHub />
           </a>
           <AccountCircleOutlined />
           <p>ciao, user1</p>
        </div>
       
            
    </div>
    )
}
