import React from 'react'
import nabarStyle from './Navbar.module.css';
import {MenuItems} from './MenuItems'


export const Navbar = () => {
  return (
    <nav className={MenuItems}>

        <h1 className='navbar-Logo'>Travelia</h1>

        <ul className='navbar-menu'>

            {
                MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
            <a href={item.url}><i className={item.icon}></i>{item.title}</a>
            </li>
                    )
                })
            }

            
            
        </ul>

    </nav>
  )
}
