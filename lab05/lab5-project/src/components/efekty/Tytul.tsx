import React, { useState, useEffect } from 'react';

const Tytul: React.FC = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <input 
      type="text" 
      value={title} 
      onChange={handleChange} 
      placeholder="Enter page title" 
    />
  );
};

export default Tytul;