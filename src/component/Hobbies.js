import React from "react";
import siva12 from "./images/siva21.jpg";
import siva13 from "./vedios/vedio1.mp4";
import siva14 from "./gif/cricket.webp";
import siva15 from "./images/logo5.png";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Hobbies() {
  return (
    <div>
      <div id="body">
        <div id="Hobbies">
          <marquee>
            <span
              style={{
                color: "rgb(40, 214, 245)",
                fontSize: "40px",
                fontFamily: "serif",
                color: "yellow",
              }}
            >
              {" "}
              Hobbies
            </span>
          </marquee>
          <br />
         
      
          <p style={{ color: "gold" }}>
            {" "}
            <h2>1.Playing Online Games</h2>
          </p>
          <p
            style={{
              fontFamily: " serif ",
              fontSize: "large",
              fontFamily: "serif",
            }}
          >
            An online game is a video game that is either partially or primarily
            played through the Internet or any other computer network available.
            Online games are ubiquitous on modern gaming platforms, including
            PCs, consoles and mobile devices,including first-person shooters,
            and massively multiplayer online role-playing games (MMORPG). In
            2019, revenue in the online games segment reached $16.9 billion,
            with $4.2 billion generated by China.[3]<br/>
            <video width="400" height="300" controls>
              <source src={siva13} type="video/webm" />
            </video>{" "}
          </p>
          
          <p style={{ color: "gold" }}>
            {" "}
            <h2> 2.Watch Crime Stories</h2>
          </p>
          <a class="img8">
            <img
              src={siva12}
              height="200px"
              width="200px"
              alt="siva"
              style={{
                borderRadius: "5%",
                border: "3px solid",
                padding: " 10px",
                boxShadow: "0 0 3px 1px #eed708ee",
              }}
            />
          </a>
          <br />
          <p
            style={{ fontFamily: "Arial, Helvetica, serif ", fontSize: "20px" }}
          >
            Crime fiction, detective story, murder mystery, mystery novel, and
            police novel are terms used to describe narratives that centre on
            criminal acts and especially on the investigation, either by an
            amateur or a professional detective, of a serious crime, generally a
            murder.
            <br />
            <br />
          </p>{" "}
          <br />
      
          <p style={{ color: "gold" }}>
            {" "}
            <h2> 3.Playing Cricket</h2>
          </p>
          <a class="img9">
            <img
              src={siva14}
              height="200px"
              width="200px"
              alt="siva"
              style={{
                borderRadius: "5%",
                border: "3px solid",
                padding: " 10px",
                boxShadow: "0 0 3px 1px #eed708ee",
              }}
            />
          </a>
          <br />
          <p
            style={{ fontFamily: "Arial, Helvetica, serif ", fontSize: "20px" }}
          >
            Cricket is a bat-and-ball game played between two teams of eleven
            players each on a field at the centre of which is a 22-yard
            (20-metre) pitch with a wicket at each end, each comprising two
            bails balanced on three stumps. The game proceeds when a player on
            the fielding team, called the bowler, "bowls" (propels) the ball
            from one end of the pitch towards the wicket at the other end, with
            an "over" being completed once they have legally done so six times.
            <br />
            <br />
          </p>{" "}
          <br />
  
          <p style={{ color: "gold" }}>
            {" "}
            <h2> 4.Searching Internet</h2>
          </p>
          <a class="img8">
            <img
              src={siva15}
              height="200px"
              width="200px"
              alt="siva"
              style={{
                borderRadius: "50%",
                border: "3px solid",
                padding: " 10px",
                boxShadow: "0 0 3px 1px #eed708ee",
              }}
            />
          </a>
          <br />
          <p
            style={{ fontFamily: "Arial, Helvetica, serif ", fontSize: "20px" }}
          >
            Internet is the foremost important tool and the prominent resource
            that is being used by almost every person across the globe. It
            connects millions of computers, webpages, websites, and servers.
            Using the internet we can send emails, photos, videos, messages to
            our loved ones. <br />
            <br />
          </p>{" "}
          <br />
          
          <a href="#Hobbies">
            <ExpandLessIcon style={{ fontSize: "50PX", color: "yellow" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
