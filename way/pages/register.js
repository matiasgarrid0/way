import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    axios
      .post("/api/register", { username, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <button type="submit">registrarse</button>
      </form>
    </div>
  );
}
