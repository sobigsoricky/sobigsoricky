import { createMuiTheme } from '@material-ui/core'

//Theme for Coursenator

export const theme = createMuiTheme({
    palette: {
        primary :{
            main : "#5C0090"
        },
        secondary :{
            main : "#2D283E"
        }
    },
    typography : {
        fontFamily : "Nunito",
        fontSize : "14",
        h1:{
            fontSize : 36,
            fontFamily : "Skranji",
            fontWeight : "500",
            textShadow: '0 4 4rem rgba(0, 0, 0, .25)',
        },
        p : {
            fontsize : 14,
            fontWeight : 600
        },
        body2 : {
            padding : 3,
            fontWeight : 600,
        },
        h3 : {
            fontWeight : 600,
            fontSize : 20, 
        }
    }
})