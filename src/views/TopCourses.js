import { Title } from "../globalStyles"
import React, { useEffect, useState } from "react"
import { NavbarOther, CourseCard } from "../components"
import { makeStyles, Typography } from "@material-ui/core"
import { Styles } from "../assets/jss/Styles"
import clsx from "clsx"
import { onGetData } from "./apicalling"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Newfooter, Offerads } from "../components"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  typography: {
    marginBottom: "20px",
  },
}))

function TopCourses() {
  const classes = Styles()
  const styles = useStyles()
  const [AllCourseData, setAllCourseData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    onGetData("api/user/course/getAllTopCoursesData/100/0")
      .then((res1) => {
        console.log(res1.data)
        setAllCourseData(res1.data.data)
        setLoadingData(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <NavbarOther />
      <div className={classes.container}>
        <div className={styles.root}>
          <Title> Top Courses </Title>
          <Typography className={clsx(classes.typography, styles.typography)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis non urna vel feugiat. Sed lectus ante, placerat et nibh
            vitae, faucibus dapibus justo.
          </Typography>
          <div className={classes.coursecard}>
            <div>
              {loadingData === true ? (
                <center>
                  <CircularProgress />
                </center>
              ) : (
                AllCourseData.map((coursecard) => {
                  return <CourseCard data={coursecard} />
                })
              )}
              {/* {[...Array(10)].map(coursecard => {
            return <CourseCard />
            })}  */}
            </div>
          </div>
        </div>
      </div>
      <Newfooter />
      <Offerads />
    </>
  )
}

export default TopCourses
