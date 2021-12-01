import { Button, Container, Title } from '../globalStyles'
import React, { useEffect, useState } from 'react'
import { Navbar , CourseCard , Btn, NavbarOther} from '../components'
import {  Typography , Grid,makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { Styles } from '../assets/jss/Styles'
import { onGetData } from './apicalling'
import { Newfooter, Offerads } from "../components";

const Styles1 = makeStyles((theme) => ({
    typography:{
        margin:'0 0 3%',
        maxWidth:'766px'
    },
    title:{
        margin:'3% 0 0 !important'
    },
}));

function Recommend() {
    const classes = Styles()
    const classes1= Styles1()
    const [AllCourseData, setAllCourseData] = useState([]);
    useEffect(() => {
        onGetData('api/user/course/getDataBySubSubject/all/0').then((res1) => {
            console.log(res1.data.data);
            setAllCourseData(res1.data.data)

        }).catch((error) => {
            console.log('Error');
        });

    }, [])
    return (
        <>
        <NavbarOther />
        <div className = {classes.containerre} >
        <Title className={classes1.title} > <span style={{color:'#000'}}>x courses found for</span>  ENGLISH</Title>
        <Typography className = {classes1.typography}>
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Donec lobortis non urna 
        vel feugiat. Sed lectus ante,
        placerat et nibh vitae, faucibus dapibus justo.
        </Typography>

        <Grid className={classes.courses} container>
            <Grid item xs={12} md={3}>
                <div className={classes.leftre}>
                    <div className={classes.leftreinner}>
                    <Title className={classes.titlere}> Confused ?</Title>
                    <p className={classes.pre}>See what others are doing. Follow and choose the most suitable track for you.</p>
                    <Link to='#'> <Button className={classes.btnre}>See other’s Tracks</Button></Link>
                    <div className={classes.be}><p className={classes.or}>OR</p></div>
                    <p className={classes.pdre}>Follow tracks made under the guidance of experts.</p>
                    <Link to='#'> <Button className={classes.btnre} style={{background:'#CA98E8'}}>Follow Expert Track</Button></Link>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={9}>
            <div className={classes.rightre}>
            {AllCourseData.map(coursecard => {
                                return <CourseCard data={coursecard} />
                            })}
            {/* {[...Array(10)].map(coursecard => {
            return <CourseCard />
            })}  */}
            
        </div>
            </Grid>
        </Grid>



      
       
            </div>
            <Newfooter />
      <Offerads />
        </>
    )
}

export default Recommend
