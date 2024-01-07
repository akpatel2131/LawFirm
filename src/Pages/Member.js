import styles from "./member.module.css";
import Danial from "../Images/Danial.svg";
import Sanfole from "../Images/Sanfole.svg";
import Cesforila from "../Images/Cesforila.svg";
import Collean from "../Images/Collean.svg";
import Haldone from "../Images/Haldone.svg";
import Nik_jeo from "../Images/Nik_jeo.svg";
import clsx from "clsx";



const cards = [
    {
        title: "Danial Def",
        subtitle: "301 Cases",
        image: Danial,
    },
    {
        title: "Sanfole",
        subtitle: "850 Cases",
        image: Sanfole,
    },
    {
        title: "Cesforila",
        subtitle: "470 Cases",
        image: Cesforila,
    },
    {
        title: "Colleen",
        subtitle: "180 Cases",
        image: Collean,
    },
    {
        title: "Haldone",
        subtitle: "212 Cases",
        image: Haldone,
    },
    {
        title: "Nik Jeo",
        subtitle: "350 Cases",
        image: Nik_jeo,
    },
]

function Member () {
    return (
        <div className={styles.memberContainer}>
            <div className={styles.headertext}>Our Team</div>
            <div className={styles.cardContainer}>
                {cards.map((item,index)=>(
                    <div className={clsx(styles.card, {
                        [styles.highlightCard] : index === 1,
                    })} key={index}>
                        <img src={item.image} alt="MemeberImage" />
                        <div className={styles.info}>
                            <div className={styles.heading}>{item.title}</div>
                            <div className={styles.subtitle}>{item.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Member;