import Link from "next/link";
import React, { useEffect, useState } from "react"

import styles from './header.module.css';
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        if (window.scrollY < 30) {
            console.log('scrolll')
            window.addEventListener('scroll', updateScroll);
        }
    });
    // const onLogoClick = () => {
    //     props.onLogoClick()
    // }

    // const openRecruitPage = () => {
    //     window.open("http://jsoftware.co.kr/jrecruit/index.php", "_blank")
    // }

    let headerStyle = scrollPosition < 10 && !props.linkFlag ? styles.header : styles.change_header

    const [encodeRouter, setEncodeRouter] = useState(false)

    const handleEncodeRouter = () => {
        setEncodeRouter((pre)=> !pre)
    }

    return (
        <header className={headerStyle}>
            <div className={styles.container}>
                <Link href="/"><h1
                //  onClick={onLogoClick}
                 >Encoder Decoder</h1></Link>
                <ul id="gnb">
                    {/* <Link to="/"><li onClick={onHomeClick}>회사소개</li></Link> */}
                    {/* <Link href="/urlencode"><li>Encoder/Decoder</li></Link> */}
                    <li onClick={handleEncodeRouter}>Encoder/Decoder</li>
                    {/* <Link href="/decode"><li>Decoder</li></Link> */}
                    {/* <li onClick={openRecruitPage} style={{cursor: "pointer"}}>인재채용</li> */}
                </ul>

                <div className={styles.btnMenu}>
                    <Link href="/portfolio">
                        <div className={styles.icon}>
                            {/* <FontAwesomeIcon icon={faBriefcase} color="block" /> */}
                            FontAwesomeIcon
                        </div>
                    </Link>
                </div>
            </div>
            {/* <Outlet /> */}
            {/* asdf */}
            {encodeRouter ? 
                <div onClick={handleEncodeRouter}>
                    <ul>
                        <Link href="/urlencode">
                            <li>URL encode</li>
                        </Link>
                        <Link href="/urlencode">
                            <li>URL decode</li>
                        </Link>
                        <Link href="/urlencode">
                            <li>Base64 encode</li>
                        </Link>
                        <Link href="/urlencode">
                            <li>Base64 decode</li>
                        </Link>
                        <Link href="/urlencode">
                            <li>HTML encode</li>
                        </Link>
                        <Link href="/urlencode">
                            <li>HTML decode</li>
                        </Link>
                    </ul>
                </div> : null
            }
        </header>
    )
}

// export default React.memo(Header);
export default Navbar;