import StoryReel from "./StoryReel";
import "../css/MidSection.css";
import PostWrite from "./PostWrite";

const MidSection=()=>{
    return (
        <>
           <div className="mid_container">
            <StoryReel/>
            <PostWrite/>
           </div>
        </>
    );
}
export default MidSection;