import MovieCard from './components/Moviecard';
import Home from './pages/Home'
import "./css/App.css";
import{Routes,Route} from 'react-router-dom';
import Favorites from './pages/Favorite';
import NavBar from "./components/NavBar";
import { MovieProvider } from './context/context';

function App() {
 
  return(
   <>
   <MovieProvider>
     <NavBar/>
      <main className="main-content">
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/favorites'element={<Favorites/>}/>
          </Routes>
      </main>
    </MovieProvider>
  
</>
      
  ); 
}

export default App
