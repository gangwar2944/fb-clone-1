import { BiVideoPlus } from "react-icons/bi";
import {AiOutlineSearch } from "react-icons/ai";
import {BsThreeDots } from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";
import '../css/RightContainer.css'
const RightContainer =()=>{
   const MessengerComponent =(props)=>{
      return (
      <>
         <div className="single_msger">
            <div className="chat_img">
               <img src={props.imgUrl} alt="chat"/>
               <GoPrimitiveDot className="active_dot"/>
            </div>
            <div className="name">{props.name}</div>
         </div>
      </>);
   }
    return (
    <>
       <div className="right_container">
          <header className="r_header">
               <p>contacts</p>
                <div className="icons">
                  <span><BiVideoPlus/></span> 
                  <span><AiOutlineSearch/></span>
                  <span><BsThreeDots/></span>
                </div>
          </header>
          <div className="messenger">
             <MessengerComponent imgUrl="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="vishal gangwar"/>
             <MessengerComponent imgUrl="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/58382839_712026542545895_6550456349153558528_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2F6sxL3_m3oAX-3rTMq&tn=4fMOK3C0sJFeR6Y5&_nc_ht=scontent.flko7-2.fna&oh=00_AT9D6hWc7Uc9FBdYOkfIpgIs6YnX0a1qX0S1tgoXnaUcBA&oe=6232FC55" name="vimal gangwar"/>
             <MessengerComponent imgUrl="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/88154020_948017055613508_6573779962896056320_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=5Srs0d-IZG8AX88dC_e&_nc_ht=scontent.flko7-2.fna&oh=00_AT-dLh7ZB9Y-Sc5AZfV6-5Ji_9j-9TjlmtR4RTKGFgr54Q&oe=62330BED"  name="sonu yadav"/>
             <MessengerComponent imgUrl="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/36705005_261829524589680_5040607574597042176_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=-DY9V-zcXboAX_Bj28o&_nc_oc=AQn5vv-te8xwrCKSzMg2XgESRfhdCVzWO3BaKi_pdjjPyA48StFjmkIyV_79skpP5g4&_nc_ht=scontent.flko7-2.fna&oh=00_AT-JwA5p946xGy8UkLeC2rauVM9k0EkGcuZoc4fd52x5PQ&oe=62346B32" name="diviyansa "/>
             <MessengerComponent imgUrl="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/75474173_848849662196915_6703148926221942784_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=4RHUeBwFJ1IAX-nA3N4&_nc_ht=scontent.flko7-1.fna&oh=00_AT-L_eT-6VxpnjyGaO2GpujvIflZZpoXNbPsS-s-IzJShQ&oe=6232377B" name="kavita"/>
             <MessengerComponent imgUrl="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="sonuaa"/>
             <MessengerComponent imgUrl="https://scontent.flko7-2.fna.fbcdn.net/v/t1.6435-9/50829484_663187484096468_539796136915894272_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=V5qHms4JwoYAX_EsxXc&_nc_ht=scontent.flko7-2.fna&oh=00_AT8f0MIj3ZoF_v_Q9-YgAIGkQlNmV-AWcS7UQ6FzRhmfyQ&oe=6232428E" name="asit gangwar"/>
             <MessengerComponent imgUrl="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/273710512_948512786097371_8599342456237359523_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=q4h8peMMUqcAX__Cfgk&_nc_ht=scontent.fdel27-5.fna&oh=00_AT_GPqdYOX1K4nUo6mvg-Az0we1qJ_Z5-Sl2u_QN1nN65w&oe=6214ECD3"  name="vivek singh"/>
             <MessengerComponent imgUrl="https://scontent.fdel27-2.fna.fbcdn.net/v/t39.30808-6/p526x296/273652574_3015405365340557_5644762409865090973_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=dEsZCVorRGIAX-liG1p&_nc_ht=scontent.fdel27-2.fna&oh=00_AT_1TI8_uGbFgPVHLPdc7yeDJoO5rpjk4S4HueEjIQggTg&oe=62169A69" name="sanklap"/>
             <MessengerComponent imgUrl="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="vaisali"/>
             <MessengerComponent imgUrl="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="kavya singh"/>
          </div>
       </div>
    </>
    );
}
export default RightContainer;