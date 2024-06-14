import React from 'react'
import style from './Navbar.module.css';
import {MenuItems} from './MenuItems'


export const Navbar = () => {
  return (
    <nav className={style.navbarItems}>

        <h1 className={style.navbarLogo}>Travelia</h1>

        <ul className={style.navbarMenu}>

            {
                MenuItems.map((item,index)=>{
                    return(
                        <li key={index} className={style.icon}>
            <a href={item.url} className={style.a}><i className={item.icon}></i>{item.title}</a>
            </li>
                    )
                })
            }

            
            
        </ul>

    </nav>
  )
}
