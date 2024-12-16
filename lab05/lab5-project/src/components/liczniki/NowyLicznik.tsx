import React, { useState } from "react";
import Przycisk from "./Przycisk";

const NowyLicznik: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <div>Licznik: {count}</div>
            <Przycisk onClick={increment} />
        </div>
    );
};

export default NowyLicznik;
