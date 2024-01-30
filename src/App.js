import './App.css';
import './components/Form.js';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tutorial from './components/Tutorial.js';

function App() {

  return (
    <div className="app">
      <Header />
      <Form />
      <Tutorial />
      <Footer />
    </div>
  );
}

export default App;
