import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/Navbar';
import Error from './pages/Error';
import { Home } from './pages/Home';
import Nosotros from './pages/Nosotros';
import Perfil from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/colaboradores' element={<Nosotros />} />
            <Route path='/perfil' element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
