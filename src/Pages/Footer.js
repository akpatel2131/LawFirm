import styles from "./footer.module.css";
import Logo from "../Images/Logo.svg";
import Instagram from "../Images/Instagram.svg";
import Facebook from "../Images/Facebook.svg";
import Twitter from "../Images/Twitter.svg";
import Pinterest from "../Images/Pinterest.svg";


function Footer () {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.topContainer}>
                <img src={Logo} alt="Website Logo"/>
                <div className={styles.headerItem}>
                    <span>Home</span>
                    <span>Attorny</span>
                    <span>Practice Areas</span>
                    <span>About us</span>
                </div>
                <div className={styles.headerItem}>
                    <img src={Instagram} alt="Instagram"/>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Twitter} alt="Twitter"/>
                    <img src={Pinterest} alt="Pinterest"/>
                </div>
            </div>
            <div className={styles.policiesContainer}>
                <span>© 2020 Acme. All right reserved</span>
                <span>Privacy Policy</span>
                <span>Terms Of Service</span>                
            </div>
        </div>
    )
}
export default Footer;