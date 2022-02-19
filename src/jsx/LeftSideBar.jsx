import React from 'react';
// import './Header.css';
import '../css/LeftSideBar.css';
import SideOptions from './SideOptions.jsx';
import {FaUserFriends,FaCcDiscover} from "react-icons/fa";
import {TiGroup} from "react-icons/ti";
import {GiFireplace} from "react-icons/gi";
import {BsStopwatch,BsCalendarEventFill,BsMessenger,BsMusicPlayerFill} from "react-icons/bs";
import {MdVideoLibrary,MdRecentActors,MdSaveAlt} from "react-icons/md";
import {FcAdvertising} from "react-icons/fc";
import {VscGraph} from "react-icons/vsc";
import {RiDropFill,RiEmotionNormalLine,RiLiveLine} from "react-icons/ri";
import {SiGoogletagmanager,SiFacebookgaming} from "react-icons/si";
import {AiFillDropboxCircle,AiFillStar,AiFillFlag} from "react-icons/ai";
import {BiHeartCircle} from "react-icons/bi";



const LeftSideBar=()=>{
    return (
        <> 
         <div className='left_sidebar'>
             <div className='profile_name'>
                <img src='https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/123053264_1161093030972575_6145899510806164076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ksKqVh03g9gAX_BakoH&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT_hRpPn6jCqGlTaN9d0Xgkz8VdRAeGdnek0mDEkEmydVg&oe=6230181E' className='img' alt='profile_pic'/>
                    <h3 className='name'>vishal</h3>
                </div>
                <SideOptions Icon={FaUserFriends} name="friends"/>
                <SideOptions Icon={TiGroup} name="groups"/>
                <SideOptions Icon={GiFireplace} name="marketplace"/>
                <SideOptions Icon={MdVideoLibrary} name="watch"/>
                <SideOptions Icon={BsStopwatch} name="memories"/>
                <SideOptions Icon={FcAdvertising} name="ad center"/>
                <SideOptions Icon={VscGraph} name="ads manager"/>
                <SideOptions Icon={RiDropFill} name="blood donation"/>
                <SideOptions Icon={SiGoogletagmanager} name="bussiness manager"/>
                <SideOptions Icon={FaCcDiscover} name="COVID-19 information center"/>
                <SideOptions Icon={AiFillDropboxCircle} name="Crises responce"/>
                <SideOptions Icon={RiEmotionNormalLine} name="Emotional Health"/>
                <SideOptions Icon={BsCalendarEventFill} name="Events"/>
                <SideOptions Icon={AiFillStar} name="Favorites"/>
                <SideOptions Icon={BiHeartCircle} name="Foundaisres"/>
                <SideOptions Icon={SiFacebookgaming} name="Gamimg Video"/>
                <SideOptions Icon={RiLiveLine} name="Live Video"/>
                <SideOptions Icon={BsMessenger} name="Massenger"/>
                <SideOptions Icon={MdRecentActors} name="Most Recent"/>
                <SideOptions Icon={AiFillFlag} name="pages"/>
                <SideOptions Icon={BsMusicPlayerFill} name="Play Games"/>
                <SideOptions Icon={MdSaveAlt} name="saved"/>
             </div>
        </>
    );
}
export default LeftSideBar;