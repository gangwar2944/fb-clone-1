import '../css/Story.css';
const Story=(props)=>{
   
    return (
         <>
           <div className="story_section" style={{backgroundImage:`url(${props.bimg})`}}>
              <div className='story_img'><img src={props.imgUrl} alt="photo"/></div> 
               <h3 className='story_name'>{props.name}</h3>
           </div>
         </>
    );
}
export default Story;