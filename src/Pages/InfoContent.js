import styles from "./infoContent.module.css";
import gift from "../Images/gift.svg";
import clsx from "clsx";
import Divider from '@mui/material/Divider';

const cardsDetails = [
    {
        title: "98% Success rate",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
        title: "100% Success rate",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
        title: "100% Success rate",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    }
]

function InfoContent () {

    return (
        <>
            <div className={styles.infoContainer}>
                <div className={styles.rightContainer}>
                    <div>
                    Let's Introduce Ourself
                    </div>
                </div>
                <Divider className={styles.divider} orientation={"vertical"}/> 
                <div className={styles.leftContainer}>
                    <div className={styles.heading}>Criminal Lawyer</div>
                    <p className={styles.paragraph}>
                        Amet minim mollit non deserunt ullamco est
                        sit aliqua dolor do amet sint. Velit officia consequatduis
                        enim velit mollit Exercitation.
                    </p>
                </div>
            </div>

            <div className={styles.detailContainer}>
                <div className={styles.detailHeading}>Why choose us? </div>
                <div className={styles.cardContainer}>
                    {cardsDetails.map((item, index)=>(
                        <div className={clsx(styles.card, {
                            [styles.cardBg] : (index + 1) % 2 === 0,
                        })}>
                            {/* Image */}
                            <div className={styles.imageContainer}>
                                <img src={gift} alt="gift logo" className={styles.image}/>
                            </div>
                            <div className={styles.cardTitle}>{item.title}</div>
                            <p className={styles.subtitle}>{item.subtitle}</p>
                            <button className={styles.button}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default InfoContent