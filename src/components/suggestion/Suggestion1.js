import { convertToSlug } from "../../views/apicalling";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Searchrating from "../StarRating/Searchrating";
import ReactLoading from "react-loading";

function Suggestion(props) {
  const classes = props.classes;

  const options =
    props.courseData.length > 0
      ? props.courseData.map((r) => (
          <>
            <Link to={`/product/${convertToSlug(r.name)}`}>
              <li key={r.id} className={classes.suggestionli}>
                <div className={classes.suggestionleft}>
                  <p className={classes.suggestionname}>{r.name}</p>
                  {/* <p className={classes.suggestionuniversity}>{r.provider}</p> */}
                </div>
                <div className={classes.suggestionright}>
                  <p className={classes.suggestionprovider}>{r.provider}</p>
                  {/* {props.search == 'navsearch' ? ' ' : <p className={classes.suggestionrating}>{parseFloat(r.rating)}</p>} */}
                  <Searchrating rating={parseFloat(1)} />
                </div>
              </li>
            </Link>
            <hr />
          </>
        ))
      : "";

  return (
    <>
      {props.isOpen ? null : (
        <>
          <ul className={classes.suggestionul}>
            {Boolean(props.subFilter) && (
              <>
                <Link to={`/course/${convertToSlug(props.subFilter.subject)}`}>
                  <li key={1} className={classes.suggestionli}>
                    <div className={classes.suggestionleft}>
                      <p className={classes.suggestionname}>
                        {props.filterData.provider.name}
                      </p>
                      <p className={classes.suggestionuniversity}>
                        Total Courses : {props.filterData.provider.totalCources}{" "}
                        Total Subject : {props.filterData.subject} Total Sub
                        Subject : {props.filterData.subSubject}
                      </p>
                    </div>
                  </li>
                </Link>
                <hr />
              </>
            )}
            {props.filterData.provider && (
              <>
                <Link
                  to={`/provider-list/${convertToSlug(
                    props.filterData.provider.name
                  )}`}
                >
                  <li key={1} className={classes.suggestionli}>
                    <div className={classes.suggestionleft}>
                      <p className={classes.suggestionname}>
                        {props.filterData.provider.name}
                      </p>
                      <p className={classes.suggestionuniversity}>
                        Total Courses : {props.filterData.provider.totalCources}{" "}
                        Total Subject : {props.filterData.subject} Total Sub
                        Subject : {props.filterData.subSubject}
                      </p>
                    </div>
                  </li>
                </Link>
                <hr />
              </>
            )}
            {props.filterData.institute && (
              <>
                <Link
                  to={`/university-list/${convertToSlug(
                    props.filterData.institute.name
                  )}`}
                >
                  <li key={1} className={classes.suggestionli}>
                    <div className={classes.suggestionleft}>
                      <p className={classes.suggestionname}>
                        {props.filterData.institute.name}
                      </p>
                      <p className={classes.suggestionuniversity}>
                        Total Courses :{" "}
                        {props.filterData.institute.totalCources} Total Subject
                        : {props.filterData.subject} Total Sub Subject :{" "}
                        {props.filterData.subSubject}
                      </p>
                    </div>
                  </li>
                </Link>
                <hr />
              </>
            )}
            {props.filterData.university && (
              <>
                <Link
                  to={`/university-list/${convertToSlug(
                    props.filterData.university.name
                  )}`}
                >
                  <li key={1} className={classes.suggestionli}>
                    <div className={classes.suggestionleft}>
                      <p className={classes.suggestionname}>
                        {props.filterData.university.name}
                      </p>
                      <p className={classes.suggestionuniversity}>
                        Total Courses :{" "}
                        {props.filterData.university.totalCources} Total Subject
                        : {props.filterData.subject} Total Sub Subject :{" "}
                        {props.filterData.subSubject}
                      </p>
                    </div>
                  </li>
                </Link>
                <hr />
              </>
            )}
            {props.courseData.length > 0 ? options : ""}
            {props.topFiveData?.map((item, key) => {
              var url = "";
              if (props.text.toLowerCase() == "provider") {
                url = "provider-list/";
              }
              if (props.text.toLowerCase() === "university") {
                url = "university-list/";
              }
              if (props.text.toLowerCase() === "institute") {
                url = "university-list/";
              }
              return (
                <>
                  <Link key={key} to={`/${url}${convertToSlug(item[0])}`}>
                    <li key={1} className={classes.suggestionli}>
                      <div className={classes.suggestionleft}>
                        <p className={classes.suggestionname}>{item[0]}</p>
                        <p className={classes.suggestionuniversity}>
                          Total Courses : {item[1]}
                        </p>
                      </div>
                    </li>
                  </Link>
                  <hr />
                </>
              );
            })}
            {props.text != "" ? (
              props.topFiveData.length > 0 ? (
                <p className={classes.suggestionsee}>
                  <Link to={`/${props.text}/`}>See all search result</Link>
                </p>
              ) : (
                // <ReactLoading type="bars" color="#000" />
                <p className={classes.suggestionsee}>
                  <Link to={`/search/${props.text}`}>
                    See all search result
                  </Link>
                </p>
                // <ReactLoading type="bars" color="#000" />
              )
            ) : (
              ""
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default Suggestion;
