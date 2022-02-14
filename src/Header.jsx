import React from 'react';
import './Header.css';
const Header=()=>{
    return (
        <>
          <div className='header'>
            <div className='logo_input'>
              <div className='logo'><i className="fa-brands fa-facebook fa-3x"></i></div>
              <div className='search_facebook'>
                  <input placeholder='search facebook' className='input_box'/>  
                  <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
            </div>
            <div className='icons_options'>
               <ul>
                   <li><a href='#' className='nav-links active'><i className="fa-solid fa-house fa-2x"></i></a></li>
                   <li><a href='#' className='nav-links'><i className="fa-solid fa-film fa-2x"></i></a></li>
                   <li><a href='#' className='nav-links'><i className="fa-solid fa-cart-arrow-down fa-2x "></i></a></li>
                   <li><a href='#' className='nav-links'><i className="fa-solid fa-user-group fa-2x"></i></a></li>
                   <li><a href='#' className='nav-links'><i className="fa-solid fa-chess-board fa-2x"></i></a></li>
               </ul>
            </div>
            <div className='profile_notification'>
                <div className='profile_icon'>
                    <div className='img'><img src='https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/123053264_1161093030972575_6145899510806164076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ksKqVh03g9gAX_BakoH&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT_hRpPn6jCqGlTaN9d0Xgkz8VdRAeGdnek0mDEkEmydVg&oe=6230181E' alt='profile_pic'/></div>
                    <h3>vishal</h3>
                </div>
                <div className='notificaion_icons'>
                   <div><a href='#' className='notification_side'><i className="fa-solid fa-house"></i></a></div>
                   <div><a href='#' className='notification_side'><i className="fa-solid fa-cart-arrow-down  "></i></a></div>
                   <div><a href='#' className='notification_side'><i className="fa-solid fa-user-group "></i></a></div>
                   <div><a href='#' className='notification_side'><i className="fa-solid fa-chess-board "></i></a></div>
               </div>
            </div>
          </div>
        </>
    );
};

export default Header;