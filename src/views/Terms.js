import { Navbar, NavbarOther } from './../components'
import React, { useEffect } from 'react'
import { Title, Container } from './../globalStyles'
import { makeStyles, Typography, TextField } from '@material-ui/core'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Helmet from 'react-helmet';
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from './apicalling';


const useStyles = makeStyles((theme) => ({
    typography: {
        lineHeight: "1.7",
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    title: {
        margin: '15% 0 6% 0 !important'
    },
    search: {
        display: "flex",
        maxWidth: "100vw",
        alignItems: "center",
        justifyContent: "right",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
}))

export default function Terms() {
    const classes = useStyles();
    useEffect(()=>{
        googleAnalyticsAction();
    })
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Coursenator</title>
                <meta name="description" content="www.coursenator.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the `Terms`)." />
            </Helmet>
            <NavbarOther />
            <Container>
                {/* <div className = {classes.search}>
            <TextField
                label="Search"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
            </div> */}
                <Title className={classes.title}>
                    Terms and Conditions
                </Title>
                <Typography className={classes.typography}>
                    <p dir="ltr">Agreement between user and www.coursenator.com Welcome to www.coursenator.com. The www.coursenator.com website (the "Site") comprises various web pages.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr">www.coursenator.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of www.coursenator.com constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference. www.coursenator.com is a Social Networking Education site, Coursenator enables users to find online courses.</p>
                    <p dir="ltr"><br /><br /></p>
                    <p dir="ltr"><strong>Electronic Communications&nbsp;</strong></p>
                    <p dir="ltr">Visiting www.coursenator.com or sending emails to Coursenator constitutes electronic communications.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr">Your account&nbsp;</p>
                    <p dir="ltr">If you use this Site, you are responsible for maintaining the confidentiality of your account and password and restricting access to your computer, and you</p>
                    <p dir="ltr">agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr">Links to third-party sites/Third party services www.coursenator.com may contain links to other websites ("Linked Sites"). The Linked Sites are not under the</p>
                    <p dir="ltr">control of Coursenator, and it is not responsible for the contents of any Linked Site, including any link contained in a Linked Site or any</p>
                    <p dir="ltr">changes or updates to a Linked Site. Coursenator is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by</p>
                    <p dir="ltr">Coursenator of the Site or any association with its operators. Certain services made available via www.coursenator.com are delivered by third-party sites and organizations.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr"><strong>No unlawful or prohibited use/Intellectual Property&nbsp;</strong></p>
                    <p dir="ltr">You are granted a non-exclusive, non-transferable, revocable license to access and use www.coursenator.com strictly in accordance with these terms of use.&nbsp;</p>
                    <p dir="ltr"><br /><br /></p>
                    <p dir="ltr">Materials provided to www.coursenator.com or posted on any Coursenator web page.&nbsp;</p>
                    <p dir="ltr">Coursenator does not claim ownership of the materials you provide to www.coursenator.com (including feedback and suggestions) or post, upload, input, or submit to any Coursenator Site or our associated services (collectively "Submissions").</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr"><strong>Third-Party Accounts</strong>&nbsp;</p>
                    <p dir="ltr">You will be able to connect your Coursenator account to third-party accounts. By connecting your Coursenator account to your third party account, you</p>
                    <p dir="ltr">acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third-party sites).</p>
                    <p dir="ltr">If you do not want information about yourself to be shared in this manner, do not use this feature.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr"><strong>International Users&nbsp;</strong></p>
                    <p dir="ltr">The Service is controlled, operated, and administered by Coursenator from our offices within India. If you access the Service from a location outside India, you are responsible for compliance with all local laws. You agree that you will not use the Coursenator Content accessed through www.coursenator.com in any country or any manner prohibited by any applicable laws, restrictions, or regulations.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr"><strong>Indemnification&nbsp;</strong></p>
                    <p dir="ltr">You agree to indemnify, defend and hold harmless Coursenator, its officers, directors, employees, agents, and third parties for any losses, costs, liabilities, and</p>
                    <p dir="ltr">expenses (including reasonable attorneys' fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your breach of any rights of a third party, or your violation of any applicable laws, rules or regulations. Coursenator reserves the right, at its own cost,</p>
                    <p dir="ltr">to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Coursenator in asserting any&nbsp;available defenses.</p>
                    <p dir="ltr">&nbsp;</p>
                    <p dir="ltr"><span style={{ fontSize: "medium" }}  ><strong>Liability disclaimer&nbsp;</strong></span></p>
                    <p dir="ltr">THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE</p>
                    <p dir="ltr">INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. COURSENATOR AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES TO THE SITE AT ANY TIME.&nbsp;</p>
                    <p>&nbsp;</p>
                    <p dir="ltr"><span style={{ fontSize: "medium" }}><strong>Termination/access restriction:</strong></span> Coursenator reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this Agreement is governed by the laws of New Delhi and you hereby consent to the exclusive jurisdiction and venue of courts in New Delhi in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not affect all provisions of these Terms, including, without limitation, this section.</p>
                    <p>&nbsp;</p>
                    <p dir="ltr">Changes to Terms Coursenator reserves the right, in its sole discretion, to change the Terms under which www.coursenator.com is offered. The most current version of the Terms will supersede all previous understandings. Coursenator encourages you to review the Terms to stay informed of our updates periodically.</p>
                    <p>&nbsp;</p>
                </Typography>
            </Container>
            <Newfooter />
      <Offerads />
        </>
    )
}
