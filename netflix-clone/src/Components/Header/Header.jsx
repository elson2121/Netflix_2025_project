import React from 'react'
import './Header.css'
import netflixImg from '../../assets/img/images.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 
 

const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'> 
        <div className='header_left'>  
      <ul>
        <li> <img src={netflixImg} alt="" /></li>
<li>Netflix</li>
<li>Home</li>
<li>Tvshows</li>
<li>Movies</li>
<li>Latest</li>
<li>Mylist</li>
<li> Browse by Languages</li>

      </ul>
</div>
<div className='header_right'> 
    <ul>
    
<li><SearchIcon/></li>
<li><NotificationAddIcon/> </li>
<li><AccountBoxIcon/> </li>
<li><ArrowDropDownIcon/> </li>

</ul>


 </div>
</div>

    </div>
  )
}

export default Header
