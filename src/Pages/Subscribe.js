import styles from "./subscribe.module.css";

function Subscribe () {

    return(
        <div className={styles.subscribeContainer}>
            <div className={styles.heading}>Subscribe Our Newsletter</div>
            <div className={styles.inputContainer}>
                <input placeholder="Enter your name" className={styles.nameInput}/>
                <input placeholder="Enter your email" className={styles.emailInput}/>
                <button className={styles.button}>Send</button>
            </div>
        </div>
    )

}

export default Subscribe