import React from "react";
import Produkt from "./Produkt";

const NowyKoszyk: React.FC = () => {
    const produkty = ["Chleb", "Mleko", "Jajka", "Ser", "Jabłka"];

    return (
        <div>
            <h2>Koszyk</h2>
            {produkty.map((nazwa, index) => (
                <Produkt key={index} nazwa={nazwa} />
            ))}
        </div>
    );
};

export default NowyKoszyk;
