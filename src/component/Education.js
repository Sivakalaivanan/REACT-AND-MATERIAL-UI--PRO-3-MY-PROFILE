import React from "react";
import pic6 from "./images/college.png";
import pic7 from "./images/edu2.jfif";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Education() {
  return (
    <>
      <div id="body">
        <div id="Education">
          <marquee>
            <span
              style={{
                color: "gold",
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontSize: "40px",
              }}
            >
              Education{" "}
            </span>
            <span
              style={{
                color: "rgb(221, 50, 184)",
                fontSize: "40px",
                fontFamily: "serif",
              }}
            >
              {" "}
              Details
            </span>
            <br />
          </marquee>
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
          <span
            style={{
              color: "rgb(37, 204, 37)",
              fontSize: "40px",
              fontFamily: "serif",
            }}
          >
            {" "}
            Click my school,college photos we can see more details
          </span>{" "}
          <br />
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "#fffffd",
              height: "2px",
            }}
          />
          <h1 style={{ fontFamily: "serif", color: "gold" }}>
            O.V.C Higher Secondary School,Manamadurai,Sivaganga-630606
          </h1>
          <br />
          <a href="https://www.justdial.com/Sivaganga/OVC-Higher-Secondary-School-Manamadurai-Sivaganga/9999P4575-4575-180101062359-W1A9_BZDET/photos">
            <img
              src={pic7}
              width="400px"
              ALT="AVATAR"
              height="200px"
              style={{
                borderRadius: "5%",
                border: "5px solid",
                padding: "10px",
                boxShadow: "0 0 3px 1px #eed708ee",
              }}
            />
          </a>
          <a style={{ color: "rgb(70, 224, 252)" }}>
            <h1> Welcome to OVC</h1>
          </a>
          <p
            className="justify"
            style={{ fontSize: "18px", fontFamily: "serif" }}
          >
            <b>
              O.V.C.HIGHER SECONDARY.SCHOOL,MANAMADURAI was established in 1941
              and it is managed by the Pvt. Aided. It is located in Urban area.
              It is located in MANAMADURAI block of SIVAGANGA district of Tamil
              Nadu. T he school consists of Grades from 1 to 5. The school is
              Co-educational and it doesn't have an attached pre-primary
              section. The school is N/A in nature and is not using school
              building as a shift-school.
            </b>
          </p>
          <table
            style={{ textAlign: "center", alignItems: "center", width: "100%" }}
          >
            <tr
              style={{ color: "GOLD", fontSize: "25px", fontFamily: "serif" }}
            >
              <th>School</th>
              <th>Standered</th>
              <th>Marks</th>
              <th>Percentage</th>
              <th>Year</th>
            </tr>
            <tr style={{ color: "WHITE", fontSize: "20px" }}>
              <td>O.V.C.Hr.Sec.School</td>
              <td>10TH</td>
              <td>436</td>
              <td>87%</td>
              <td>2016</td>
            </tr>
            <tr style={{ color: "WHITE", fontSize: "20px" }}>
              <td>O.V.C Hr.Sec.School</td>
              <td>12TH</td>
              <td>897</td>
              <td>75%</td>
              <td>2018</td>
            </tr>
          </table>
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "#fafaf6",
              height: "2px",
            }}
          />
          <h1 style={{ fontFamily: "serif", color: "gold" }}>
            Christ the King Engineering College,Karamadai,Coimbatore-641104.
          </h1>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjR3r7csvf3AhVHRmwGHdEfChgQjBB6BAgTEAE&url=https%3A%2F%2Fwww.ckec.ac.in%2Fprofile.php&usg=AOvVaw2GTYiFQuTmpo2bLLIwrXEH">
            <img
              src={pic6}
              width="400px"
              alt="avatar"
              height="200px"
              style={{
                borderRadius: "5%",
                border: "6px solid",
                padding: "10px",
                boxShadow: "0 0 3px 1px #eed708ee",
              }}
            />
          </a>
          <a style={{ color: "rgb(83, 201, 236)" }}>
            <h1> Welcome to CKEC</h1>
          </a>
          <p
            className="justify"
            style={{ fontSize: "18px", fontFamily: "serif" }}
          >
            <b>
              This college has been established by Rev.Fr.Dr.J.E.Arulraj, MMI
              and managed by DMI Sisters. This is approved by the Government of
              Tamilnadu and recognized by AICTE, affiliated to Anna University,
              Chennai. DMI is known for its time-honorable tradition of
              imparting quality education to the society and rendering social
              service without discrimination.
            </b>
          </p>
          <br />
          <table style={{ width: "100%" }}>
            <tr
              style={{ color: "gold", fontFamily: "serif", fontSize: "20PX" }}
            >
              <th>College</th>
              <th>Percentage</th>
              <th>Year</th>
            </tr>
            <tr style={{ color: "white", fontSize: "20PX" }}>
              <td>CHRIST THE KING ENGINEERING COLLEGE</td>
              <td>76%</td>
              <td>2022</td>
            </tr>
          </table>
          <br />
          <a href="#Education">
            <ExpandLessIcon style={{ fontSize: "50PX", color: "yellow" }} />
          </a>
        </div>
      </div>
    </>
  );
}
export default Education;
