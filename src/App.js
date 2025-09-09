import Routes from './Routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
        
  );
}

export default App;
