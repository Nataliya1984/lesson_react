import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from "./Pages";

export function Header() {
    return (


                <div className={s.header}>

                       <NavLink to={PATH.PRE_JUNIOR} className={({isActive})=>`${isActive ? s.activeLink : ''}`} >Pre junior</NavLink>


                        <NavLink to={PATH.JUNIOR} className={({isActive})=>`${isActive ? s.activeLink : ''}`} >Junior</NavLink>


                        <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=>`${isActive ? s.activeLink : ''}`} >Junior plus</NavLink>
                        <div className={s.block}></div>

                </div>

)
}


