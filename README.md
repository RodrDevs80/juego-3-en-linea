# Juego de Tres en Línea

## Descripción

Esta es una simple aplicación de **Tres en Línea** desarrollada en React. Los jugadores se turnan para colocar "X" o "O" en un tablero de 3x3, y el objetivo es alinear tres de sus símbolos en fila, columna o diagonal.

- Instalación

## Clona el repositorio:

- git clonehttps://github.com/RodrDevs80/juego-3-en-linea.git
  Usa el código con precaución.

## Instala las dependencias:

- cd tres-en-linea
- npm install
  Usa el código con precaución.

## Ejecución

Inicia el servidor de desarrollo:

- npm run dev
  Usa el código con precaución.

## Uso

- Coloca tu jugada: Haz clic en cualquier caja del tablero para colocar tu símbolo ("X" o "O").
- Reiniciar el juego: Si quieres jugar nuevamente, haz clic en el botón "Reiniciar el juego".
- Estado del juego: El estado del juego se mostrará en la parte inferior, indicando quién es el próximo jugador o si hay un ganador.

## Descripción del Código

### Componentes principales:

### Estado del Tablero:

- cajas: Es un array que representa el estado del tablero de 3x3.
- esX: Un booleano que determina si el próximo jugador es "X" (true) o "O" (false).
- status: Una cadena que muestra el estado actual del juego (próximo jugador o el ganador).

### Funciones:

- determinarGanador(cajas): Evalúa todas las combinaciones ganadoras posibles y retorna el símbolo del ganador si hay uno.
- handleClick(i): Se activa al hacer clic en una de las casillas del tablero. Actualiza el estado del tablero y alterna entre los jugadores.
- reiniciar(): Reinicia el estado del tablero para comenzar un nuevo juego.

### Efecto (useEffect):

Se utiliza para actualizar el estado del juego en función del estado del tablero. Verifica si hay un ganador o si el tablero está lleno.

### Lógica del Juego:

El juego sigue las reglas tradicionales de Tres en Línea. Los jugadores se alternan colocando "X" o "O" en las casillas vacías del tablero.
Si un jugador alinea tres símbolos (horizontal, vertical o diagonal), se declara un ganador.
Si todas las casillas están llenas sin un ganador, se declara un empate y el jugador debe reiniciar el juego.

### Estilos

Puedes personalizar los estilos del juego en el archivo App.css. Actualmente, se incluyen los siguientes estilos básicos:

- .titulo: Estilo para el título del juego.
- .contenedor: Para organizar las cajas del tablero.
- .cajita: Estilo de las casillas del tablero.
- .contenedor-btns: Contenedor para el botón de reinicio.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolioweb-sertec.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/carlos-rodriguez-developerwebjr)
[![Github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://github.com/RodrDevs80)

## 🛠 Skills

Vite React Javascript 👨‍💻

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
