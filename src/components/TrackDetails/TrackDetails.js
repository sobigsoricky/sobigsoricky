import React from 'react'
import Btn from "../Button/Btn"
import { Title } from '../../globalStyles'
import { makeStyles } from '@material-ui/core'
import img from '../../assets/img/viewtrack.jpg'

const useStyle = makeStyles((theme)=>({
    card:{
        margin:"10%", 
        height: "fit-content",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "50px",
        padding:"2%",
        position:"relative",
    },
    title:{
        fontWeight:"700 !important",
        fontSize:"22px !important",
    },
    underline:{
        marginLeft:"45%",
        marginRight:"45%",
        marginTop:"1%",
        marginBottom:"5%",
        borderColor:"#802BB1"
    },
    form:{
        marginLeft:"5%",
    },
    label:{
        fontWeight:"300",
        fontSize:"20px",
        fontFamily:"Nunito",
    },
    input:{
        borderBottom:"1px solid",
        borderTop:"0px !important",
        borderLeft:"0px !important",
        borderRight:"0px !important",
        minWidth:"90%",
        borderColor:"#DECDE8 !important",
        marginBottom:"2%",
    },
    inputbtn:{
        borderRadius:"20px",
        borderColor:"#CA98E8",
        backgroundColor:"#FFFFFF",
        marginTop:"2%",
        marginLeft:"-1px",
        paddingTop:"10px",
        paddingBottom:"10px",
        paddingRight:"50px",
        paddingLeft:"50px",
        color:"#802BB1",
        fontSize:"16px",
        fontWeight:"300",
        minWidth:"100px",
        
    },
    img:{
        maxWidth:"200px",  
        verticalAlign:"middle",
        position:"absolute",
        right:"100px",  
        borderRadius:"20px",
        [theme.breakpoints.down("md")]:{
            maxWidth:"100px",
            right:"10px",
        }
    },
    btn:{
        display:"block",
        margin:"auto",
        marginTop:"10%",
        fontWeight:"300",
        fontSize:"20px",
    }
}))

export default function TrackDetails(){
    const classes = useStyle()
    return(
        <>
           <div className={classes.card}>
               <Title className={classes.title}>TRACK DETAILS</Title>
               <hr className={classes.underline}></hr>
                <form className={classes.form}> 
                    <label className={classes.label}>Track name*</label><br></br>
                    <input style={{}} className={classes.input} type="text"></input><br></br>
                    <label className={classes.label}>Track image</label><br></br>
                    <button className={classes.inputbtn}>UPLOAD IMAGE</button>
                    <img style={{}} className={classes.img} src={img}></img><br></br>
                    <Btn className={classes.btn}>Add</Btn>
                </form>
           </div> 
        </>
    )
}