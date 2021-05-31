import React from "react";
import Hidden from "@material-ui/core/Hidden";
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
  cardContent: {
    padding: theme.spacing(0),
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Card elevation={0}>
          <CardContent className={classes.cardContent}>
            <Grid item container alignItems="center" spacing={8}>
              <Hidden xsDown>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.imgCard} elevation={0}>
                    <CardMedia>
                      <img src={newyorkbites} className={classes.img} />
                    </CardMedia>
                  </Card>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  className={classes.categorySubHeading}
                >
                  New York Bites
                </Typography>
                <Button
                  href="https://github.com/amalfkhan/new-york-bites"
                  className={classes.textButton}
                >
                  GitHub
                </Button>
                <Typography
                  component="p"
                  className={classes.paragraph}
                  gutterBottom
                >
                  A web-app that allows users to search and view reviews for
                  restaurants throughout New York. Users can also register for
                  an account to add, edit, and delete their own reviews. I built
                  this project to familiarize myself with mongoDB and learn more
                  about project structure when building apis.
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
        <Card elevation={0}>
          <CardContent className={classes.cardContent}>
            <Grid item container alignItems="center" spacing={8}>
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  className={classes.categorySubHeading}
                >
                  My Mother's Kitchen
                </Typography>
                <Button
                  href="https://github.com/amalfkhan/my-mothers-kitchen"
                  className={classes.textButton}
                >
                  GitHub
                </Button>
                <Typography
                  component="p"
                  className={classes.paragraph}
                  gutterBottom
                >
                  A web-app that acts as a searchable database of my mother's
                  recipes. Users can access an intuitive grocery list based on
                  their saved recipes. I built this app so I no longer had to
                  pester my mother whenever I was trying to make one of her
                  recipes.
                </Typography>
                <Typography component="p" className={classes.altParagraph}>
                  Current Tools: React/JavaScript <br />
                  Adding: Node.js/Express, mongoDB/mongoose
                </Typography>
              </Grid>
              <Hidden xsDown>
                <Grid item xs={12} sm={6}>
                  <Card className={classes.imgCard} elevation={0}>
                    <CardMedia>
                      <img src={mymotherskitchen} className={classes.img} />
                    </CardMedia>
                  </Card>
                </Grid>
              </Hidden>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
