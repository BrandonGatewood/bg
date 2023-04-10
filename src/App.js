/*import logo from './logo.svg';*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import BrowserRouter from 'react-router-dom/BrowserRouter'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <Banner />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
