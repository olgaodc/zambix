import basicStyles from '../../basicStyles.module.css';
import styles from './Navbar.module.css';
import {useState} from 'react';

const DesktopMenu = () => {
    return(
        <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
                <a className={styles.itemLink} href="/">About</a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.itemLink} href="/artWorks">Art Works</a>
            </li>
            <li className={styles.navbarItem}>
                <a className={styles.itemLink} href="/contacts">Contacts</a>
            </li>
        </ul>
    )
}


const MobileMenu = (props) => {

    return(
        <div className={`${styles.mobileMenuWrapper} ${props.isMenuOpen ? styles.menuOpened : styles.menuClosed}`}>
            <ul className={styles.mobileMenu}>
                <li className={styles.navbarItem}>
                    <a className={styles.itemLink} href="/">About</a>
                </li>
                <li className={styles.navbarItem}>
                    <a className={styles.itemLink} href="/artWorks">Art Works</a>
                </li>
                <li className={styles.navbarItem}>
                    <a className={styles.itemLink} href="/contacts">Contacts</a>
                </li>
            </ul>
        </div>

    )
}



const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navbarWrapper}>
            <div className={basicStyles.container}>
                <div className={styles.navbar}>
                    <a href="/" className={styles.logoWrapper}>
                        <img className={styles.logoImage} src="https://cdn1.iconfinder.com/data/icons/splash-of-fruit/128/fruiticons_buttons_pineapple-256.png" alt="logo"/>
                        <span className={styles.logoText}>Zambix</span>
                    </a>
                    <DesktopMenu/>
                    <div onClick={() => {
                        setMenuOpen((prevState) => !prevState);
                    }} className={styles.hamburgerMenu}>
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                        <div className={styles.hamburgerLine}></div>
                    </div>
                </div>
                <MobileMenu isMenuOpen={isMenuOpen}/>
            </div>
        </div>

    );
}

export default Navbar;