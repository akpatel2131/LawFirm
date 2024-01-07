import Logo from "../Images/Logo.svg";
import styles from "./header.module.css";

function Header() {
    return(
        <div className={styles.headerContainer}>
            <img src={Logo} alt="Website Logo"/>
            <div className={styles.headerItem}>
                <span>Home</span>
                <span>Attorny</span>
                <span>Practice Areas</span>
                <span>About us</span>
            </div>
            <button className={styles.headerButton}>Contact Now</button>
        </div>
    )

}

export default Header;