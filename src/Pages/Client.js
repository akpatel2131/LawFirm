import styles from "./client.module.css";
import RightArrow from "../Images/RightArrow.svg";
import LeftArrow from "../Images/LeftArrow.svg";
import Client01 from "../Images/Client01.svg";
import Client02 from "../Images/Client02.svg";
import Client03 from "../Images/Client03.svg";
import clsx from "clsx";

const cardsDetails = [
    {
        image: Client01,
        heading: "Jane Cooper",
        subHeading: "Ceo of Hunt",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
        image: Client02,
        heading: "Devan Lane",
        subHeading: "Ceo of Hunt",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    },
    {
        image: Client03,
        heading: "Robber Fox",
        subHeading: "Ceo of Hunt",
        subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
    }
]

function ClientInfo () {

    return (
        <>
            <div className={styles.infoContainer}>
                <div className={styles.rightContainer}>
                    <div>
                    What says our happy clients
                    </div>
                </div>
                <div className={styles.leftContainer}>
                    <div className={styles.arrowBox}>
                        <img className={styles.arrowImage} src={LeftArrow} alt="Left arrow" />
                    </div>
                    <div className={clsx(styles.arrowBox, styles.rightArrow)}>
                        <img className={styles.arrowImage} src={RightArrow} alt="Right arrow" />
                    </div>
                </div>
            </div>
            <div className={styles.cardContainer}>
                {cardsDetails.map((item, index)=>(
                    <div className={styles.card} key={index}>
                        <img src={item.image} alt="client logo" className={styles.image}/>
                        <div className={styles.cardTitle}>{item.heading}</div>
                        <div className={styles.cardSubheading}>{item.subHeading}</div>
                        <p className={styles.subtitle}>{item.subtitle}</p>
                    </div>
                    ))}
                </div>
        </>
    )

}

export default ClientInfo;