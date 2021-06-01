import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  categorySubHeading: {
    ...theme.typography.categorySubHeading,
  },
  paragraph: {
    ...theme.typography.paragraph,
    paddingBottom: theme.spacing(1),
  },
  altParagraph: {
    ...theme.typography.altParagraph,
  },
  textButton: {
    ...theme.typography.textButton,
    padding: theme.spacing(0),
    minHeight: 0,
    minWidth: 0,
    fontSize: 12,
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
      <Grid item xs={12} sm={4}>
        <Typography
          component="h3"
          className={classes.categorySubHeading}
          gutterBottom
        >
          Favorite listens
        </Typography>

        <Button
          href="https://thehoneydewpodcast.com/"
          target="_blank"
          className={classes.textButton}
        >
          The HoneyDew
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Ryan Sickler's comedy podcast
        </Typography>

        <Button
          href="https://missedapexpodcast.com/"
          target="_blank"
          className={classes.textButton}
        >
          Missed Apex
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Formula 1 commentary podcast
        </Typography>

        <Button
          href="https://www.youtube.com/watch?v=e84E1yGQMyk"
          target="_blank"
          className={classes.textButton}
        >
          The Poet
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Bobby Womack soul album
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          component="h3"
          className={classes.categorySubHeading}
          gutterBottom
        >
          Always watching
        </Typography>

        <Button
          href="https://www.formula1.com/"
          target="_blank"
          className={classes.textButton}
        >
          Formula 1
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          I like watching fast cars go in circles
        </Typography>

        <Button
          href="https://www.bbc.co.uk/programmes/b006mywy"
          target="_blank"
          className={classes.textButton}
        >
          Planet Earth
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          BBC's breathtaking documentry series
        </Typography>

        <Button
          href="https://www.youtube.com/watch?v=XK7T3mY1V-w"
          target="_blank"
          className={classes.textButton}
        >
          Dev Ed
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Great web-dev design tutorials
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography
          component="h3"
          className={classes.categorySubHeading}
          gutterBottom
        >
          Trying out
        </Typography>

        <Button
          href="https://www.reddit.com/r/myog/"
          target="_blank"
          className={classes.textButton}
        >
          MYOG
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Making my my own hiking gear
        </Typography>

        <Button
          href="https://www.trailforks.com/region/victoria/"
          target="_blank"
          className={classes.textButton}
        >
          Trailforks
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Reacquainting myself with cycling
        </Typography>

        <Button
          href="https://firefox-source-docs.mozilla.org/setup/getting_set_up.html"
          target="_blank"
          className={classes.textButton}
        >
          Firefox
        </Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Working on open source projects
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
