function Contact({ schoolName, onNavigate }) {
    return (
        <section>
            <h2>Contact Us</h2>

            <p>School Name: {schoolName}</p>

            <p>Location: Kigali, Rwanda</p>

            <p>
                Email:{' '}
                <a href="mailto:info@example.com">
                    info@example.com
                </a>
            </p>

            <button onClick={() => onNavigate('home')}>
                Return to Home
            </button>
        </section>
    );
}

export default Contact;