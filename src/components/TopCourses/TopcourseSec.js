import React, { useEffect, useState } from "react"
import { useStyles } from "./TopElements"
import img from ".../../../public/SubjectPlaceholder.svg"
import { Link } from "react-router-dom"

import { Grid } from "@material-ui/core"
import { Button, Title } from "../../globalStyles"
import { onGetData } from "../../views/apicalling"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Icon } from "@iconify/react"
import universityIcon from "@iconify/icons-fa/university"
import barChartLine from "@iconify/icons-bi/bar-chart-line"
import TopCourseCard from "./Topcoursecard"
function TopcourseSec() {
  const classes = useStyles()
  const [AllTopCoursesData, setAllTopCoursesData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    onGetData("api/user/course/getAllTopCoursesData/8/0")
      .then((res) => {
        if (res.data.error == false) {
          console.log(res.data.data)
          setAllTopCoursesData(res.data.data)
          setLoadingData(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(AllTopCoursesData)
  return (
    <>
      <Title className={classes.leftline}>Top courses of all times</Title>
      <div className={classes.container}>
        <Grid container spacing={2}>
          {loadingData === true ? (
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              className={classes.gridcontainer}
            >
              <center>
                <CircularProgress />
              </center>
            </Grid>
          ) : (
            AllTopCoursesData.map((coursecard) => {
              return <TopCourseCard data={coursecard} />
            })
          )}
        </Grid>
        <Link to='/topcourses'>
          <Button big>Browse top courses</Button>
        </Link>
      </div>
    </>
  )
}

export default TopcourseSec
