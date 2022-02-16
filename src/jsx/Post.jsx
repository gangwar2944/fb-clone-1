import '../css/Post.css'
function Post(){
    var btn=document.querySelector("#submit");
    const comment=document.querySelector(".comment");
    const comment_write=document.querySelector(".comment_write");
    const comment_show=document.querySelector(".comment_show");
    const box=document.querySelector(".box")
   

    const addInput=()=>{
        const note = document.createElement("div");
        note.classList.add('comment_write');

        const htmlData =`<input type="text"  class="input" placeholder="write a comment here"><button type="submit" id="submit" value="btn">submit</button> `;
         
        note.insertAdjacentHTML("afterbegin",htmlData);
        console.log(note);
        box.appendChild(note);
        // document.body.appendChild(note);
    }
    // comment.click(function(){addInput()});
       
    return (
    <>
        <div class="post_container">
          <div class="box">
            <img src="https://images.unsplash.com/photo-1644424232401-a93a1405d902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="post"/>
            <div class="footer_section">
               <button class="btn"><i class="fa-regular fa-thumbs-up"></i>Like</button> 
               <button class="btn comment" onClick={addInput}><i class="fa-regular fa-comment"></i>Comment</button> 
               <button class="btn"><i class="fa-solid fa-share-nodes"></i>Share</button> 
            </div>
        </div> 
    </div>
    </>
    );
}
export default Post;