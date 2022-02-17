import '../css/Post.css'
import {FaEllipsisH} from 'react-icons/fa';
import {FaGlobeEurope} from 'react-icons/fa';

function Post(){
    // var btn=document.querySelector("#submit");
    // const comment=document.querySelector(".comment");
    // const comment_write=document.querySelector(".comment_write");
    // const comment_show=document.querySelector(".comment_show");
    // const box=document.querySelector(".box")
   

    // const addInput=()=>{
    //     const note = document.createElement("div");
    //     note.classList.add('comment_write');

    //     const htmlData =`<input type="text"  class="input" placeholder="write a comment here"><button type="submit" id="submit" value="btn">submit</button> `;
         
    //     note.insertAdjacentHTML("afterbegin",htmlData);
    //     console.log(note);
    //     box.appendChild(note);
    //     // document.body.appendChild(note);
    // }
    // comment.click(function(){addInput()});
       
    return (
    <>
        <div class="post_container">
          <div className='post_header'>
                  <div className='photoNameDot'>
                   <div className='profile_photo'>
                   <img src='https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/123053264_1161093030972575_6145899510806164076_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ksKqVh03g9gAX_BakoH&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT_hRpPn6jCqGlTaN9d0Xgkz8VdRAeGdnek0mDEkEmydVg&oe=6230181E' alt='profile_pic'/></div>
                   <div className='post_profile_name'>
                      <h3 className='name'>vishal gangwar</h3>
                      <div className='timeIcon'><time>18 h</time><span className='earth_icon'><FaGlobeEurope/></span></div>
                    </div>
                  </div>
                  <FaEllipsisH style={{marginRight:"10px"}}/>
          </div>
            <div className='upload_img'>
               <img src="https://images.unsplash.com/photo-1644424232401-a93a1405d902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="post"/>
            </div>
            <div className='like_icon'>
              <div className='icon_count'>
                <span className='fa-thumbs-up'><i class="fas fa-thumbs-up"/></span>
                <span className='fa-heart'><i class="fas fa-heart"/></span>
              </div>
              <p className='com_count'>13 comment</p>
            </div>
            <div class="footer_section">
               <button class="btn"><span><i class="fa-regular fa-thumbs-up"></i></span>Like</button> 
               <button class="btn comment"><span><i class="fa-regular fa-comment"></i></span>Comment</button> 
               <button class="btn"><span><i class="fa-solid fa-share-nodes"></i></span>Share</button> 
            </div>
    </div>
    </>
    );
}
export default Post;