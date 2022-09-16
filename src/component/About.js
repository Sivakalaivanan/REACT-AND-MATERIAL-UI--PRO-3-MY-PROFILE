import React from "react";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import pic25 from "./images/about.jpg";
import SimCardDownloadTwoToneIcon from "@mui/icons-material/SimCardDownloadTwoTone";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FolderIcon from '@mui/icons-material/Folder';
import Validation  from "./Validation";
import ReactTypingEffect from "react-typing-effect";
function About() {
  return (
    <div>
      <div id="body">
        <div id="About">
          <br />
          <span
            style={{
              color: "rgb(223, 41, 168)",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            About
          </span>
          <span
            style={{ color: "green", fontWeight: "bold", fontSize: "40px" }}
          >
            {" "}
            Me
          </span>
          <br />
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "hsl(60, 100%, 100%)",
              height: "2px",
            }}
          />
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <br />
              <Typography style={{ fontFamily: "serif", fontSize: "20px" }}>
                I'm Siva From Madurai. Know i pursuing Bacholer of Engineering
                ComputerScience departement in Christ the king Engineering
                College at Karamadai. As i am very strong as Python and C
                programming languages.And I also learn as front end developer.
              </Typography>
              <br />

              <p style={{ color: "rgb(248, 68, 218) " }}>
                <h3> My Resume , Download</h3>
              </p>
              <a href="files/resume.pdf" >
                <FolderIcon
                  style={{ color: "gold", fontSize: "40px",marginLeft:"30px" }}
                />
              </a>

              <a href="files/siva.docx" download>
                <SimCardDownloadTwoToneIcon
                  style={{ color: "gold", fontSize: "40px",marginLeft:"30px" }}
                />
              </a>

              <Typography style={{ fontFamily: "serif", fontSize: "20px" }}>
                My famly consists of four members. My strength was Adaptoble
                person and good memarable person.My aim is get a good job for my
                carrier both. My hobbie is watch crime stories and travelling
                lot of everyday and more places. Thanking You.
              </Typography>
              <br />
            </Grid>

            <Grid item xs={6}>
              <img
                src={pic25}
                alt="pic"
                width="500px"
                height="350px"
                className="img-info"
              />
            </Grid>
          </Grid>
          <br />
          <ReactTypingEffect className="typingeffect" style={{color:"aqua",fontFamily:"serif",fontSize:"40px",color:"white"}}
text={["Front End Developer , Photographer , Team Leader"]}
speed={20}
eraseDelay={10}
sizeWidth={10000} />
          <br />

          <br />
          <Grid container spacing={30}>
            <Grid item xs={6}>
              <a
                style={{ fontSize: "30px", color: "yellow", fontFamily: "serif" }}
              >
                My Events
              </a>
              <br />
              <br />

              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=UTC&src=c2l2YTQzMjAwMUBnbWFpbC5jb20&src=Y19jbGFzc3Jvb205MTJjZTc4YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb200OTg2ODk4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21jOGVlZTE5ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21mMDY1NTk2N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21kOGZkYTE1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyMDAwODA3MTA5NTg2MzYxMzI0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAzNjE3NzYyNDY1ODU5NzY4OTgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAwMzk0NDIxNDY2MjAxMjY5MTExQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAyNjcxNzY0MTg2NzE1ODkyMDA2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxMDE5NDgzNzQ3MDA5NDQ1OTE1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2NDY5NzI4MzI1Njg3OTEwMTU0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE1MTAxNzc4NjM2NDQyNTMwNzUyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA0MjU3OTI3ODYxODgwNjIyNjY5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAwMDkwNDU2MTU4OTM4ODY3OTUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExOTM1NDEwNTgyMjM5NTMzMjUyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExOTUzOTQ0MzgxOTg1NjgyNTEzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA4NDY0MDA3Mzg1MzM0MTQ2MzgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2NzcxNjM4OTQyMDk4NzM4NjUxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExMTgxNjE1MDc5Nzg3ODcxMDg4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxNjg2ODE5MDQwOTY1NjAyODk2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA5NTc1MDExNzMyNzc0MDE2MTQ0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE3MzU0MTcyODMxNTc5NjYzMDQ5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA5OTI5ODExOTkxMDU1MjAxMjgyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAyOTUyNjExNjA3MTY3MTQ3ODM5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA3MjQyNDczMTA4MzU0NzAyMzY5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAyMTM0NjkwODA1NDA0Nzc3NjU3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2OTYxMTY0MTE5MjAwNDQ2NjQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTExNjY1NDg0MjQxMDU5MTM5NTU3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEwMzg1OTQ4MTc4NTc3NzgxODYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxODIzMjI3MjY1OTUzNjU3NTM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAyNzA2MjM0NTQ2NDcyNTM4OTY1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2Mjk0MzE5MzM3ODQ3MTUxNjU4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230047a8&color=%230047a8&color=%23007b83&color=%23202124&color=%230047a8&color=%230047a8&color=%2333B679&color=%23202124&color=%23137333&color=%237627bb&color=%237627bb&color=%23202124&color=%230047a8&color=%23202124&color=%23202124&color=%230047a8&color=%23c26401&color=%230047a8&color=%237627bb&color=%23c26401&color=%23007b83&color=%23202124&color=%23202124&color=%23202124&color=%230B8043&color=%230047a8&color=%230047a8&color=%237627bb&color=%23007b83&color=%23202124&color=%23202124&color=%23202124&color=%230047a8&color=%23137333"
                width="500"
                height="500"
                scrolling="no"
                style={{ marginLeft: "50px" }}
              ></iframe>

              
            </Grid>

            <Grid item xs={5}><br/>
              <p className="sanjay"
               style={{ fontSize: "30px", color: "yellow", fontFamily: "serif" }}
              ><br/>
                Feedback
              
            <br/>
             <Validation/></p>
             <br/>
          </Grid>
          </Grid>
          <p style={{ fontSize: "20px", fontFamily: "serif", color: "gold" }}>
            In addition to the uses shown below, about is used after some verbs,
            nouns, and adjectives to introduce extra information. About is also
            often used after verbs of movement, such as 'walk' and 'drive', and
            in phrasal verbs such as 'mess about' and 'set about', especially in
            English.
          </p>
          <br/>
          
          <a href="#About">
            <ExpandLessIcon style={{ fontSize: "40PX", color: "yellow" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
