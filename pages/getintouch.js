import NavbarGlobal from "../components/Navbar.js";
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { Modal, Button, Text } from "@nextui-org/react";

export default function getinttouch() {

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateKey = process.env.NEXT_PUBLIC_TEMPLATEKEY;
    const userID = process.env.NEXT_PUBLIC_USERID;


    const [toSend, setToSend] = useState({
        name: '',
        reply_to: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            serviceID,
            templateKey,
            toSend,
            userID
        ).then ((response) => {
            console.log('success', response.status, response.text);
            
        }).catch((err) => {
            console.log('failed', err);
            
        });
        
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    };

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };



    

    return (
        <div className={styles.getintouchwrapper}>
            <NavbarGlobal />
            <div className={styles.contactpage}>
                <section className={styles.formcontainer}>
                    <h1 className={styles.contactTitle}>Get in touch</h1>
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
                        <p>Email</p>
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
                            className={styles.messageinput}
                            name="message"
                            onChange={handleChange}
                            value={toSend.message}
                            placeholder="Your message..."
                        />

                        <div className={styles.formButton}>
                            <Button type="submit" color="gradient" shadow onPress={handler}>Submit</Button>
                        </div>
                    </form>
                </section>
            </div>


            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Thanks for getting in contact!
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text>I'll get back to you shortly</Text>
                </Modal.Body>
                <Modal.Footer>
                    <Link href="/">
                        <Button auto flat color="error" onPress={closeHandler}>
                            Close
                        </Button>
                    </Link>
                    
                </Modal.Footer>
            </Modal>

        </div>
        
    )
    
}

