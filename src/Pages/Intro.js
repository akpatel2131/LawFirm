import styles from "./intro.module.css";
import Message from "../Images/Message.svg";
import Human from "../Images/Human.png"

function Intro () {
    return(
        <div className={styles.introContainer}>
            <div className={styles.infoSection}>
                <div className={styles.titleText}>You don't have to</div>
                <div className={styles.HighlightedText}>Fight them Alone.</div>
                <p className={styles.subtittleText}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos 
                    faucibus himenaeos tortor eget, 
                    hac massa gravida arcu interdum proin curae.
                </p>
                <div className={styles.inputContainer}>
                    <img className={styles.image} src={Message} alt="Message logo" />
                    <input className={styles.input} placeHolder="Enter your Email Address"/>
                    <button className={styles.button}>Let's talk</button>
                </div>
            </div>
            <div className={styles.imageSection}>
                <img className={styles.humanImage} src={Human} alt="human" />
            </div>
        </div>
    )

}

export default Intro;