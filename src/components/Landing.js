import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./Projects";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    ...theme.typography.pageTitle,
  },
  pageSubtitleSans: {
    ...theme.typography.pageSubtitleSans,
    marginBottom: theme.spacing(2),
  },
  pageSubtitleSerif: {
    ...theme.typography.pageSubtitleSerif,
    marginBottom: theme.spacing(2),
  },
  categoryHeading: {
    ...theme.typography.categoryHeading,
    paddingBottom: theme.spacing(6),
  },
  textButton: {
    ...theme.typography.textButton,
    padding: theme.spacing(1, 2, 1, 0),
    minHeight: 0,
    minWidth: 0,
  },
  hashtag: {
    ...theme.typography.hashtag,
    padding: theme.spacing(0, 2, 2, 0),
    minHeight: 0,
    minWidth: 0,
    textTransform: "none",
  },
  headingContainer: {
    padding: theme.spacing(6, 0),
  },
  categoryContainer: {
    padding: theme.spacing(8, 0),
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid item container xs={12}>
        <Grid item container xs={12} className={classes.headingContainer}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              className={classes.pageTitle}
              gutterBottom
            >
              AMAL KHAN.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              className={classes.pageSubtitleSans}
              gutterBottom
            >
              SOFTWARE DEVELOPER
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              className={classes.pageSubtitleSerif}
              gutterBottom
            >
              I'm the Pakistani kid that didn't become a doctor - I went into
              computer science instead. When it comes to coding I'm no Mark
              Zuckerberg. But on the plus side that means I'll never steal your
              data and (allegedly) sell it to Russia.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.hashtag}>#FreePalestine</Button>
            <Button href="https://www.afrobiz.ca/" className={classes.hashtag}>
              #BLM
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              href="https://github.com/amalfkhan"
              className={classes.textButton}
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/amalfkhan/"
              className={classes.textButton}
            >
              LinkedIn
            </Button>
            <Button
              href={`mailto:amalfkhan@gmail.com`}
              className={classes.textButton}
            >
              Email
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item container xs={12} className={classes.categoryContainer}>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.categoryHeading}
            gutterBottom
          >
            Projects
          </Typography>
        </Grid>
        <Projects />
      </Grid>

      <Grid item>
        <Divider />
      </Grid>

      <Grid item container xs={12} className={classes.categoryContainer}>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.categoryHeading}
            gutterBottom
          >
            More About Me
          </Typography>
        </Grid>
        <About />
      </Grid>
    </Container>
  );
};

export default Landing;
