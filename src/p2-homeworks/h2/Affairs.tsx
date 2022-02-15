import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (_id: number)=> void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') }  // need to fix
    const setHigh = () => { props.setFilter('high') }
    const setMiddle = () => { props.setFilter('middle') }
    const setLow = () => { props.setFilter('low') }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={`${classes.styled} ${classes.selectButton}`}>All</button>
            <button onClick={setHigh} className={`${classes.styled} ${classes.selectButton}`}>High</button>
            <button onClick={setMiddle} className={`${classes.styled} ${classes.selectButton}`}>Middle</button>
            <button onClick={setLow} className={`${classes.styled} ${classes.selectButton}`}>Low</button>
        </div>
    )
}

export default Affairs
