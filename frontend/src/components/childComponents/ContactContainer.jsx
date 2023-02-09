import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../../styles/Contact.css"

const ContactContainer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_kza31jy';
        const templateId = 'template_vryid6r';
        const publicKey = 'z6Vy2WHi_stfn_ING';
        const templateParams = {
            firstName,
            lastName,
            email,
            contact,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => console.log(response.text))
            .then(error => console.log(error));

        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setMessage('');
        setEmailSent(true);

    };


    return (
        <div className="ContactContainer">

            <div className="container_">
                <p>FILL THE FORM BELOW</p>
                <h1>Contact us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            <div className="underline"></div>
                            <label >First Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Email ID</label>
                        </div>
                        <div className="input-data">
                            <input type="text" value={contact} onChange={e => setContact(e.target.value)} required />
                            <div className="underline"></div>
                            <label >Phone no.</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea value={message} onChange={e => setMessage(e.target.value)} rows="8" cols="80" required></textarea>
                            <br />
                            <div className="underline"></div>
                            <label >How can we help you ?</label>
                            <br />
                        </div>
                    </div>
                    <div className='contactbtn-div'>
                        <button type='submit' className='submitbtn contactbtn bg-blue-700'>{emailSent ? "sent" : "send"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactContainer