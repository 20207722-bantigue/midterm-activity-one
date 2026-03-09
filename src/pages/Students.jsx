import { useState, useEffect } from "react";

const Students = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const studentData = [
            { id: 1, name: "Juan Dela Cruz", course: "BSIT" },
            { id: 2, name: "Maria Santos", course: "BSCS" },
            { id: 3, name: "Pedro Reyes", course: "BSIS" },
            { id: 4, name: "Ana Lopez", course: "BSIT" },
            { id: 5, name: "Carlos Garcia", course: "BSCS" },
            { id: 6, name: "Liza Mendoza", course: "BSIS" },
            { id: 7, name: "Mark Ramos", course: "BSIT" },
            { id: 8, name: "Ella Torres", course: "BSCS" },
            { id: 9, name: "Paul Flores", course: "BSIS" },
            { id: 10, name: "Nina Castillo", course: "BSIT" }
        ];

        setStudents(studentData);
    }, []);

    return (
        <div>
            <h2>Student List</h2>

            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} - {student.course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Students;