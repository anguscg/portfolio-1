

import NavbarGlobal from "../components/Navbar.js";
import styles from '@/styles/Home.module.css'
import { Container } from "@nextui-org/react";

export default function getinttouch() {

    return (
        <div className={styles.getintouchwrapper}>
            <NavbarGlobal />
            <div className={styles.contactpage}>
                <section className={styles.formcontainer}>
                    <h1>Get in touch</h1>
                    <p>Please fill in your details and I'll be sure to get back to you as soon as I can 😁</p>
                    <form className={styles.formSection} action="post">
                        <p>Name:</p>
                        <input type="text" required id="name" className={styles.forminput} />
                        <p>Company:</p>
                        <input placeholder="optional" className={styles.forminput} required id="company" type="text" />
                        <p>Message:</p>
                        <input minLength="20" required className={styles.messageinput} type="text" />
                        <div><button>Submit</button></div>
                    </form>
                </section>
            </div>
        </div>
        
    )
    
}

