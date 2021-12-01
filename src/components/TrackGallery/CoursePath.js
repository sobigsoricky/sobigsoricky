import React from 'react';
import { makeStyles, TextField ,Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    card :{
        marginTop:"10%"
    }
}))
function CoursePath(){
    const classes = useStyles()
    return<div className={classes.card}>
        
    </div>
}
export default CoursePath;