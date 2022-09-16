import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
function Footer() {
  return (
    <div>
      <div id="body">
        <div id="footer">
          <p
            style={{
              color: "rgb(24, 253, 253)",
              fontFamily: "serif",
              fontSize: "30px",
            }}
          >
            Designed by a
          </p>
          <a href="https://www.facebook.com/siva.don.71271466">
            <FacebookIcon
              style={{ fontSize: "30px", color: "skyblue", marginLeft: "20px" }}
            />
          </a>
          <a href="https://www.instagram.com/siva_kalaivanan/">
            <InstagramIcon
              style={{ fontSize: "30px", color: "orange", marginLeft: "20px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/siva-r-417a16222/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJpKXFKMUQs%2BNoayJPYcHaA%3D%3D">
            <LinkedInIcon
              style={{ fontSize: "30px", color: "pink", marginLeft: "20px" }}
            />{" "}
          </a>
          <a style={{ color: "gold", fontSize: "30px", fontFamily: "serif" }}>
            ....Siva....
          </a>
          <a href="https://web.telegram.org/z/">
            <TelegramIcon
              style={{ fontSize: "30px", color: "skyblue", marginLeft: "20px" }}
            />
          </a>
          <a href="https://twitter.com/home">
            <TwitterIcon
              style={{ fontSize: "30px", color: "red", marginLeft: "20px" }}
            />
          </a>
          <a href="https://wa.me/qr/LIJYG44U55ZAF1">
            <WhatsAppIcon
              style={{ fontSize: "30px", color: "green", marginLeft: "20px" }}
            />
          </a>
          <br />
          <a href="#body">
            <ExpandLessIcon style={{ fontSize: "40PX", color: "yellow" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
