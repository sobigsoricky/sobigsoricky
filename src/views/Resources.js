import { makeStyles } from '@material-ui/core'
import react from 'react'
import { Navbar, Btn, ResourceCard } from '../components'
import { Title } from './../globalStyles'
import Grid from '@material-ui/core/Grid'
import { Newfooter, Offerads } from "../components";


const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: "5%",
    },
    left: {
        borderRight: '1px solid #C4C4C4',
        height:'500px',
        [theme.breakpoints.down("sm")]: {
            borderRight:'none',
            height:'100%',
            margin:'auto'
        },
    },
    track: {
        marginTop: "150px",
        marginLeft: "15%",
        marginRight: "15%",
        textAlign: "center",
    },
    data: {
        marginTop: "2%",
        fontSize: "16px",
        fontWeight: "400",
        color: "#4B4E54"
    },
    blacktitle: {
        color: "black",

    },
    sidetrack: {
        textAlign: "center",
        margin: "5%",
        marginLeft: "10%",
        display: "flex",
        flexDirection: "column",
    },
    sidetitle: {
        fontWeight: "100 !important",
        fontSize: "30px !important",
    },
    sidedata: {
        fontSize: "18px",
        fontWeight: "400",
        marginTop: "10%"
    },
    btn: {
        [theme.breakpoints.down("sm")]: {
            width: "50%",
            margin: "auto",
        },
    },

    secondbtn: {
        opacity: "0.5 !important",
    },
    cards: {
        [theme.breakpoints.down("md")]: {
            margin: "auto",
        },
    }
}))
export default function Resources() {
    const classes = useStyle()
    return (
        <>
            <Navbar />
            <div className={classes.track}>
                <Title><span className={classes.blacktitle}>x courses found for </span> ENGLISH
                </Title>
                <h5 className={classes.data}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis non
                    urna vel feugiat. Sed lectus ante, placerat et nibh vitae, faucibus dapibus justo.
                </h5>
            </div>
            <Grid className={classes.root} container spacing={3}>
                <Grid item md={3} className={classes.left}>
                    <div className={classes.sidetrack}>
                        <div className={classes.vline} />
                        <Title className={classes.sidetitle}>
                            Confused ?
                        </Title>
                        <h5 className={classes.sidedata}>
                            See what others are doing. Follow and choose the best suitable track for you.
                        </h5>
                        <Btn className={classes.btn}>
                            See other’s Tracks
                        </Btn>

                        OR

                        <h5 className={classes.sidedata}>
                            Follow tracks made under the guidance of Professionals
                        </h5>
                        <Btn className={`${classes.secondbtn} ${classes.btn}`}>
                            Follow Expert Track
                        </Btn>
                    </div>
                </Grid>
                <Grid className={classes.cards} item md={8} >
                    {[...Array(5)].map(resourcecard => {
                        return <ResourceCard />
                    })}
                    <ResourceCard />
                </Grid>
            </Grid>
            <Newfooter />
      <Offerads />
        </>
    )
}