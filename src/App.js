import './App.css';
import { Heading, Flex } from '@chakra-ui/react';  // Importa Box, Heading y Flex de Chakra UI
import Boton from './components/Boton/Boton';
import ContadorResponsive from './components/Contador/ContadorResponsive';
import logo from './images/logo.png';
import { useState } from 'react';

function App() {

  const [ numClicks, setNumClicks] = useState (0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const decrementar = () => {
    if (numClicks > 0) {
      setNumClicks(numClicks - 1)
    }
  };

  const reiniciar = () => {
    setNumClicks(0);
  };


  return (
    <div className="App">
      <div className="Logo-contenedor">
        <img 
          className="Logo Borde-logo"
          src={logo}
          alt='logo'
        />
      </div>
      <Heading as="h2" mb="4" className='Titulo'>
        Contador
      </Heading>
      <Flex direction="column" align="center">
        <ContadorResponsive numClicks={numClicks} />
        <Flex mt="4" justify="center">
          <Boton texto="Incrementar" incrementar manejarClick={manejarClick} style={{ margin: '10px' }} />
          <Boton texto="Decrementar" incrementar={false} manejarClick={decrementar} style={{ margin: '10px' }} />
          <Boton texto="Reiniciar" incrementar manejarClick={reiniciar} style={{ margin: '10px' }} />
        </Flex>
      </Flex>

      <footer className="Footer">
        <p>&copy; 2023 Cristina Benitez</p>
      </footer>
      
    </div>
  );
}

export default App;
