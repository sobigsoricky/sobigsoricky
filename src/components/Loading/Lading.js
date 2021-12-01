import React from 'react'
import { makeStyles } from '@material-ui/core'
import img from '../../assets/img/loading.png'
import { Title } from '../../globalStyles';
import Lottie from 'react-lottie';
import * as loading from './loading.json'


const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
const useStyles = makeStyles((theme) => ({
    container1:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    loading:{
        position:'relative',
    },
    container:{
        width:'288px',
        margin:'10% auto'
    },
    img:{
        margin:'auto'
    }
}))

function Loading(props) {
    const classes = useStyles()
    return (
       
        <div className={classes.container1}>
          <Lottie options={defaultOptions} height={200} width={300} />
         <div className={classes.container}>
         <img src={img} className={classes.img}/>
         <Title>Let’s Go... {props.name}</Title>
         </div>
        </div>
        
    )
}

export default Loading
