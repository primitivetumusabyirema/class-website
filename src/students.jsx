function Students({ className }) {
    const students = [
        {
            id: 'SD001',
            name: 'Student One',
            trade: 'Software Development',
        },
        {
            id: 'SD002',
            name: 'Student Two',
            trade: 'Software Development',
        },
        {
            id: 'SD003',
            name: 'Student Three',
            trade: 'Software Development',
        },
        {
            id: 'SD004',
            name: 'Student Four',
            trade: 'Software Development',
        },
        {
            id: 'SD005',
            name: 'Student Five',
            trade: 'Software Development',
        },
    ];

    return (
        <section>
            <h2>Our Students</h2>

            <p>Class: {className}</p>

            <p>
                The following is a list of students in our
                Software Development class.
            </p>

            {students.map((student) => (
                <article key={student.id}>
                    <h3>{student.name}</h3>

                    <p>Student ID: {student.id}</p>

                    <p>Trade: {student.trade}</p>

                    <hr />
                </article>
            ))}

            <p>Total Students: {students.length}</p>
        </section>
    );
}

export default Students;