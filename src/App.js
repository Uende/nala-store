import Routes from './routes'
import './GlobalStyle.css';
import Footer from './pages/Home/components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Home />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
