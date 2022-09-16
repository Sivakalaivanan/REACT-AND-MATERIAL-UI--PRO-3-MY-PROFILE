import React from "react";
import Grid from "@mui/material/Grid";
import pic2 from "./images/my3.jpg";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pic3 from "./images/Education.jpg";
import pic4 from "./images/main1.jfif";
import pic5 from "./images/main2.webp";
import pic6 from "./images/MAIN4.jpg";
import pic7 from "./images/main.png";
import pic8 from "./images/main3.jfif";
import pic9 from "./images/main5.jfif";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default function Information() {
  return (
    <div>
      <div id="body">
        <div id="Information">
          <h2>
            <span
              style={{
                color: "gold",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "40px",
              }}
            >
              Personal{" "}
            </span>
            <span style={{ color: "rgb(182, 59, 155)", fontSize: "40px" }}>
              Information
            </span>
          </h2>
          <hr
            style={{
              width: "100%",
              textAlign: "left",
              marginLeft: "0",
              color: "hsl(60, 100%, 100%)",
              height: "2px",
            }}
          />

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <h2>Name &nbsp;&nbsp;:</h2>
              <br />
              <h2>Native &nbsp;&nbsp;:</h2>
              <br />
              <h2>Mobile &nbsp;&nbsp;:</h2>
              <br/>
              <h2>Language &nbsp;&nbsp;:</h2> 
              <br/>
              <h2>Skills &nbsp;&nbsp;:</h2>
              
            </Grid>
            <Grid item xs={3}>
              <h2>Siva R</h2>
              <br />
              <h2>Sivaganga</h2>
              <br />
              <h2>8270657156</h2>
              <br />
              <h2>English,Tamil</h2>
              <br/>
              <h2>Front End Developer</h2>
              
            </Grid>
            <Grid item xs={6}>
              <img
                src={pic2}
                alt="pic"
                width="500px"
                height="400px"
                
                className="hover4"
              />
            </Grid>
          </Grid>
          <Typography style={{ color: "yellow", fontSize: 20 }}>
            My personal information includes any information about
            myidentity,Education, medical conditions,skills,cources,native,
            hobbies,favourits anything else that is collected, stored, and
            communicated by schools or technology vendors on behalf of schools
            that is particular to that individual student.This includes name,
            address, names of parents or guardians, date of birth, grades,
            attendance, disciplinary records.
          </Typography>
          <br />
          <div>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, maxHeight: 300, marginLeft: 5,borderStyle:"double",borderColor:"gold",borderWidth:"8px"}}>
                  <CardActionArea>
                    <img src={pic3} width="300px" height="200px " />
                  </CardActionArea>
                  <CardActions>
                <a href="#Education"><Button size="small">
                      <h4 style={{ color: "black" ,backgroundColor:"yellow"}}>Read More</h4>
                    </Button></a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, maxHeight: 300, marginLeft: 5 ,borderStyle:"double",borderColor:"gold",borderWidth:"8px"}}>
                  <CardActionArea>
                    <img src={pic4} width="300px" height="200px " />
                  </CardActionArea>
                  <CardActions>
                  <a href="#Skills"> <Button size="small" style={{color:"yellow"}}>
                      <h4 style={{ color: "black" ,backgroundColor:"yellow" }}>Read More</h4>
                    </Button></a>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300, maxHeight: 300, marginLeft: 5,borderStyle:"double",borderColor:"gold",borderWidth:"8px" }}>
                  <CardActionArea>
                    <img src={pic5} width="300px" height="200px " />
                  </CardActionArea>
                  <CardActions>
                  <a href="#Image">   <Button size="small" color="primary">
                      <h4 style={{ color: "black" ,backgroundColor:"yellow" }}> Read More</h4>
                    </Button></a>
                  </CardActions>
                </Card>
              </Grid>

             
            </Grid>
            <br />
            <br />

            <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card sx={{ maxWidth: 350, maxHeight: 300, marginLeft: 15,borderStyle:"double",borderColor:"gold",borderWidth:"8px" }}>
                  <CardActionArea>
                    <img src={pic7} width="350px" height="200px " />
                  </CardActionArea>
                  <CardActions>
                  <a href="#Favourites"> <Button size="small" color="primary">
                      <h4 style={{ color: "black" ,backgroundColor:"yellow" }}>Read More</h4>
                    </Button></a>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card sx={{ maxWidth: 350, maxHeight: 300, marginLeft: 15 ,borderStyle:"double",borderColor:"gold",borderWidth:"8px"}}>
                  <CardActionArea>
                    <img src={pic9} width="350px" height="200px " />
                  </CardActionArea>
                  <CardActions>
                  <a href="#Hobbies">    <Button size="small" color="primary">
                      <h4 style={{ color: "black" ,backgroundColor:"yellow" }}>Read More</h4>
                    </Button></a>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
          <br />
          <a href="#Information">
            <ExpandLessIcon style={{ fontSize: "50PX", color: "yellow" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
