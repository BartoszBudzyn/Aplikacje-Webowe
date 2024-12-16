import React from 'react';
import Produkt from './produkt';

const Koszyk: React.FC = () => {
  return (
    <div>
      <h2>Koszyk</h2>
      <Produkt nazwa="Chleb" />
      <Produkt nazwa="Mleko" />
      <Produkt nazwa="Ser" />
      <Produkt nazwa="Jajka" />
      <Produkt nazwa="Jabłka" />
    </div>
  );
};

export default Koszyk;