import React from 'react';
import '../css/LeftSideBar.css';

const SideOptions=({Icon,name})=>{
    return (
        <>
           <div className='options'>
                    <a href='#' className='side_icons'>{Icon && <Icon/>}</a>
                    <h3>{name}</h3>
                </div>
        </>
    );
}
export default SideOptions;