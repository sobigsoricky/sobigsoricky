import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Styles } from './../../assets/jss/Styles'
import {Link} from 'react-router-dom'
import { MenuItem, MenuList, Typography } from '@material-ui/core'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    height : "fit-content",
    flexGrow: 1,
    maxWidth: "100vw",
    marginBottom : "25px",
  },
});

export default function Treeview(props) {
  const classes = useStyles();
  const styles = Styles()
  return (
    <div className = {classes.root}>
       <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography
                        class={styles.link}
                        style={{ fontWeight: '600', color: "#000" }}>
                        Related courses
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MenuList>
                        {
                            props.AllSubSubjectData.length > 0 ?
                                props.AllSubSubjectData.map((x, k) => {
                                    return (
                                        <MenuItem>
                                            <Link to={`/course/${x.slug}`} className={styles.link}>
                                                {x.name}
                                            </Link>
                                        </MenuItem>

                                    )
                                }) : ''}
                        
                        <MenuItem>
                            <Link
                                className={clsx(styles.cataloglink, styles.link)}
                                to="/catalog">
                                View Catalogue
                            </Link>
                        </MenuItem>
                    </MenuList>
                </AccordionDetails>
            </Accordion>
    </div>
  );
}
