import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages.js/Home';
import './app.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes >
      <Route exact path='/' element={<Home />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
