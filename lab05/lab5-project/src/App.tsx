import React from "react";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";

const App: React.FC = () => {
    return (
        <div>
            <h1>Zadania</h1>
            <NowyKoszyk />
            <br />
            <Licznik />
            <br />
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
        </div>
    );
};

export default App;
