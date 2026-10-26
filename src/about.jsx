function About({ schoolName }) {
    return (
        <section>
            <h2>About Our Class</h2>

            <p>
                This website was created to present information
                about the class, its students, and the subjects
                they study at {schoolName}.
            </p>

            <h3>About Software Development</h3>

            <p>
                Software Development is a trade that teaches
                students how to design, build, test, and maintain
                software applications. Students learn how to solve
                problems using programming languages and modern
                development tools.
            </p>

            <h3>Subjects and Skills We Learn</h3>

            <ul>
                <li>
                    <strong>Web Development:</strong> Building websites
                    using HTML, JavaScript, React, and JSX.
                </li>

                <li>
                    <strong>Programming:</strong> Writing algorithms,
                    functions, and programs to solve problems.
                </li>

                <li>
                    <strong>Database Management:</strong> Organizing,
                    storing, and retrieving information.
                </li>

                <li>
                    <strong>Software Testing:</strong> Finding errors
                    and checking that applications work correctly.
                </li>

                <li>
                    <strong>Version Control:</strong> Using Git and
                    GitHub to manage source code.
                </li>
            </ul>
        </section>
    );
}

export default About;