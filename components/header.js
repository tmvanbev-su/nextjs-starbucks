import { useState } from 'react'


import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import Row from './Row'

import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

import styles from './header.module.scss'

export default function Header() {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <header className={styles.header}>
            <Container>
                    <Row justifyContentSpaceBetween>
            <Link href="/">
                <a>
                    <Image 
                        src="/images/starbucks-logo.svg"
                        width={100}
                        height={100}
                        alt="Starbucks logo"
                    />
                </a>
            </Link>
            <ButtonUI 
                icon="menu" 
                clickHandler={() => {setIsMenuVisible(true)}}
            />
            {
                isMenuVisible &&
                    <NavOverlay
                        closeClickHandler={() => {
                            setIsMenuVisible(false)
                        }}
                    />
            }
            </Row>
        </Container>
    </header>
    )
}