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
      <Grid item xs={12} sm={4}>
        <Typography component="h3" className={classes.categorySubHeading}>
          Listening to...
        </Typography>
        <Button className={classes.textButton}>GitHub</Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography component="p" className={classes.altParagraph}>
          Tools: React/JavaScript, Node.js/Express, mongoDB
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography component="h3" className={classes.categorySubHeading}>
          Watching
        </Typography>
        <Button className={classes.textButton}>GitHub</Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography component="p" className={classes.altParagraph}>
          Tools: React/JavaScript, Node.js/Express, mongoDB
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography component="h3" className={classes.categorySubHeading}>
          Learning
        </Typography>
        <Button className={classes.textButton}>GitHub</Button>
        <Typography component="p" className={classes.paragraph} gutterBottom>
          I'm perpetually worried about being hungry, so I'm always the one with
          food. So worried infact that I dream of having pet chickens so I never
          run out of eggs (cleary not vegan). I love bring my quizzical ideas to
          life. Overtime that's come in the form of making pottery, sewing my
          own hiking gear, and ... Lastly, I hope to one day have pet chickens
          in my backyard.
        </Typography>
        <Typography component="p" className={classes.altParagraph}>
          Tools: React/JavaScript, Node.js/Express, mongoDB
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
