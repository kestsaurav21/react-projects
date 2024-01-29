import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage, MdCall, MdMail } from "react-icons/md";




const ContactForm = () => {
    console.log(styles)
  return (
    <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px" />} />
            <Button text="VIA CALL" icon={<MdCall fontSize="24px"/>} />
            </div>

            <Button isOutline={true}
            text="VIA Email Form" 
            icon={<MdMail fontSize="24px"/>} />

        
        </div>
        <div className={styles.contact_image}>
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default ContactForm