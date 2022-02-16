import React from 'react';
import '../css/LeftSideBar.css';

const SideOptions=(props)=>{
    return (
        <>
           <div className='options'>
                    <a href='#' className='side_icons'><i className="fa-solid fa-user-group"></i></a>
                    <h3>{props.name}</h3>
                </div>
        </>
    );
}
export default SideOptions;