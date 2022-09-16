import React from "react";
import siva1 from "./images/back13.jpg";
import siva3 from "./images/back6.jpg";
import ReactTypingEffect from "react-typing-effect";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
 function Home(){
    return(
<div id="body">
<div id="home">

  <div class="siva">
 <span style={{color:"Gold" ,fontWeight:"bold",fontSize:"60px",marginLeft: "100px",fontFamily:"serif" }}>This is Siva </span>
<ReactTypingEffect className="typingeffect" style={{color:"aqua",fontFamily:"serif",fontSize:"40px",color:"yellow"}}
text={["From Madurai"]}
speed={200}
eraseDelay={900}
sizeWidth={10000} />
  
<br/><br/><br/><hr /></div>
<br/>


 

<div className="container2">
  <img src={siva1} className="image5" alt="avatar"/>
  <div className="overlay">
  </div>
</div>
<br/>
<h3 style={{color:"yellow",fontFamily:"serif",fontSize:"25px"}}> The home page included in defined as a contents.The contents are About, Contact,Feedback,Informations(Education,Skills,
    Image Gallery,favourits,hobbies).And then my explained about details.It included in our resume and feedback content.
</h3>


<div className="paragraph2"><br/>
  <a href="#Information"><div className="w3-panel w3-card " style={{marginLeft: "5%",width:"90%",backgroundImage:"url(${images/back11.wepb})",
  border: "3px solid",padding: "10px", boxShadow:"0 0 3px 1px #f1f1efee",color:"yellow"}}><div className="kesav"><h1>Personal Information</h1><br/>
    <h1>My personal information includes any information about my identityEducation, medical conditions,skills,
    cources,native,hobbies,favourits that is collected, stored, and communicated  technology .</h1></div></div></a>

    <br/><a href="#contact"><div className="w3-panel w3-card-2 "style={{marginLeft:"5%",width:"90%",
  border:"3px solid" ,padding:"10px" ,boxShadow:"0 0 3px 1px #f1f1efee",backgroundImage:{siva3},color:"yellow"}}><div className="kesav"><h1>Contact Me</h1>
    <h1>personal information includes any information  Facebook,imstagram,twitter,whatsapp,linked in anything
       else that is  collected,stored and communicated by  schools or technology vendors on behalf of schools.</h1><br/></div></div></a></div>
<br/>
<div className="paragraph2"><br/>
  <a href="#About"><div className="w3-panel w3-card-3 " style={{marginLeft:"5%",width:"90%",
    border:"3px solid",padding: "10px", boxShadow: "0 0 3px 1px #f1f1efee",backgroundImage:"url(images/back7.jpg)",color:"yellow"}}><div className="kesav">
      <h1>About Me</h1>
      <h1> Know i pursuing Bacholer of Engineering ComputerScience departement in Christ the king Engineering College
         at Karamadai.As i am very strong as Python and C programming languages And I also learn as front end developer.<br/></h1></div></div></a>
  
      <br/><a href="#Feedback"><div className="w3-panel w3-card-4 "style={{marginLeft: "5%",width:"90%",
    border:"3px solid",padding: "10px", boxShadow:"0 0 3px 1px #f1f1efee",backgroundImage:"url(images/back7.jpg)",color:"yellow "}}><div className="kesav"><h1>Feedback</h1>
      <h1>Feedback is a vital part of any leader’s skillset. Project managers, team leaders, teachers, 
        coaches develop this skill over the course of their careers.If update the any changes would like to send messages.</h1><br/>
        </div></div></a></div><br/><br/><br/><br/>
        <a href="#body"><ExpandLessIcon style={{fontSize:"50PX",color:"yellow",}}/></a>

    </div>
        </div> 
    )

}
export default Home;