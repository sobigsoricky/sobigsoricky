import React, { useEffect, useState } from "react";
import { useStyles } from "./TopElements";
import img from ".../../../public/SubjectPlaceholder.svg";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { Button, Title } from "../../globalStyles";
import { onGetData } from "../../views/apicalling";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Icon } from "@iconify/react";
import universityIcon from "@iconify/icons-fa/university";
import barChartLine from "@iconify/icons-bi/bar-chart-line";

function TopCourseCard(props) {
  const classes = useStyles();
  const [AllTopCoursesData, setAllTopCoursesData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [coursecard, setcoursecard] = useState(props.data)
  const [imgLoad, seImgLoad] = useState(false);


  return (
    <>
      <Grid
        item
        md={3}
        sm={4}
        xs={12}
        className={classes.gridcontainer}
      >
        <div className={classes.card}>
          <Link to={`/product/${coursecard.course_slug}`}>
            <img
              style={imgLoad ? {} : { display: "none" }}
              onLoad={() => seImgLoad(true)}
              src={coursecard.course_image_url}
              className={classes.img}
              alt="course"
            />
            <img
              style={imgLoad == false ? {} : { display: "none" }}
              src={coursecard.providerName[0].image_path}
              className={classes.img}
              alt="course"
            />
            {/* <img
                        className={classes.img}
                        src={coursecard.course_image_url}
                        alt="Course Card"
                      /> */}
          </Link>
          <div className={classes.detail}>
            <h4 className={classes.detailtitle}>
              <Link to={`/product/${coursecard.course_slug}`}>
                {coursecard.course_name}
              </Link>
            </h4>
            <p className={classes.university}>
              <div className={classes.icon}>
                <Icon icon={universityIcon} />
              </div>
              {coursecard.universityName[0].name}
            </p>
            <p className={classes.level}>
              <div className={classes.icon}>
                <Icon icon={barChartLine} />
              </div>
              Level :{coursecard.course_level}
            </p>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default TopCourseCard;
