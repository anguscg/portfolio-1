

import NavbarGlobal from "../components/Navbar.js";
import styles from '@/styles/Home.module.css'

import { useState } from 'react';
import { send } from 'emailjs-com';

export default function getinttouch() {

    const [toSend, setToSend] = useState({
        name: '',
        reply_to: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_4d3m1jz',
            'template_x52vyko2121',
            toSend,
            'ddYjsI04blvKTVzFD'
        ).then ((response) => {
            console.log('success', response.status, response.text);
            
        }).catch((err) => {
            console.log('failed', err);
            
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }

    return (
        <div className={styles.getintouchwrapper}>
            <NavbarGlobal />
            <div className={styles.contactpage}>
                <section className={styles.formcontainer}>
                    <h1>Get in touch</h1>
                    <p>Hi 👋 What's your name?</p>
                    <form className={styles.formSection} onSubmit={onSubmit}>
                        <p>Name:</p>
                        <input type="text" 
                            name="name" 
                            placeholder="John Smith" 
                            required 
                            value={toSend.name}
                            onChange={handleChange}
                            className={styles.forminput} />
                        <p>Company:</p>
                        <input name="reply_to"
                            placeholder="Your Email" 
                            className={styles.forminput} 
                            required
                            value={toSend.reply_to}
                            onChange={handleChange}
                            type="text" />
                        <p>Message:</p>
                        <textarea
                        type="text"
                        name="message"
                        value={toSend.message}
                        placeholder="Drag the bottom left corner to increase message area..." 
                        style={{color: "black"}} />

                        <div><button type="submit">Submit</button></div>
                    </form>
                </section>
            </div>
            
        </div>
        
    )
    
}

