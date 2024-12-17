import React, { useState } from "react";

const initialStudents = [{ imie: "Jan", nazwisko: "Nowak", rocznik: 2002 }];

const StudentManager: React.FC = () => {
    const [students, setStudents] = useState(initialStudents);

    const addStudent = (student: {
        imie: string;
        nazwisko: string;
        rocznik: number;
    }) => {
        setStudents([...students, student]);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Rocznik</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.imie}</td>
                            <td>{student.nazwisko}</td>
                            <td>{student.rocznik}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dodawanie addStudent={addStudent} />
        </div>
    );
};

const Dodawanie: React.FC<{
    addStudent: (student: {
        imie: string;
        nazwisko: string;
        rocznik: number;
    }) => void;
}> = ({ addStudent }) => {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [rocznik, setRocznik] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            imie &&
            nazwisko &&
            !isNaN(Number(rocznik)) &&
            Number(rocznik) > 1900
        ) {
            addStudent({ imie, nazwisko, rocznik: Number(rocznik) });
            setImie("");
            setNazwisko("");
            setRocznik("");
        } else {
            alert(
                "Wszystkie pola muszą być wypełnione, a rocznik musi być liczbą."
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Imię"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nazwisko"
                value={nazwisko}
                onChange={(e) => setNazwisko(e.target.value)}
            />
            <input
                type="text"
                placeholder="Rocznik"
                value={rocznik}
                onChange={(e) => setRocznik(e.target.value)}
            />
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default StudentManager;
