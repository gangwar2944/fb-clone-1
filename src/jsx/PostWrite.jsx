import "../css/PostWrite.css";
function PostWrite(){
    return (
    <>
       <section className="postwrite_container">
           <div className="upper_section">
                <span className="post_img"><img src="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/123053264_1161093030972575_6145899510806164076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ksKqVh03g9gAX_BakoH&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT_hRpPn6jCqGlTaN9d0Xgkz8VdRAeGdnek0mDEkEmydVg&oe=6230181E"/></span>
                <span className="input_post"><input type='text' placeholder="what's on your mind,vishal? " /></span>
           </div>
           <div className="lower_section">
               <div><span className="live_video"><i className="fa-solid fa-video"></i></span><h3>live video</h3></div>
               <div><span className="photos_video"><i className="fa-solid fa-photo-film"></i></span><h3>photos/video</h3></div>
               <div><span className="feeling"><i className="fa-solid fa-face-grin"></i></span><h3>feeling/activity</h3></div>
           </div>
       </section>
    </>
    );
}
export default PostWrite;