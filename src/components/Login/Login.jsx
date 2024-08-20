import { FaLock, FaUser } from "react-icons/fa";
import { useState, useRef } from "react";

import "./Login.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passIsClosed, setPassIsClosed] = useState(false)

  const inputRef = useRef(null)

  const passShow = () => {
    if(inputRef.current.type === "password") {
      setPassIsClosed(true)
      inputRef.current.type === "text"
    } else {
      setPassIsClosed(false)
      inputRef.current.type === "password"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername("")
    setPassword("")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Faça seu Login</h1>
        <div className="input-field">
          <input type="email" placeholder="Digite o seu e-mail" value={userName} onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className="icon" onClick={() => {setUsername("")}}/>
        </div>
        <div className="input-field">
          <input ref={inputRef} type={passIsClosed ? "text" : "password"} placeholder="Insira a sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className="icon" onClick={passShow}/>
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a Senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>Não tem uma conta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
