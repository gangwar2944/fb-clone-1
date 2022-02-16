import StoryReel from "./StoryReel";
import "../css/MidSection.css";
import PostWrite from "./PostWrite";
import Post from "./Post";

const MidSection=()=>{
    return (
        <>
           <div className="mid_container">
            <StoryReel/>
            <PostWrite/>
            <Post/>
           </div>
        </>
    );
}
export default MidSection;