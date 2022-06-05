import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import style from './Menu.module.css'

export const Menu = () => {
    return(
        <div className={style.containerMenu}>
            <header className={style.headerMenu}>
                <div className={style.logoBack}><a href='/'><ArrowBackIosIcon className={style.logBack}/></a></div>
            </header>
            <div className={style.informationMenu}>
                <div className={style.titleInfoMenu}>Choose a template</div>
                <div className={style.textInfoMenu}>Or select one of the above categories to narrow things down a bit. You can also choose a blank canvas if you'd rather start from scratch.</div>
            </div>
            <div className={style.templatesMenu}>
                <div className={style.templateMenu}><a href="/build" className={style.botonSelect}>Choose</a></div>
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
                <div className={style.templateMenu}><a href="/index" className={style.botonSelect}>Choose</a></div>
            </div>
        </div>
    )
}