import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft '>
        <span className='logo'><h3>Circle-X</h3></span>
      </div>
      <div className='topbarcenter '>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='Search for friend, post or video' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight '>
        <div className='rightItem'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons rightItem'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className='rightItem'>
        <img src='/assets/person/10.jpg' alt='' className='topbarImg' />
        </div>
        
      </div>



    </div>
  )
}
