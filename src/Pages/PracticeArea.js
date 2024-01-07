import styles from "./areaOfPractice.module.css";
import BusinessImage from "../Images/BusinessImage.png";
import PartnerShipLaw from "../Images/PartnershipLaw.png";
import RealEstateLaw from "../Images/RealEstateLaw.png";
import BusinessLaw from "../Images/BusinessLaw.png";
import LandLordDispute from "../Images/LandLoardDispute.png";
import ElderAbuse from "../Images/ElderAbuse.png";
import clsx from "clsx";

const cards = [
    {
        title:"Business Law",
        image: BusinessImage,
        className: styles.card01,
        titleClassName: styles.imageTitle01,
    },
    {
        title:"Partnership Law",
        image: PartnerShipLaw,
        className: styles.card02,
        titleClassName: styles.imageTitle02,
    },
    {
        title:"Real Estate Law",
        image: RealEstateLaw,
        className: styles.card03,
        titleClassName: styles.imageTitle03,
    },
    {
        title: "Business Law",
        image: BusinessLaw,
        className: styles.card04,
        titleClassName: styles.imageTitle04,
    },
    {
        title: "Landlord Dispute",
        image: LandLordDispute,
        className: styles.card05,
        titleClassName: styles.imageTitle05,
    },
    {
        title:"Elder Abuse",
        image: ElderAbuse,
        className: styles.card06,
        titleClassName: styles.imageTitle06,
    }
]

function AreaOfPractice () {
    return (
        <div className={styles.AreaContainer}>
            <div className={styles.headingText}>Area of Practice</div>
            <div className={styles.cardContiner}>
                {
                    cards.map((item, index) => (
                        <div className={clsx(item.className, styles.margin)}>
                            <img className={styles.images} src={item.image}  alt="law"/>
                            <span className={item.titleClassName}>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default AreaOfPractice;