import { makeStyles } from '@material-ui/core'
import React from 'react'
import BreadCrumb from '../BreadCrumbs/BreadCrumb'
import Btn from '../Button/Btn'

const useStyles = makeStyles((theme) => ({
    root : {
        height : "fit-content",
        alignItems: 'center',
        display : 'flex',
        [theme.breakpoints.down('sm')]: {
            marginLeft : "0%",
            marginRight : "0%",
            flexDirection : "column",
          },
    },
    btn : {
        marginLeft : 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft : 0,
          },
    }
}))

function BreadcrumbSection() {
    const classes = useStyles()
    return (
        <>
        <div className = {classes.root} >
        <BreadCrumb />
        <div className = { classes.btn }>
            <Btn>Follow</Btn>
            <Btn>Share List</Btn>
        </div>
        </div>
        </>
    )
}

export default BreadcrumbSection