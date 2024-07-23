import React from 'react'


import {
    Avatar,
    InAI,
    Hamburger
} from '../../assets';
import styles from './MobileNav.module.scss';

const MobileNav = ({onHamburgerClick}) => {
  return (
    <div className={styles.mobileNav}>
        <Avatar/>
        <InAI/>
        <Hamburger style={{cursor:"pointer"}} onClick={onHamburgerClick}/>
    </div>
  )
}

export default MobileNav
