import React from "react"
import {
  CardSection,
  CardWrapper,
  CardTitle,
  CardContainer,
  Card,
  CardInfo,
  CardIcon,
  CardText,
  Telescope,
  Share,
  Target,
} from "./CardElements"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  cardsection: {
    justifyContent: "space-evenly !important",
    margin: "0 2%",
  },
}))

function Cards() {
  const classes = useStyles()

  return (
    <CardSection className={classes.cardsection}>
      <>
        <Card to='/catalog' className={classes.card}>
          <CardInfo>
            <CardIcon>
              <Telescope />
            </CardIcon>
            <CardTitle>Discover</CardTitle>
            <CardText>
              Browse from our best-reviewed list of courses. Thousands of
              courses are added and updated every day.
            </CardText>
          </CardInfo>
        </Card>
        <Card to='/whataretracks' className={classes.card}>
          <CardInfo>
            <CardIcon>
              <Target />
            </CardIcon>
            <CardTitle>Tracks</CardTitle>
            <CardText>
              Create your own custom learning paths, share paths with others,
              follow expert-recommended tracks.
            </CardText>
          </CardInfo>
        </Card>
        <Card to='/' className={classes.card}>
          <CardInfo>
            <CardIcon>
              <Share />
            </CardIcon>
            <CardTitle>Share</CardTitle>
            <CardText>
              Add and Share your achievements, Top courses lists, Individual
              courses with others.
            </CardText>
          </CardInfo>
        </Card>
      </>
    </CardSection>
  )
}
export default Cards
