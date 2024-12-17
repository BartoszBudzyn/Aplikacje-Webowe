import React from "react";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
// import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import Licznik from "./components/efekty/Licznik";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarze from "./components/produkty/Komentarze";

const App: React.FC = () => {
    return (
        <div>
            <h1>Zadania</h1>
            <NowyKoszyk />
            <br />
            {/* <Licznik />
            <br /> */}
            <NowyLicznik />
            <br />
            <Formularz />
            <br />
            <Haslo />
            <br />
            <Logowanie />
            <br />
            <Ternary />
            <br />
            <Aktualizacja />
            <br />
            <Studenci />
            <br />
            <StudentManager />
            <br />
            <Licznik />
            <br />
            <Tytul />
            <br />
            <Odliczanie />
            <br />
            <Komentarze />
            <br />
        </div>
    );
};

export default App;
