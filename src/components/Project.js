import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import mymotherskitchen from "../assets/my-mothers-kitchen.png";

const useStyles = makeStyles((theme) => ({
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

const Project = ({ project }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.imgCard} elevation={0}>
        <CardMedia>
          <img src={mymotherskitchen} className={classes.img} />
        </CardMedia>
      </Card>
      <Card className={classes.textCard} elevation={0}>
        <CardContent className={classes.cardContent}>
          <Grid item container spacing={4} alignItems="top">
            <Grid item xs={12} sm={4}>
              <Typography component="h3" variant="h6">
                {project.name}
              </Typography>
              <Button href={project.github}>GitHub</Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography component="p" variant="body1">
                {project.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Project;
