

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque, quam distinctio neque vel accusamus. </p>
                    <form className={styles.formSection} action="">
                        <label htmlFor="" className={styles.formlabel}>Name:</label>
                        <input type="text" className={styles.forminput}/>
                        <label htmlFor="" className={styles.formlabel}>Company:</label>
                        <input placeholder="optional" className={styles.forminput} type="text"/>
                        <input className={styles.messageinput} placeholder="message..." type="text"/>
                    </form>
                </section>
            
            
        </div>
        </div>
        
    )
    
}