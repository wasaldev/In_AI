import React from 'react'

import {
    ArrowDown,
    Avatar,
    Search
} from '../../assets';

import styles from './NavBar.module.scss'

const NavBar = ({name, info}) => {
  return (
    <div className={styles.nav}>
        <div className={styles.Search}>
            <div className={styles.SearchContent}>
                <Search/>
                <span className={styles.Typography}>Search</span>
            </div>
        </div>
        <div className={styles.Profile}>
            <div className={styles.ProfileContent}>
                <Avatar/>
                <div className={styles.logoContent}>
                    <span className={styles.Logo}>{name}</span>
                    <span className={styles.Info}>{info}</span>
                </div>
            </div>
            <ArrowDown className={styles.icon}/>
        </div>
    </div>
  )
}

export default NavBar;
