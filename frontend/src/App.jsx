import { useState } from "react";
import axios from "axios";

function App() {
  const [ip, setIp] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIP = async () => {
    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_REACT_API_URL;
    const res = await axios.get(apiUrl);
    setIsLoading(false);
    setIp(res.data.ip);
  };
  return (
    <div className="container">
      {ip ? <h1>Seu ip é: {ip}</h1> : ""}
      <button onClick={() => getIP()}>
        {isLoading ? "Carregando..." : "Qual meu ip?"}
      </button>
    </div>
  );
}

export default App;
