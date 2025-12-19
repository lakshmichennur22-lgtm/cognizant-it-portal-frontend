import { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            ) : (
                <p className="thanks-msg">Thanks for contacting us! Our team will connect with you shortly.</p>
            )}
        </section>
    );
};

export default Contact;
