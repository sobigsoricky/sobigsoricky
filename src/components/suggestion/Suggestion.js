import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Searchrating from "../StarRating/Searchrating"

function Suggestion(props) {
  const classes = props.classes
  // console.log(props);
  const options = props.results.map((r) => (
    <>
      <Link to={`/product/${r.slug}`}>
        <li key={r.id} className={classes.suggestionli1}>
          <div className={classes.suggestionleft}>
            <p className={classes.suggestionname}>{r.course}</p>
            {/* <p className={classes.suggestionuniversity}>{r.provider}</p> */}
          </div>
          <div className={classes.suggestionright}>
            <p className={classes.suggestionprovider}>{r.provider}</p>
            {/* {props.search == 'navsearch' ? ' ' : <p className={classes.suggestionrating}>{parseFloat(r.rating)}</p>} */}
            <Searchrating rating={parseFloat(r.rating)} />
          </div>
        </li>
      </Link>
      <hr />
    </>
  ))

  const useStyles = makeStyles((theme) => ({
    suggestionli1: {
      fontsize: "15px",
    },
  }))

  return (
    <>
      {props.isOpen ? null : options.length > 0 ? (
        <ul className={classes.suggestionul}>
          {options}
          <p className={classes.suggestionsee}>
            <Link to={`/search/${props.text}`}>See all search result</Link>
          </p>
        </ul>
      ) : (
        ""
      )}
    </>
  )
}

export default Suggestion
