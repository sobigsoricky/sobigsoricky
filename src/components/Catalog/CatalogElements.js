const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    container : {
        maxWidth : '100vw',
        display : "flex",
        alignItems : "left",
        justifyContent : "center",
        height : "fit-content",
        marginTop : "80px",
        flexDirection : "column",
        marginRight : '5%',
        marginLeft : '10%',
        marginBottom : "25px",
        [theme.breakpoints.down('468')] : {
            alignItems : 'center',
        },
        [theme.breakpoints.down('986')] : {
            marginRight : '0px',
            marginLeft : '0px',
        },
    },
    list : {
        lineHeight : 1.5,
        textAlign : "center",
        marginTop : "20px",
        marginBottom : "10px",
        width : "fit-content",
        margin : "80px",
        [theme.breakpoints.down('md')] : {
        margin : "50px",
        marginBottom : "0px",
        marginTop : "20px",
        marginRight : "40px",
        },
    },
    row : {
        display : "flex",
        width : "fit-content",
        [theme.breakpoints.down('468')] : {
            flexDirection : "column",
        },
    },
    breakpoints : {
        display : "flex",
        alignItems : "flex-start",
        [theme.breakpoints.down('768')] : {
            flexDirection : "column",
        }
    },
    title : {
        color : "var(--primary)",
        fontSize : "16px",
        fontWeight : "700",
        alignItems : "left",
        padding : "20px",
        textTransform : "none",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        textDecoration : "none",
        "&:hover" : {
            transform: "scale(1.01)",
            transition: "all 0.1s",
        },
        [theme.breakpoints.down('986')] : {
            fontSize : "12px",
        },
        [theme.breakpoints.down('468')] : {
            fontSize : "16px",
        }
    },
    item : {
        color : "var(--grey)",
        display : "flex",
        textDecoration : "none",
        padding : "5px",
        width : "155px",
        "&:hover" : {
            transform: "scale(1.01)",
            transition: "all 0.1s",
        },
        [theme.breakpoints.down('986')] : {
            fontSize : "12px",
        },
        [theme.breakpoints.down('468')] : {
            fontSize : "16px",
        }
    },
}))