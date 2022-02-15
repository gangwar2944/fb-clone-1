const Story=()=>{
    const Avatar=()=>{
       return <img src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="photo" style={{width:"50px",height:"50px",borderRadius:"50%",border:"3px solid blue"}}/>
    
    }
    const img= {width:"50px",height:"50px",borderRadius:"50%"};
    return (
         <>
           <div className="story_section">
               <Avatar/>
               <h3>vishal</h3>
           </div>
         </>
    );
}
export default Story;