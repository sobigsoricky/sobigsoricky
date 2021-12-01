import { theme } from './../../theme'
import { makeStyles } from '@material-ui/core'
import img from '../../assets/img/ccard.png'
import { Link } from 'react-router-dom'
import img2 from '../../assets/img/language.png'
import { Title } from '../../globalStyles'

const useStyle = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",

        position: "relative",
        justifyContent: 'center',
        color: "#2D283E",
        zIndex: 1,
        maxWidth: "1300px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "5%",
        marginBottom: "5%",
        width: '17.4vw',
        height: '10.5vw',
        border: "0.3px solid white",
        borderRadius: "5%",
        boxSizing: "border-box",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
        [theme.breakpoints.up('sm')]: {
            minWidth: '250px',
            minHeight: '150px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '41.4vw',
            height: '28.5vw',
        },
    },
    img: {
        borderRadius: "0 5px 0 0",
        position: "absolute",
        top: "0px",
        right: "-1px",
        [theme.breakpoints.down('sm')]: {
            width: '45%',


        },

    },
    img2: {
        maxWidth: "20%",
        marginTop: "5%",
        marginRight: "5%",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '70px',
            margin: '0 auto 0 0'

        },
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            maxWidth: '70px',
            margin: '0 auto 0 0'

        },
    },
    data: {
        maxWidth: '145px',
        textAlign: "center",
        padding: '0 0 0 16px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '70px',
            margin: '0 auto 0 0'

        },
    },
    title: {
        fontSize: "20px !important",
        fontWeight: "600 !important",
        [theme.breakpoints.down('xs')]: {
            fontSize: "12px !important",
            marginTop: '0 !important'


        },

    }
}))
const images1 = require.context('../../assets/card', true);

export default function SubsubjectCard(props) {
    const classes = useStyle();
    console.log(props.data1);
    return (
        <>
            <Link to={`/course/${props.data.slug}`}>
                <div conatiner className={classes.card}>
                    <img className={classes.img} src={images1(`./${props.data1.slug}.png`).default}></img>
                    <div className={classes.data}>
                        {/* <img className={classes.img2} src={props.data.image_path} ></img> */}
                        <img className={classes.svg} src={images1(`./${props.data1.slug}.svg`).default} width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg" />

                        <Title className={classes.title} style={{ color: `${props.data1.color_code}` }}>
                            {props.data.name}
                        </Title>
                    </div>
                </div>
            </Link>
        </>
    )
}