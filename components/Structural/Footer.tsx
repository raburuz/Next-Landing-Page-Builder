import style from './Footer.module.css'
import { Link } from '@mui/material';

export const Footer = () => {
  return (
    <footer className={style.footer}> 
      <ul className={style.lista}>
        <li className={style.element}><Link href='/'><a >Home</a></Link></li>
        <li className={style.element}><span className="separador">| </span><Link href='/menu'><a> Templates</a></Link></li>
        <li className={style.element}><span className="separador">| </span><Link href='/polity'><a>Privacy</a></Link></li>
        <li className={style.element}><span className="separador">| </span> Contact</li>
      </ul>
      <p className={style.copyright}>© Puzzle. All rights reserved.</p>
      
    </footer>
  );
};