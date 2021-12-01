import { makeStyles } from '@material-ui/core'
import React from 'react'
import img from "./../../assets/img/hero-bg.png";
import Btn from '../Button/Btn'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch';


const useStyle = makeStyles((theme)=>({
    root:{
        margin:"10%", 
        height: "fit-content",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px",
        position:"relative",
    },
    title:{
        textAlign:"center",
        fontWeight:"400",
        fontSize:"20px",
    },
    underline:{
        margin:"1%",
        borderColor:"#AFAFAF !important",
    },
    mastercard:{
        position:"relative",
        marginTop:"3%",
    },
    card:{
        display: "flex",
        height: "fit-content",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginTop:"5%",
        marginLeft:"5%",
        marginRight:"5%",
        marginBottom:"10%",
        borderRadius:"20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.down("md")]:{
            marginLeft:"1%",
            marginBottom:"40%",
        }
    },
    img: {
        width: "165px",
        height: "165px",
        borderRadius: "10px",
        padding:"5%"
    },
    carddata:{
        marginLeft:"5%",
    },
    cardtitle:{
        fontSize:"18px",
        fontWeight:"400",
    },
    number:{
        fontWeight:"600",
        fontSize:"14px",
        marginTop:"1%",
    },
    btn:{
        marginTop:"40%",
        marginLeft:"-1%",
        fontSize:"16px",
        [theme.breakpoints.down("md")]:{
            fontSize:"14px",
            marginLeft:"0px",
        },
    },
    icons:{
        position:"absolute",    
        bottom:"0px",
        left:"40px",
        [theme.breakpoints.down("md")]:{
            left:"10px",
        }
    },
    icon:{
        backgroundColor:"#802BB1",
        width: "50px",
        height: "30px",
        color:"white",
        borderRadius:"100%",
        marginLeft:"10px",
        [theme.breakpoints.down("md")]:{
            marginLeft:"1%",
        }
    },
    toggledialogue:{
        display:"inline-block",
        marginLeft:"100px",
        [theme.breakpoints.down("md")]:{
            marginLeft:"10px",
            display:"inline"
        },
    },
    bottombtn:{
        marginTop:"100px",
        marginLeft:"100px",
        [theme.breakpoints.down("md")]:{
            marginTop:"10px",
        }
    }
}))

export default function CoursePath(){
    const classes = useStyle()
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return(
        <>
            <div className={classes.root}>
                <h5 className={classes.title}>
                    My Courses   |   Course Path   |   Bookmarks   |   Follows
                </h5><hr className={classes.underline}></hr>
                <Grid container className={classes.cards} spacing={3}>
                {[...Array(4)].map(coursecard => {
                        return (
                            <>
                    <Grid className={classes.mastercard} item md={6}>
                        <div className={classes.card}>
                            <img className={classes.img} src={img}></img>
                            <div className={classes.carddata}>
                                <h5 className={classes.cardtitle}>PATH NAME</h5>
                                <p className={classes.number}>No. of courses : 0</p>
                                <Btn className={classes.btn}>View Course Path</Btn>
                            </div>
                        <div className={classes.icons}>
                            <svg className={classes.icon} width="10" height="7" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M2.04816 10.178L0.675941 15.1891C0.628604 15.3723 0.630227 15.5621 0.680691 15.7447C0.731154 15.9273 0.829185 16.098 0.96762 16.2445C1.10606 16.3909 1.2814 16.5093 1.48084 16.591C1.68028 16.6728 1.89879 16.7158 2.12039 16.7169C2.22364 16.7257 2.32769 16.7257 2.43094 16.7169L8.38927 15.5558L19.8293 5.91246L13.4448 0.522461L2.04816 10.178Z" fill="white"/>
                            </svg>
                            <svg className={classes.icon} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5322 4.4001H24.4255C24.7302 4.4001 25.0225 4.50019 25.2379 4.67835C25.4534 4.85651 25.5744 5.09814 25.5744 5.3501C25.5744 5.60205 25.4534 5.84369 25.2379 6.02185C25.0225 6.20001 24.7302 6.3001 24.4255 6.3001H23.1549L21.4269 19.1745C21.2708 20.3364 20.602 21.4099 19.5485 22.1896C18.495 22.9692 17.1308 23.4002 15.7169 23.4001H10.1563C8.74248 23.4002 7.37825 22.9692 6.32474 22.1896C5.27122 21.4099 4.60241 20.3364 4.44632 19.1745L2.71609 6.3001H1.44772C1.14301 6.3001 0.850789 6.20001 0.635331 6.02185C0.419872 5.84369 0.298828 5.60205 0.298828 5.3501C0.298828 5.09814 0.419872 4.85651 0.635331 4.67835C0.850789 4.50019 1.14301 4.4001 1.44772 4.4001H8.34106C8.34106 3.39227 8.82524 2.42573 9.68707 1.71309C10.5489 1.00045 11.7178 0.600098 12.9366 0.600098C14.1554 0.600098 15.3243 1.00045 16.1862 1.71309C17.048 2.42573 17.5322 3.39227 17.5322 4.4001ZM12.9366 2.5001C12.3272 2.5001 11.7428 2.70028 11.3118 3.05659C10.8809 3.41291 10.6388 3.89619 10.6388 4.4001H15.2344C15.2344 3.89619 14.9923 3.41291 14.5614 3.05659C14.1305 2.70028 13.546 2.5001 12.9366 2.5001ZM9.48995 10.1001V17.7001C9.48995 17.9521 9.611 18.1937 9.82645 18.3718C10.0419 18.55 10.3341 18.6501 10.6388 18.6501C10.9435 18.6501 11.2358 18.55 11.4512 18.3718C11.6667 18.1937 11.7877 17.9521 11.7877 17.7001V10.1001C11.7877 9.84814 11.6667 9.60651 11.4512 9.42835C11.2358 9.25019 10.9435 9.1501 10.6388 9.1501C10.3341 9.1501 10.0419 9.25019 9.82645 9.42835C9.611 9.60651 9.48995 9.84814 9.48995 10.1001ZM15.2344 9.1501C14.9297 9.1501 14.6375 9.25019 14.422 9.42835C14.2066 9.60651 14.0855 9.84814 14.0855 10.1001V17.7001C14.0855 17.9521 14.2066 18.1937 14.422 18.3718C14.6375 18.55 14.9297 18.6501 15.2344 18.6501C15.5391 18.6501 15.8313 18.55 16.0468 18.3718C16.2623 18.1937 16.3833 17.9521 16.3833 17.7001V10.1001C16.3833 9.84814 16.2623 9.60651 16.0468 9.42835C15.8313 9.25019 15.5391 9.1501 15.2344 9.1501Z" fill="white"/>
                            </svg>
                            <p className={classes.toggledialogue}>Make public</p>
                            <Switch className={classes.switch}
                                checked={state.checkedB}
                                onChange={handleChange}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        </div>
                    </Grid>
                            </>
                        )
                    })}
                </Grid>
                <Btn className={classes.bottombtn}>Create new Track</Btn>
                <Btn className={classes.bottombtn}>Create new Track</Btn>
                <Btn className={classes.bottombtn}>Create new Track</Btn>
            </div>
        </>
    )
}