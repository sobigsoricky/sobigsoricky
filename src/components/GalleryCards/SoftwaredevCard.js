import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import  Softwaredevimg  from '../../assets/img/datascientist.jpg';
import Btn from '../Button/Btn';


const useStyle = makeStyles((theme)=>({
    card:{
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        position:"relative",
        maxWidth:"70%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            marginBottom:'5%'
            },
    },
    image:{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:"1px 1px 40px 40px",
        display:"block",
        zIndex: 1,
    },
    title:{
        textAlign:"center",
        textDecoration: "none",
        color: "var(--grey)",
        marginBottom: "5px",
        marginTop:"5%",
        "&:hover": {
            color: "var(--primary)",
        },
        [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        },
    },
    btns:{
        display:"flex",
        marginBottom:"5%",
        [theme.breakpoints.down("sm")]: {
            marginTop:"10%",
            justifyContent:'center'
          },
    },
    btn1: {
        
        fontSize: "14px",
        padding: "2px 10px",
        height: "47px",
        width: "184px",
        background:'none',
        color:'#802BB1',
        border:'1px solid #802BB1',
        marginBottom: "auto",
        [theme.breakpoints.down("sm")]: {
          marginTop: " -25px",
          marginBottom: "10px",
        },
      },
    btn2: {
        fontSize: "14px",
        padding: "2px 10px",
        height: "47px",
        width: "124px",
        marginBottom: "auto",
        [theme.breakpoints.down("sm")]: {
          marginTop: " -25px",
          marginBottom: "10px",
        },
      },
      icon:{
        backgroundColor:"#802BB1",
        width: "30px",
        height: "auto",
        color:"white",
        borderRadius:"10%",
        position:"absolute",
        top:"0px",
        right:"0px",
      },
      count:{
        padding:"3px",
        textAlign:"center",
    }
}))
export default function SoftwaredevCard(){
    const classes = useStyle()
    return(
        <>
            <Card className={classes.card}>
                <img className={classes.image} src={Softwaredevimg}></img>
                <div className={classes.icon}>
                    <p className={classes.count}>1k+</p>
                </div>
                <Typography className={classes.title}>WAY TO SOFTWARE DEVELOPMENT</Typography>
                <div className={classes.btns}>
                    <Btn className={classes.btn1}>By Aditi Sharma</Btn>
                    <Btn className={classes.btn2}>View</Btn>
                </div>

            </Card>
        </>
    )
}