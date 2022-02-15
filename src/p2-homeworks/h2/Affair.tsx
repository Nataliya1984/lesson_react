import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }// need to fix

    return (
        <div className={classes.wrapper}>

            <div className={`${classes.blockName} ${classes.styled}`}>{props.affair.name}</div>
            <div className={`${classes.blockPriority} ${classes.styled}`}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={`${classes.styled} ${classes.delete}`}>X</button>
        </div>
    )
}

export default Affair
