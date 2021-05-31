import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import newyorkbites from "../assets/new-york-bites.png";
import mymotherskitchen from "../assets/my-mothers-kitchen.png";

const useStyles = makeStyles((theme) => ({
  categorySubHeading: {
    ...theme.typography.categorySubHeading,
  },
  paragraph: {
    ...theme.typography.paragraph,
    marginBottom: theme.spacing(2),
  },
  altParagraph: {
    ...theme.typography.altParagraph,
  },
  textButton: {
    ...theme.typography.textButton,
    padding: theme.spacing(1, 0),
    minHeight: 0,
    minWidth: 0,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgCard: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  },
  cardContainer: {
    marginBottom: theme.spacing(10),
  },
  cardContent: {
    padding: theme.spacing(0),
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.cardContainer} elevation={0}>
          <CardContent className={classes.cardContent}>
            <Grid item container spacing={4} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Card className={classes.imgCard} elevation={0}>
                  <CardMedia>
                    <img src={newyorkbites} className={classes.img} />
                  </CardMedia>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  className={classes.categorySubHeading}
                >
                  New York Bites
                </Typography>
                <Button className={classes.textButton}>GitHub</Button>
                <Typography
                  component="p"
                  className={classes.paragraph}
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography component="p" className={classes.altParagraph}>
                  Tools: React/JavaScript, Node.js/Express, mongoDB
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.textCard} elevation={0}>
          <CardContent className={classes.cardContent}>
            <Grid item container spacing={4} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  className={classes.categorySubHeading}
                >
                  My Mother's Kitchen
                </Typography>
                <Button className={classes.textButton}>GitHub</Button>
                <Typography
                  component="p"
                  className={classes.paragraph}
                  gutterBottom
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography component="p" className={classes.altParagraph}>
                  Tools: React/JavaScript, Node.js/Express, mongoDB
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className={classes.imgCard} elevation={0}>
                  <CardMedia>
                    <img src={mymotherskitchen} className={classes.img} />
                  </CardMedia>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
