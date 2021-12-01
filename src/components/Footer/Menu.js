import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { MenuItem, MenuList, Typography } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { FooterLink } from './FooterElements'

const useStyles = makeStyles({
  root: {
    height : "fit-content",
    flexGrow: 1,
    maxWidth: "100vw",
    marginBottom : "25px",
  },
  accordian : {
    background : "var(--secondary)",
    color : "#fff",
  },
  icon : {
      color : "#fff",
  },
});

export default function Menu() {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel1a-content"
            id = "panel1a-header">
                <Typography style = {{ fontWeight : '600' }}>
                Polpular Subjects
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <MenuList>
                    <MenuItem>
                        <FooterLink to='/'>Data Science</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Computer Science</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Business</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Basic Sciences</FooterLink>
                    </MenuItem>
                    
                    <MenuItem>
                        <FooterLink to='/'>Health</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Personal Development</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Social Sciences</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Programming</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel2a-content"
            id = "panel2a-header">
                <Typography style = {{ fontWeight : '600' }}>
                Trending Topics (2021)
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/'>How online learning will change the future</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>How to get a Data Analyst job in 2021</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>How to get Data Scientist jobs in 2021</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Information technology courses in 2021 Us</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Engineering online courses in 2021</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Business courses in 2021</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Human Resource courses in 2020</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>All about E-learning</FooterLink>
                    </MenuItem>
                   
                </MenuList>
            </AccordionDetails>
        </Accordion>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel3a-content"
            id = "panel3a-header">
                <Typography style = {{ fontWeight : '600' }}>
                Provider Guide
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/'>Coursera</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Guide edX</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>FutureLearn Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Udacity Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Edureka Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Udemy Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Pluralsight Guide</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
        <Accordion className = {classes.accordian}>
            <AccordionSummary
            expandIcon = {<ExpandMoreIcon className = {classes.icon} />}
            aria-controls = "panel4a-content"
            id = "panel4a-header">
                <Typography style = {{ fontWeight : '600' }}>
                Search Courses by
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <MenuList>
                    <MenuItem>
                        <FooterLink to='/'>All Subject</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>All Provider</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>All Universities</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>All Languages</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Edureka Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Udemy Guide</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink to='/'>Pluralsight Guide</FooterLink>
                    </MenuItem>
                </MenuList>
            </AccordionDetails>
        </Accordion>
       
    </div>
  );
}
