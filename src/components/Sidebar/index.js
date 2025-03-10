import React from 'react'
import './sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import Logo from "../Img/logo.png";
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='sidebar-container'>
        <img onClick={()=>{navigate("player")}} src={Logo} className='logo' alt='Logo.png'/>
        <div>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite />}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>} />
      </div>
      <button onClick={()=>{alert("Signed Out")}} className='btn'><p>{<FaSignOutAlt />} <br/><p id="btt">Sign Out</p> </p></button>
      {/* <SidebarButton  title="Sign Out" to="" icon={<FaSignOutAlt />} /> */}
    </div>
  
  )
}
