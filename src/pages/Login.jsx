import { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ username, password });
    const isLogin = await login(username, password);

    if (isLogin) {
      setUsername("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <Layout>
      <div className="form-container">
        <h1>Inicia sesión</h1>

        <section>
          <h2>Hola, bienvenido de nuevo</h2>
          <p>johnd, m38rmF$</p>
          <form onSubmit={handleLogin}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="text-gray-700" 
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="text-gray-700"
              />
            </div>
            <button type="submit" className="btn">Ingresar</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Login;