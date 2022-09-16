import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import pic16 from "./images/galary/my9.jpg";
import pic17 from "./images/galary/my4.jpg";
import pic18 from "./images/sivaa.jpg";
import pic19 from "./images/galary/my8.jpg";
import pic20 from "./images/my capture/san1.jpg";
import pic21 from "./images/my capture/san2.jpg";
import pic22 from "./images/my capture/san3.jpg";
import pic23 from "./images/galary/frd.jpg";
import pic24 from "./images/galary/frd1.jpg";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
function Gallary() {
  return (
    <div>
      <div id="body">
        <br />
        <div id="Image">
          <marquee>
            <br />
            <span
              style={{ color: "gold", fontSize: "40px ", fontFamily: "serif" }}
            >
              Image
            </span>
            <span
              style={{ color: "yellow", fontSize: "40px", fontFamily: "serif" }}
            >
              {" "}
              Gallary
            </span>
          </marquee>
          <br />
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "#ffffff",
              height: "2px;",
            }}
          />

          <Typography
            style={{ fontSize: "25px", fontFamily: "serif", color: "yellow" }}
          >
            {" "}
            My Photos
          </Typography>
          <br />
          <div>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <img src={pic16} width="250px" height="300px " alt="siva"  className="hover" />
            </Grid>

            <Grid item xs={3}>
              <img src={pic17} width="250px" height="300px " alt="siva" className="hover" />
            </Grid>
            <Grid item xs={3}>
              <img src={pic18} width="250px" height="300px " alt="siva"  className="hover"/>
            </Grid>
            <Grid item xs={3}>
              <img src={pic19} width="250px" height="300px " alt="siva" className="hover" />
            </Grid>
          </Grid>
          <br />

          <Typography
            style={{ fontSize: "25px", fontFamily: "serif", color: "yellow" }}
          >
            {" "}
            My Friends
          </Typography>
          <br />

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <img
                src={pic23}
                width="550px"
                height="400px "
                alt="siva"
                style={{ borderRadius: "20px" }}
                className="hover2"
              />
            </Grid>

            <Grid item xs={6}>
              <img
                src={pic24}
                width="550px"
                height="400px "
                alt="siva"
                style={{ borderRadius: "20px" }}
                className="hover2"
              />
            </Grid>
          </Grid>
          <br />
          <Typography
            style={{ fontSize: "25px", fontFamily: "serif", color: "yellow" }}
          >
            Favourite Pics
          </Typography>
          <br />
  
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                src={pic20}
                width="350px"
                height="300px "
                alt="siva"
                style={{ borderRadius: "10%" }}
                className="hover3"
              />
            </Grid>

            <Grid item xs={4}>
              <img
                src={pic21}
                width="350px"
                height="300px "
                alt="siva"
                style={{ borderRadius: "30%" }}
                className="hover3"
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src={pic22}
                width="350px"
                height="300px "
                alt="siva"
                style={{ borderRadius: "10%" }}
                className="hover3"
              />
            </Grid>
          </Grid>
          <br />
</div>
          <a href="#Image">
            <ExpandLessIcon style={{ fontSize: "50PX", color: "yellow" }} />
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Gallary;
