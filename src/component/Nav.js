import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
function Nav() {
  return (
    <div className="active fixed-top" >
      <ul style={{marginTop:"0"}}>
        <br />
        <li>
          <a href="#body" style={{ fontSize: "20px", fontFamily: "serif" }}>
            <HomeIcon style={{ fontSize: 35, marginLeft: 10, color: "gold" }} />{" "}
            Home
          </a>
        </li>

        <li className="dropdown">
          <a
            href="#Information"
            className="drobtn"
            style={{ fontSize: "20px", fontFamily: "serif" }}
          >
            <PermIdentitySharpIcon
              style={{ fontSize: 30, marginLeft: 25, color: "gold" }}
            />
            Information
          </a>
          <div className="dropdown-content">
            <a href="#Education">
            
              <h2>Education</h2>
            </a>
            <a href="#Skills">
              <h2> Skills</h2>
            </a>
            <a href="#Hobbies">
              <h2>Hobbies</h2>
            </a>
            <a href="#Favourites">
              <h2> Favourites</h2>
            </a>
          </div>
        </li>
        <li>
          <a href="#Image" style={{ fontSize: "20px", fontFamily: "serif" }}>
            <PhotoCameraFrontOutlinedIcon
              style={{ fontSize: 25, marginLeft: 20, color: "gold" }}
            />
            Image Gallary
          </a>
        </li>

        <li className="dropdown">
          <a
            href="#contact"
            className="drobtn"
            style={{ fontSize: "20px", fontFamily: "serif" }}
          >
            <ImportContactsIcon
              style={{ fontSize: 25, marginLeft: 25, color: "gold" }}
            />
            Contact Me
          </a>
          <div className="dropdown-content">
            <a href="https://www.instagram.com/siva_kalaivanan/">
              <h2> Instagram</h2>
            </a>
            <a href="https://www.facebook.com/siva.don.71271466">
              <h2>Facebook</h2>
            </a>
            
            <a href="https://wa.me/qr/LIJYG44U55ZAF1">
              <h2> Whatsapp</h2>
            </a>
            
            <a href="https://www.linkedin.com/in/siva-r-417a16222/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJpKXFKMUQs%2BNoayJPYcHaA%3D%3D">
              <h2>Linked In</h2>
            </a>
          </div>
        </li>

        <li>
          <a href="#About" style={{ fontSize: "20px", fontFamily: "serif" }}>
            <InfoOutlinedIcon
              style={{ fontSize: 25, marginLeft: 25, color: "gold" }}
            />
            About Me
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
