import React from 'react';

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Students: Student[] = [
  { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 2000 },
  { imie: 'John', nazwisko: 'Doe', rocznik: 2001 },
  { imie: 'Jan', nazwisko: 'Nowak', rocznik: 2002 },
];

const Studenci: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Rocznik</th>
        </tr>
      </thead>
      <tbody>
        {Students.map((student, index) => (
          <tr key={index}>
            <td>{student.imie}</td>
            <td>{student.nazwisko}</td>
            <td>{student.rocznik}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Studenci;