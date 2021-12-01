import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { Button } from "../../globalStyles"
import { onGetData } from "../../views/apicalling"
import { useStyles } from "./BysubjectElement"
import { Title } from "../../globalStyles"
import CircularProgress from "@material-ui/core/CircularProgress"

function BySubject() {
  const classes = useStyles()
  const [AllSubjectsData, setAllSubjectsData] = useState([])
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    onGetData("api/user/subject/getAllData")
      .then((res) => {
        if (res.data.error == false) {
          setAllSubjectsData(res.data.data)
          setLoadingData(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <Title className={classes.leftline}>Browse by Subjects</Title>
      <div className={classes.card}>
        <Grid container className={classes.ullist}>
          {loadingData === true ? (
            <Grid item md={12} sm={12} xs={12}>
              <center>
                <CircularProgress />
              </center>
            </Grid>
          ) : (
            AllSubjectsData.map((x, y) => {
              return (
                <Grid item md={3} sm={6} xs={12} key={y}>
                  <p className={classes.lilist}>
                    <img
                      src={x.image_path}
                      alt={x.name}
                      key={y}
                      id={y}
                      className={classes.img}
                      width='20'
                      height='20'
                    />
                    <Link to={`/course/${x.slug}`} className={classes.lista}>
                      {x.name}
                    </Link>
                  </p>
                </Grid>
              )
            })
          )}
        </Grid>

        {/* <ul className={classes.ullist}>
                        {images.map(({ id, src, name, alt, to }) =>
                            <li className={classes.lilist}>
                                <img src={src} alt={alt} id={id} className={classes.img} width="20" height="20" />
                                <Link className={classes.lista} to={to}>{name}</Link></li>

                        )}




                    </ul> */}
      </div>
      <Link to='/catalog' className={classes.container}>
        <Button big>Browse all Subjects</Button>
      </Link>
    </>
  )
}

export default BySubject
