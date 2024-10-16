import { useEffect, useState } from "react";
import "./App.css";
const inicialState = Array(9).fill("");

function App() {
  const [cajas, setCajas] = useState([...inicialState]);
  const [esX, setEsX] = useState(true);
  const [status, setStatus] = useState("");

  //verifica el ganador comparando
  const determinarGanador = (cajas) => {
    const ganador = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [2, 5, 8],
      [6, 7, 8],
      [1, 4, 7],
      [6, 4, 2],
      [3, 4, 5],
    ];
    for (let i = 0; i < ganador.length; i++) {
      const [x, y, z] = ganador[i];
      if (cajas[x] && cajas[x] === cajas[y] && cajas[x] === cajas[z]) {
        return cajas[x];
      }
    }
    return null;
  };
  const handleClick = (i) => {
    const newCajas = [...cajas];

    if (determinarGanador(newCajas) || newCajas[i]) return; // una vez que esta todo lleno no deja hacer click

    if (esX) {
      newCajas[i] = "X";
      setEsX(false);
    } else {
      newCajas[i] = "O";
      setEsX(true);
    }
    setCajas([...newCajas]);
  };
  const reiniciar = () => {
    setCajas(inicialState);
    setEsX(true);
  };
  useEffect(() => {
    if (!determinarGanador(cajas) && cajas.every((item) => item !== "")) {
      setStatus("El tablero esta lleno! Por favor reinicia el juego... ");
    } else if (determinarGanador(cajas)) {
      setStatus(`El Ganador es ${determinarGanador(cajas)}`);
    } else {
      setStatus(`El proximo jugador es ${esX ? "X" : "O"}`);
    }
  }, [cajas, esX]);

  return (
    <>
      <h2 className="titulo">Juego 3 en linea</h2>
      <div className="contenedor">
        {cajas.map((caja, index) => (
          <div
            className="cajita"
            key={index}
            onClick={() => handleClick(index)}
          >
            <h2>{caja == "X" || caja == "O" ? caja : ""}</h2>
          </div>
        ))}
      </div>
      <div className="contenedor-btns">
        <button onClick={reiniciar}>Reiniciar el juego</button>
      </div>
      <div>
        <h1>{status}</h1>
      </div>
    </>
  );
}

export default App;
