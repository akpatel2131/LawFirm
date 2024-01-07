import styles from "./faq.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AccordionItems = [
    {
        question: "Do i need personal injusry report ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
        question: "How much is my case worth ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
        question: "What should i do right after my car accident ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
        question: "How much is my case worth ?",
        answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    }
]

function Faq () {
    return (
        <div className={styles.faqContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.heading}>FAQs</div>
                <p className={styles.subtitle}>
                    Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. 
                </p>
            </div>
            <div className={styles.rightContainer}>
            {AccordionItems.map((item,index)=>(
                <Accordion key={index}>
                    <AccordionSummary
                    expandIcon={<AddCircleIcon sx={{"color": "white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ "opacity": "0.3"}}>
                        {item.answer}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            </div>
        </div>
    )
}

export default Faq