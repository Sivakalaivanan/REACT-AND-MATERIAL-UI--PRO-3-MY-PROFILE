import React from "react";
import pic8 from "./images/skills/c.webp";
import pic9 from "./images/skills/py.jfif";
import pic10 from "./images/skills/frnd.jfif";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
function Skills(){
return(
    <div>
<div id="body">
<div id="Skills">
 <marquee><br/> <span style={{color:"gold", fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize:"40px"}}>My </span>
<span style={{color:"pink", fontSize:"40px",fontFamily:"serif"}}>Skills</span></marquee>
<hr style={{width:"100%",textAlign:"left",color:"yellow",height:"1px"}}/>

<a style={{color:"rgb(33, 137, 235)",fontSize:"15px"}}><h2>C Programming Language</h2></a>
<progress  value="80" max="100" style={{height:"20px",width:"800PX"}}><p style={{color:"red"}}>80%</p></progress><br/>
<br/>
<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj1-KuK7Kr4AhXjSGwGHWkiAnsQFnoECAQQAQ&url=https%3A%2F
%2Fwww.programiz.com%2Fc-programming&usg=AOvVaw37pAKfSGf4dJOYsSYs5m1T"><img  src={pic8} width="500" height="170" 
style={{overflow:"visible",bordeRadius:"20px",border:"3px solid",padding:"10px", boxShadow:"0 0 3px 1px #eed708ee"}}/></a>
<h3 style={{color:"lightblue",fontSize:"17px"}}>C is a powerful general-purpose programming language.
It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language
to learn to program for beginners.Our C tutorials will guide you to learn C programming one step at a time.We focus on simplicity. 
Programming tutorials and examples written in simple, understandable language for beginners.</h3><hr/>
 

<a style={{color:"skyblue",fontSize:"15px"}}><h1> Python programming Language</h1></a>
<span className="fa fa-star checked" style={{fontSize:"20px "}}></span>
<span class="fa fa-star checked" style={{fontSize:"20px "}}></span>
<span class="fa fa-star checked" style={{fontSize:"20px "}}></span>
<span class="fa fa-star " style={{fontSize:"20px "}}></span>
<span class="fa fa-star" style={{fontSize:"20px"}}></span><br/><br/>
<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiq9P7O_6v4AhUFR2wGHa7DCM4QjBB6BAgGEAE&url=https%3A%2F%2Fwww.python.
org%2Fabout%2Fgettingstarted%2F&usg=AOvVaw1MxcY_lBYm1drnwuZfanDa"><img src={pic9}width="500" height="170" alt="siva"
  style={{animation:"shake 2s",animationIterationCount:"infinite",overflow:"visible",borderRadius:"20px",
  border:"3px solid",padding:"10px", boxShadow:"0 0 3px 1px #eed708ee"}}/></a>
  <h4 style={{color:"skyblue"}}>The Python Software Foundation (PSF) is a 501(c)(3) non-profit corporation that holds the intellectual property rights behind
  the Python programming language. We manage the open source licensing for Python version 2.1 and laterand own and protect the 
  trademarks associated with Python. We also run the North American PyCon conference annually, support other Python
  conferences around the world.
 </h4><hr/>


<a style={{color:"rgb(42, 236, 236)",fontSize:"15px"}}><h1>Front end Development</h1></a>

<progress  value="90" max="100" style={{height:"20px",width:"800PX"}}><p style={{color:"red"}}>90%</p></progress>
<br/><br/>
<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjV5daw_6v4AhVKRmwGHfffCEIQFnoECCMQAQ&url=https%3A%2F%2Ffrontendmasters.
com%2Fbooks%2Ffront-end-handbook%2F2018%2Fwhat-is-a-FD.html&usg=AOvVaw0RCKDtUc_jIl6IFH33TyHJ"><img src={pic10} width="500" height="170" alt="siva"
  style={{animation:"shake 1s",animationIterationCount:"infinite",overflow:"visible",borderRadius:"20px",
  border:"3px solid",padding:"10px", boxShadow:"0 0 3px 1px #eed708ee"}}/></a>
  <h2 style={{color:"skyblue",fontSize:"17px"}}>Our organization is looking for a Front End Developer who can utilize HTML, CSS and jQuery to develop effective user
  interfaces on the company website and mobile apps released to the public. The successful candidate will work closely with 
  our web development and software design teams to update the website and internal web tools to make them more efficient. 
  The front end developer will also be responsible .</h2>
  <a href="#Skills"><ExpandLessIcon style={{fontSize:"50PX",color:"yellow",}}/></a>

</div>
    </div>
    </div>
)
}
export default Skills;