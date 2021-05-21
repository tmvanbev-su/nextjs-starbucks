import { motion } from "framer-motion"


import ButtonUI from './buttonui'

import styles from './navoverlay.module.scss'

import Link from 'next/link'


export default function NavOverlay({ closeClickHandler }) {
    
    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 }, 
    }
    
    
    
    return (
        <div className={styles.nav_overlay}>
            <nav className={styles.nav_overlay_menu}>
                <ButtonUI className={styles.close_btn} icon="close" clickHandler={closeClickHandler} />
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/locations">
                            <a>Locations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/people">
                            <a>People</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul> 
            </nav>
        </div>
    )
}