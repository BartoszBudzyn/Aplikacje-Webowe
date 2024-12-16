import React, { useState } from "react";

const Licznik: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Licznik: {count}</div>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    );
};

export default Licznik;
