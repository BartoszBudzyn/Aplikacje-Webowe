import React, { useState } from 'react';

const Logowanie: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const isFormValid = () => {
    return username && password && confirmPassword;
  };

  const handleLogin = () => {
    if (password !== confirmPassword) {
      alert('Hasła nie są zgodne');
    } else {
      alert('Zalogowano poprawnie');
    }
  };

  return (
    <div>
      <div>
        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Hasło:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <label>
          Powtórz Hasło:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
      </div>
      <button onClick={handleLogin} disabled={!isFormValid()}>
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;