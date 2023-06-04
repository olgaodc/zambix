import basicStyles from '../../basicStyles.module.css';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={basicStyles.container}>
                <div className={styles.footer}>
                    <span className={styles.footerInfo}>©All Rights Reserved | 2023 Zambix</span>
                </div>
            </div>
        </div>
    );
}


export default Footer;