import { makeStyles } from '@material-ui/core'
import React from 'react'
import Btn from './../Button/Btn'

import ResourceCard from './../CourseCard/ResourceCard'
const useStyle = makeStyles((theme)=>({
    card:{
        margin:"10%", 
        height: "fit-content",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        
    },
    title:{
        textAlign: 'center',
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"5%",
        marginTop:"5%",
        fontWeight:"400 !important",
        fontSize:"20px !important",
        color:"#4B4E54",
        [theme.breakpoints.down("md")]:{
            fontSize:"16px",
        }
    },
    underline:{
        margin:"1%",
        borderColor:"#AFAFAF !important",
    },
    datatab:{
        margin:"5%",
    },
    data:{
        fontWeight:"'700",
        fontSize:"160x",
        color:"#4B4E54",
        marginLeft:"5%",
        marginBottom:"1%"
    },
    btn:{
        marginLeft:"75%",
        fontSize:"20px",
        fontWeight:"300",
        [theme.breakpoints.down("md")]:{
            display:"block",
            margin:"auto",
        }
    }
}))

export default function CourseAddition(){
    const classes = useStyle()
    return(
        <>
            <div className={classes.card}>
               <h5 className={classes.title}>My Courses   |   Course Path   |   Bookmarks   |   Follows</h5> 
               <hr  className={classes.underline}   ></hr>
               <div className={classes.datatab}>
                   <h5 className={classes.data}>
                        Recently created Tracks will be shown here
                   </h5>
                   <hr></hr>
               <ResourceCard />
               <Btn className={classes.btn}>
                   Continue Adding
               </Btn>
               </div>
            </div>
        </>
    )
}