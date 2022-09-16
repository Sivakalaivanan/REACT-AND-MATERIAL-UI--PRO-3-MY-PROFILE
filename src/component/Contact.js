import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import pic11 from "./gif/siva4.gif";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Typography } from "@mui/material";

function Contact() {
  return (
    <div>
      <div id="body">
        <br />
        <br />
        <div id="contact">
          <span
            style={{
              color: "rgb(25, 233, 36)",
              fontSize: "50px",
              fontFamily: "serif",
              marginLeft: "20px",
            }}
          >
            Contact{" "}
          </span>
          <span
            style={{
              color: "rgb(221, 241, 33)",
              fontSize: "50px",
              fontFamily: "serif",
              marginLeft: "20px",
            }}
          >
            Me
          </span>
          <marquee>
            <Stack spacing={5} direction="row" style={{ marginLeft: "100px" }}>
              <Button variant="contained" style={{ color: "yellow" }}>
                Google Plus
              </Button>
              <Button variant="contained" style={{ color: "yellow" }}>
                App Store
              </Button>
              <Button variant="contained" style={{ color: "yellow" }}>
                Facebook
              </Button>
            <a href="#siva432001@gmail.com"><Button variant="contained" style={{ color: "yellow" }}>
                Gmail
              </Button></a>
              <Button variant="contained" style={{ color: "yellow" }}>
                Linked In
              </Button>
            </Stack>
          </marquee>
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "hsl(60, 100%, 100%)",
            }}
          />
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={pic11}
                alt="pic"
                width="500px"
                height="400px"
                className="img-info"
              />
            </Grid>
            <Grid item xs={6}>
              <p
                style={{
                  color: "rgb(247, 242, 242)",
                  fontFamily: "Arial, Helvetica, serif",
                }}
              >
                <h4>
                  {" "}
                  personal information includes any information about my
                  Facebook, imstagram,twitter,whatsapp,linked in anything else
                  that is collected,stored and communicated by schools or
                  technology vendors on behalf of schools that is particular to
                  that individual student.If you want to contact with me just
                  message me online social medias. And then you informed any
                  sutiuation for contact with an email.Send your mail for my
                  account.
                </h4>
              </p>
              <br />
              <br />
              <a href="https://www.facebook.com/siva.don.71271466">
                <FacebookIcon
                  style={{
                    fontSize: "30px",
                    color: "skyblue",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/siva_kalaivanan/">
                <InstagramIcon
                  style={{
                    fontSize: "30px",
                    color: "orange",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/siva-r-417a16222/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJpKXFKMUQs%2BNoayJPYcHaA%3D%3D">
                <LinkedInIcon
                  style={{ fontSize: "30px", color: "red", marginLeft: "20px" }}
                />{" "}
              </a>

              <a href="https://web.telegram.org/z/">
                <TelegramIcon
                  style={{
                    fontSize: "30px",
                    color: "skyblue",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <a href="https://twitter.com/home">
                <TwitterIcon
                  style={{ fontSize: "30px", color: "red", marginLeft: "20px" }}
                />
              </a>
              <a href="https://wa.me/qr/LIJYG44U55ZAF1">
                <WhatsAppIcon
                  style={{
                    fontSize: "30px",
                    color: "green",
                    marginLeft: "20px",
                  }}
                />
              </a>
              <br />
              <br />
              <br />

              <p
                style={{
                  color: "rgb(247, 242, 242)",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                <h4>
                  I think it should always be "contact me" as contact is a
                  transitive verb and should be followed by an object. But could
                  someone clarifies? Is "contact with me" correct usage in some
                  context.I think it should always be "contact me" as contact is
                  a transitive verb and should be followed by an object. But
                  could someone clarifies? Is "contact with me" correct usage in
                  some context.
                </h4>
              </p>

              <br />
            </Grid>
          </Grid>
          <br />
          <a style={{ color: "gold", fontSize: "15px" }}>
            <h2>My  Location</h2>
          </a>

          <br />
          <iframe style={{borderStyle:"inset",borderColor:"black",borderWidth:"3px"}}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15665.831395124425!2d76.99885565!3d11.00423425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1653551900143!5m2!1sen!2sin"
            width="98%"
            height="400"
            scrolling="no"
          ></iframe>
          <br />
          <br />
          <br />
          <Typography style={{ fontSize: "18px" }}>
            personal information includes any information about my Facebook,
            imstagram,twitter,whatsapp,linked in anything else that is
            collected,stored and communicated by schools or technology vendors
            on behalf of schools that is particular to that individual
            student.If you want to contact with me just message me online social
            medias. And then you informed any sutiuation for contact with an
            email.Send your mail for my account.I think it should always be
            "contact me" as contact is a transitive verb and should be followed
            by an object. But could someone clarifies? Is "contact with me"
            correct usage in some context.I think it should always be "contact
            me" as contact is a transitive verb and should be followed by an
            object.
          </Typography>
          <br />
          <br />
          <a href="#contact">
            <ExpandLessIcon style={{ fontSize: "40PX", color: "yellow" }} />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
export default Contact;
