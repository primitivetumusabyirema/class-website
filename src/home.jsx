import { useState } from 'react';

function Home({ schoolName, className, onNavigate }) {
    const [clickCount, setClickCount] = useState(0);

    return (
        <section>
            <h2>Welcome to Our Class Website</h2>

            <p>Welcome to {schoolName}!</p>

            <p>Class: {className}</p>

            <p>
                We are students learning software development,
                programming, web design, and problem-solving.
                This website introduces our class, our students,
                and the subjects we study.
            </p>

            <h3>Explore Our Website</h3>

            <p>
                <button onClick={() => onNavigate('about')}>
                    Learn About Our Class
                </button>
            </p>

            <p>
                <button onClick={() => onNavigate('students')}>
                    View Students
                </button>
            </p>

            <p>
                <button onClick={() => onNavigate('contact')}>
                    Contact Our School
                </button>
            </p>

            <hr />

            <h3>React Click Counter</h3>

            <p>You have clicked the button {clickCount} times.</p>

            <button onClick={() => setClickCount(clickCount + 1)}>
                Click Me
            </button>

            <button onClick={() => setClickCount(0)}>
                Reset Counter
            </button>
        </section>
    );
}

export default Home;