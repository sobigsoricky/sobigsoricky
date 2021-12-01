import React, { useEffect, useState } from "react"
import { useStyles } from "./TopElements"
import img from ".../../../public/SubjectPlaceholder.svg"
import { Button, Title } from "../../globalStyles"
import { Link } from "react-router-dom"
import { onGetData } from "../../views/apicalling"
import CircularProgress from "@material-ui/core/CircularProgress"

function TopCourses() {
  const classes = useStyles()
  const [AllTopCoursesData, setAllTopCoursesData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    onGetData("api/user/course/getAllData")
      .then((res) => {
        if (res.data.error === false) {
          setAllTopCoursesData(res.data.data)

          setLoadingData(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className={classes.container}>
        <Title className={classes.leftline}>Top courses of all times</Title>
        <div className={classes.breakpoints}>
          <div className={classes.row}>
            {loadingData === true ? (
              <center>
                <CircularProgress />
              </center>
            ) : (
              AllTopCoursesData.map((coursecard) => {
                return (
                  <div className={classes.card}>
                    <img
                      className={classes.img}
                      src={coursecard.course_image_url}
                      alt='Course Card'
                    />
                  </div>
                )
              })
            )}
          </div>
        </div>
        <div className={classes.breakpoints}>
          <div className={classes.row}>
            {loadingData === true ? (
              <center>
                <CircularProgress />
              </center>
            ) : (
              AllTopCoursesData.map((coursecard) => {
                return (
                  <div className={classes.card}>
                    <img
                      className={classes.img}
                      src={coursecard.course_image_url}
                      alt='Course Card'
                    />
                  </div>
                )
              })
            )}
          </div>
        </div>

        <Link to='/topcourses'>
          <Button big>Browse top courses</Button>
        </Link>
      </div>
    </>
  )
}

export default TopCourses
