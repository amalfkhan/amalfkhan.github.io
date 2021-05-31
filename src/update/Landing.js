import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "./Projects";

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
  heading: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  category: {
    margin: theme.spacing(4, 0, 6, 0),
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid item container xs={12}>
        <Grid item container xs={8} className={classes.heading}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              className={classes.pageSubtitleSerif}
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <Typography component="h2" className={classes.hashtag} gutterBottom>
              #FreePalestine #BLM
            </Typography> */}
            <Button className={classes.hashtag}>#FreePalestine</Button>
            <Button className={classes.hashtag}>#BLM</Button>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.textButton}>GitHub</Button>
            <Button className={classes.textButton}>LinkedIn</Button>
            <Button className={classes.textButton}>Resume</Button>
          </Grid>
        </Grid>

        <Grid item container xs={4} className={classes.heading}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              className={classes.pageSubtitleSans}
              gutterBottom
            >
              //Image?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} className={classes.category}>
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
    </Container>
  );
};

export default Landing;
