import { Btn, NavbarOther, Loading } from './../components'
import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from './../assets/img/blog-placeholder.svg'
import styled from 'styled-components'
import moment from 'moment';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import TextField from '@material-ui/core/TextField'
import anonymous from './../assets/img/anonymous.png'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
import clsx from 'clsx'
import { onGetData } from './apicalling';
import { Newfooter, Offerads } from "../components";



const Circle = styled.div`
    width : 95px;
    height : 95px;
    border-radius : 50px ;
    border : 0.5px solid rgba(0, 0, 0, 0.2);
    box-sizing : border-box;
    @media screen and (max-width : 986px){
        width : 70px;
        height : 70px;
        margin-right : 15px;
    }
`

const useStyles = makeStyles((theme) => ({
    conatiner: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "5%",
        maxWidth: "100vw",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        color: "#2D283E",
        zIndex: 1,
        maxWidth: "100vw",
        marginRight: "5%",
        marginLeft: "5%",
        marginTop: '8%',
        [theme.breakpoints.down('md')]: {
            paddingLeft: "0%",
            paddingRight: "0%",
            marginTop: '12%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "0%",
            paddingRight: "0%",
            marginTop: '23%',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: "0%",
            paddingRight: "0%",
            marginTop: '28%',
        },
    },
    top: {
        marginLeft: "5%",
        marginRight: "5%",
        maxWidth: "100vw",
        display: "flex",
        height: 100,
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    title: {
        color: "var(--primary)",
        [theme.breakpoints.down('sm')]: {
            fontSize: 25,
            margin: 5,
        },
    },
    vr: {
        borderLeft: "1px solid",
        opacity: 0.5,
        height: 32.5,
        marginRight: 15,
        marginLeft: 15,
        [theme.breakpoints.down('sm')]: {
            height: 20,
            marginRight: 7,
            marginLeft: 4,
        },
    },
    goback: {
        textDecoration: "none",
        color: "var(--grey)",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
    },
    blogtitle: {
        fontSize: 28,
        marginTop: 15,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    img: {
        width: 150,
        height: 150,
        margin: 5,
        marginLeft: 30,
    },
    blogcontent: {
        maxWidth: "100vw",
        width: "90%",
        margin: 10,
        fontSize: 18,
    },
    author: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    authorName: {
        textAlign: "left",
        marginLeft: "-110px",

    },
    hr: {
        width: "400px",
        border: "1px solid",
        opacity: 0.2,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.down('xs')]: {
            marginTop: "20px",
            width: "100%",
        },
    },
    commentSection: {
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        color: "var(--grey)"
    },
    commentBox: {
        display: "flex",
        flexDirection: "column",
        border: "0.5px solid #802BB1",
        boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.15)",
        borderRadius: 10,
        width: "fit-content",
        height: "fit-content",
        padding: "20px"
    },
    viewComment: {
        display: "flex",
        padding: 5,
        border: "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        maxWidth: "100vw",
        width: "fit-content",
        height: "fit-content",
        margin: "30px 0px",
        [theme.breakpoints.down('sm')]: {
        }
    },
    viewSection: {
        display: "flex",
        alignItems: "left",
        margin: "10px",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
    },
    commentTypography: {
        color: "var(--grey)",
        margin: "10px 0px",
        textAlign: "left",
        maxWidth: "400px",
    },
    like: {
        marginBottom: "10px",
        display: "flex",
    },
    link: {
        textDecoration: "none"
    },
    socialicons: {
        width: "fit-content",
        height: "fit-content",
        marginTop: "25px",
        marginBottom: "20px",
    },
    iconlink: {
        marginRight: "15px",
    },
    iconstyle: {
        width: "24px",
        height: "24px",
    },
    showreview: {
        marginRight: "auto",
        width: "750px",
        height: "fit-content",
        border: "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        padding: 25,
        display: "flex",
        alignItems: "center",
        marginBottom: "25px",
        [theme.breakpoints.down('sm')]: {
            width: "90vw",
            height: "fit-content",
        },
    },
    input: {
        display: "flex",
        marginTop: "-25px",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55ch',
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    ratingsection2: {
        display: "flex",
        marginBottom: "25px",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
        },
    },
    dp: {
        width: "95px",
        height: "95px",
        borderRadius: "50px",
        border: "0.5px solid rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
        [theme.breakpoints.down('xs')]: {
            width: "50px",
            height: "50px",
            marginRight: "20px",
        },
    },
    comment: {
        width: "550px",
        marginTop: "-20px",
        color: "var(--grey)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "fit-content",
            fontSize: '14px',
        },
    },
    reviews: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
    },
    writereview: {
        marginRight: "auto",
        width: "750px",
        height: "fit-content",
        background: "#FFFFFF",
        border: "0.5px solid #802BB1",
        boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: 25,
        margin: 15,
        marginLeft: 0,
        marginBottom: "30px",
        [theme.breakpoints.down('sm')]: {
            width: "90vw",
            height: "fit-content",
        },
    },
    reviewtext: {
        color: "var(--grey)",
        marginBottom: "30px",
    },
    inputlabel: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
    },
    commentname: {
        fontWeight: 600,
        color: "var(--grey)"
    },
    thumbsection: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        marginBottom: "10px",
    },
    thumbIcon: {
        color: "var(--primary)",
        marginRight: "5px",
    },
    thumbs: {
        display: "flex",
        alignItems: "center",
        marginRight: "25px",
    },
    reply: {
        display: "flex",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '35ch',
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    replysection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    replybtn: {
        marginLeft: "auto",
        width: "fit-content",
        height: "fit-content",
    },
    desktop: {
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
    },
    mobile: {
        display: "none",
        [theme.breakpoints.down('xs')]: {
            display: "flex"
        },
    },
}))

export default function BlogPost(props) {
    const classes = useStyles()
    console.log(props.match.params.slug);
    const [AllBlogData, setAllBlogData] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect( () => {
         onGetData('api/user/blog/getDataByName/' + props.match.params.slug).then((res) => {
            if (res.data.error === false) {
                console.log(res.data);
                setAllBlogData(res.data.data[0])
                setLoadingData(false);
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [props.match.params.slug])
    return (
        <>
            <NavbarOther />
            <div className={classes.container}>
                {/* <div className = {classes.top} >
                <Link className = {classes.link} to ="/">
                <Typography variant="h1" className = {classes.title} noWrap>
                COURSENATOR
                </Typography>
                </Link>
            <div className = {classes.vr} />
            <Typography variant="h1" className = {classes.title} noWrap>
                BLOG
            </Typography>
                </div>
                 */}
                <div className={classes.body}>
                    <div className={classes.goback}>
                        <Link to="/blogs" className={classes.goback}>
                            <ArrowBackIcon />
                            Back to main page
                        </Link>
                    </div>
                    {loadingData===true?<Loading name="Blog"/>:
                    <>
                        <Typography className={classes.blogtitle}>{AllBlogData.blog_name}</Typography>
                        <Typography>{AllBlogData.author_name}</Typography>
                        <Typography>{moment(AllBlogData.createdAt).format('DD/MM/YYYY')}</Typography>
                        <img src={AllBlogData.blog_image_path} className={classes.img} alt="Blog" />
                        <Typography className={classes.blogcontent}>
                            <div dangerouslySetInnerHTML={{ __html: AllBlogData.blog_description }}></div>
                        </Typography>
                        <div className={classes.hr} />
                        <div className={classes.author}>
                            <div className={classes.section}>
                                <Circle >
                                    {AllBlogData.author_image_path === null || AllBlogData.author_image_path === '' ? '' : <img src={AllBlogData.author_image_path} style={{ width: "95px", height: "95px" }} alt="Blog" />}
                                </Circle>
                            </div>
                            <div className={classes.section}>
                                <div className={classes.authorName}>
                                    <Typography>Blog post by :</Typography>
                                    <Typography style={{ fontWeight: "600" }}>{AllBlogData.author_name}</Typography>
                                </div>
                                <div className={classes.socialicons}>
                                    <Link
                                        className={classes.iconlink}
                                        href='/'
                                        target='_blank'
                                        aria-label='LinkedIn'>
                                        <FaLinkedin
                                            className={classes.iconstyle}
                                            color="var(--primary)" />
                                    </Link>
                                    <Link
                                        className={classes.iconlink}
                                        href='/'
                                        target='_blank'
                                        aria-label='Facebook'>
                                        <FaFacebook
                                            className={classes.iconstyle}
                                            color="var(--primary)" />
                                    </Link>
                                    <Link
                                        className={classes.iconlink}
                                        href='/'
                                        target='_blank'
                                        aria-label='Twitter'>
                                        <FaTwitter
                                            className={classes.iconstyle}
                                            color="var(--primary)" />
                                    </Link>
                                    <Link
                                        className={classes.iconlink}
                                        href='/'
                                        target='_blank'
                                        aria-label='Instagram'>
                                        <FaInstagram
                                            className={classes.iconstyle}
                                            color="var(--primary)" />
                                    </Link>
                                    <Link
                                        className={classes.iconlink}
                                        href='/'
                                        target='_blank'
                                        aria-label='Telegram'>
                                        <FaTelegram
                                            className={classes.iconstyle}
                                            color="var(--primary)" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.hr} />
                        <div className={classes.commentSection}>
                            <Typography variant="h5" style={{ color: "var(--primary)", fontWeight: 600 }}>Post Comment</Typography>
                            <div className={classes.writereview}>
                                <div className={classes.reviewtitle}>
                                    <Typography className={classes.reviewtext}>
                                        Join the discussion
                                    </Typography>
                                </div>
                                <>
                                    <form className={classes.input}>
                                        <Typography className={classes.inputlabel}>Add a comment</Typography>
                                        <TextField
                                            id="review"
                                            label="Review"
                                            multiline
                                            rows={2}
                                            variant="outlined" />
                                    </form>
                                </>
                                <Btn className={classes.replybtn}>Post</Btn>
                            </div>
                            <div className={classes.showreview}>
                                <>
                                    <img src={anonymous} className={clsx(classes.dp, classes.desktop)} alt="" />
                                </>
                                <div className={classes.reviews}>
                                    <div className={classes.ratingsection2}>
                                        <img src={anonymous} className={clsx(classes.dp, classes.mobile)} alt="" />
                                        <h4>Name</h4><Typography className={classes.commentname}> ~ one year ago</Typography>
                                    </div>
                                    <Typography className={classes.comment}>
                                        Lorem ipsum dolor sit amet, fabulas molestiae nam ad,
                                        eos an sonet deleniti volutpat. Mel sonet persecuti
                                        complectitur ut.Ea nam etiam soleat volutpat, dolor
                                        maiestatis ius ad. Liber eirmod et sea, ridens commodo
                                        feugait cum te, at vix dolor tritani.
                                    </Typography>
                                    <div className={classes.thumbsection}>
                                        <div className={classes.thumbs}>
                                            <ThumbUpIcon className={classes.thumbIcon} />
                                            <Typography>0</Typography>
                                        </div>
                                        <div className={classes.thumbs}>
                                            <ThumbDownAltIcon className={classes.thumbIcon} />
                                            <Typography>0</Typography>
                                        </div>
                                    </div>
                                    <div className={classes.replysection}>
                                        <TextField
                                            className={classes.reply}
                                            id="reply"
                                            label="Reply"
                                            rows={1}
                                            variant="outlined" />
                                    </div>
                                    <Btn className={classes.replybtn}>Post</Btn>
                                </div>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
            <Newfooter />
      <Offerads />
        </>
    )
}
