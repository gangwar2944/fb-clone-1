import React from 'react';
// import './Header.css';
import './LeftSideBar.css';
import SideOptions from './SideOptions.jsx';

const LeftSideBar=()=>{
    return (
        <>  <div className='left_sidebar'>
             <div className='profile_name'>
                <img src='https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/123053264_1161093030972575_6145899510806164076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ksKqVh03g9gAX_BakoH&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT_hRpPn6jCqGlTaN9d0Xgkz8VdRAeGdnek0mDEkEmydVg&oe=6230181E' className='img' alt='profile_pic'/>
                    <h3 className='name'>vishal</h3>
                </div>
                <SideOptions class="fa-solid fa-user-group" name="friends"/>
                <SideOptions class="fa-brands fa-42-group" name="groups"/>
                <SideOptions class="fa-brands fa-42-group" name="marketplace"/>
                <SideOptions class="fa-brands fa-42-group" name="watch"/>
                <SideOptions class="fa-brands fa-42-group" name="memories"/>
                <SideOptions class="fa-brands fa-42-group" name="ad center"/>
                <SideOptions class="fa-brands fa-42-group" name="ads manager"/>
                <SideOptions class="fa-brands fa-42-group" name="blood donation"/>
                <SideOptions class="fa-brands fa-42-group" name="bussiness manager"/>
                <SideOptions class="fa-brands fa-42-group" name="COVID-19 information center"/>
                <SideOptions class="fa-brands fa-42-group" name="Crises responce"/>
                <SideOptions class="fa-brands fa-42-group" name="Emotional Health"/>
                <SideOptions class="fa-brands fa-42-group" name="Events"/>
                <SideOptions class="fa-brands fa-42-group" name="Favorites"/>
                <SideOptions class="fa-brands fa-42-group" name="Foundaisres"/>
                <SideOptions class="fa-brands fa-42-group" name="Gamimg Video"/>
                <SideOptions class="fa-brands fa-42-group" name="Live Video"/>
                <SideOptions class="fa-brands fa-42-group" name="Massenger"/>
                <SideOptions class="fa-brands fa-42-group" name="Massenger Kids"/>
                <SideOptions class="fa-brands fa-42-group" name="Most Recent"/>
                <SideOptions class="fa-brands fa-42-group" name="pages"/>
                <SideOptions class="fa-brands fa-42-group" name="Play Games"/>
                <SideOptions class="fa-brands fa-42-group" name="Recent ad acitivity"/>
             </div>
        </>
    );
}
export default LeftSideBar;