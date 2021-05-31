import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import projectData from "../data/projectData";
import Project from "./Project";
import newyorkbites from "../assets/new-york-bites.png";
import mymotherskitchen from "../assets/my-mothers-kitchen.png";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: theme.spacing(8, 0),
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgCard: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    marginBottom: theme.spacing(5),
  },
  textCard: {
    borderRadius: 0,
    marginBottom: theme.spacing(10),
  },
  cardContent: {
    padding: theme.spacing(2, 5, 5, 5),
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item container className={classes.heading}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h2" gutterBottom>
              Amal Khan.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h5" gutterBottom>
              Lorem ipsum dolor sit amet
            </Typography>
          </Grid>
        </Grid>

        {/* {projectData.map((project, index) => (
          <Project project={project} key={index} />
        ))} */}

        <Grid item xs={12}>
          <Card className={classes.imgCard} elevation={0}>
            <CardMedia>
              <img src={newyorkbites} className={classes.img} />
            </CardMedia>
          </Card>
          <Card className={classes.textCard} elevation={0}>
            <CardContent className={classes.cardContent}>
              <Grid item container spacing={4} alignItems="top">
                <Grid item xs={12} sm={4}>
                  <Typography component="h3" variant="h6">
                    New York Bites
                  </Typography>
                  <Button>GitHub</Button>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="p" variant="body1" gutterBottom>
                    An application for users to post reviews on restaurants in
                    New York.
                  </Typography>
                  <Typography component="p" variant="body1">
                    Tools: React/JavaScript, Node.js/Express, mongoDB
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.imgCard} elevation={0}>
            <CardMedia>
              <img src={mymotherskitchen} className={classes.img} />
            </CardMedia>
          </Card>
          <Card className={classes.textCard} elevation={0}>
            <CardContent className={classes.cardContent}>
              <Grid item container spacing={4} alignItems="top">
                <Grid item xs={12} sm={3}>
                  <Typography component="h3" variant="h6">
                    My Mother's Kitchen
                  </Typography>
                  <Button>GitHub</Button>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography component="p" variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.imgCard} elevation={0}>
            <CardMedia>
              <img src={yahtzee} className={classes.img} />
            </CardMedia>
          </Card>
          <Card className={classes.textCard} elevation={0}>
            <CardContent className={classes.cardContent}>
              <Grid item container spacing={4} alignItems="top">
                <Grid item xs={12} sm={4}>
                  <Typography component="h3" variant="h6">
                    Yahtzee
                  </Typography>
                  <Button>GitHub</Button>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="p" variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
