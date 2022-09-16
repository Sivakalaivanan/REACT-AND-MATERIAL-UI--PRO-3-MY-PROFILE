import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import pic25 from "./images/HORRY.png";
import pic26 from "./images/ramayanam.webp";
import pic27 from "./images/siva22.jpg";
import pic28 from "./images/favourite/fav7.jpg";
import DownloadForOfflineTwoToneIcon from "@mui/icons-material/DownloadForOfflineTwoTone";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Favourites() {
  return (
    <div>
      <div id="body">
        <br />
        <div id="Favourites">
          <marquee>
            <br />

            <span
              style={{
                color: "rgb(65, 214, 252)",
                fontSize: "40px",
                fontFamily: "serif",
              }}
            >
              My Favourites{" "}
            </span>
          </marquee>
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "#fdfdfc",
              height: "2px",
            }}
          />

          <Typography
            style={{ fontSize: "35px", fontFamily: "serif", color: "yellow" }}
          >
            Favourite Book
          </Typography>
          <br />

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <a href="images/favourite/horry.pdf">
      
                <img src={pic25} width="250px" height="200px " alt="siva" />
              </a>
            </Grid>

            <Grid item xs={8}>
              <Typography
                style={{ fontSize: "25px", fontFamily: "serif", color: "pink" }}
              >
                Harry botter is a series of seven fantasy novels written by
                British author J. K. Rowling. The novels chronicle the lives of
                a young wizard, Harry Potter, and his friends Hermione Granger
                and Ron Weasley, all of whom are students at Hogwarts School of
                Witchcraft and Wizardry.
              </Typography>
            </Grid>
          </Grid>
          <br />

          <Typography
            style={{ fontSize: "35px", fontFamily: "serif", color: "yellow" }}
          >
            Favourite Story
          </Typography>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Typography
                style={{ fontSize: "25px", fontFamily: "serif", color: "pink" }}
              >
                Harry botter is a series of seven fantasy novels written by
                British author J. K. Rowling. The novels chronicle the lives of
                a young wizard, Harry Potter, and his friends Hermione Granger
                and Ron Weasley, all of whom are students at Hogwarts School of
                Witchcraft and Wizardry.
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <a href="images/Favourites/ramayanam.pdf">

                <img
                  src={pic26}
                  width="250px"
                  height="200px "
                  alt="siva"
                  style={{ borderRadius: "50%" }}
                />
              </a>
            </Grid>
          </Grid>
          <br />

          <Typography
            style={{ fontSize: "35px", fontFamily: "serif", color: "yellow" }}
          >
            Favourite Song
          </Typography>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <img src={pic27} width="350px" height="200px " alt="siva" />
            </Grid>
            <br />

            <Grid item xs={8}>
              <Typography
                style={{ fontSize: "25px", fontFamily: "serif", color: "pink" }}
              >
                I am Unstoppable....
              </Typography>
              <br />
              <audio controls>
                <source src="audios/unstop.mpeg" type="audio/mpeg" />{" "}
                <a href="audios/unstop.mpeg" download>
                  <DownloadForOfflineTwoToneIcon style={{ fontsize: "40px" }} />
                </a>
              </audio>
            </Grid>
          </Grid>

          <br />
          <Typography
            style={{ fontSize: "35px", fontFamily: "serif", color: "yellow" }}
          >
            Favourite Person
          </Typography>
          <br />
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Typography
                style={{ fontSize: "25px", fontFamily: "serif", color: "pink" }}
              >
                Dhoniiiii finishes off in style. A magnificent strike into the
                crowd. India lift the World Cup after 28 years. The party's
                started in the dressing room. And it’s an Indian captain, who’s
                been absolutely magnificent, in the night of the final.’
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <a href="https://www.cricbuzz.com/profiles/265/ms-dhoni">
                {" "}
                <img src={pic28} width="250px" height="250px " alt="siva" />
              </a>
            </Grid>
          </Grid>
          <br />

          <a href="#Favourites">
            <ExpandLessIcon style={{ fontSize: "50PX", color: "yellow" }} />
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
export default Favourites;
