import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length < 6 || password.length < 6) {
      setMessage("Kullanıcı adı ve şifre en az 6 karakter olmalıdır.");
      return;
    }

    if (username.length > 20 || password.length > 20) {
      setMessage("Kullanıcı adı ve şifre en fazla 20 karakter olabilir.");
      return;
    }

    const existingAccount = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (existingAccount) {
      setMessage(`Hoş geldiniz, ${username}!`);
      setUsername("");
      setPassword("");
      setMessage("");
      return;
    }

    setAccounts([...accounts, { username, password }]);
    setUsername("");
    setPassword("");
    setMessage("Yeni hesap oluşturuldu.");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setMessage("");
  };

  return (
    <form
      className="flex flex-col border-solid border p-10"
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      {message && <div className="text-red-600 mb-4">{message}</div>}
      <input
        value={username}
        type="text"
        onChange={handleUsernameChange}
        className="mb-2 p-2 border"
      />
      <input
        value={password}
        type="password"
        onChange={handlePasswordChange}
        className="mb-4 p-2 border"
      />
      <button
        className="self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default App;
