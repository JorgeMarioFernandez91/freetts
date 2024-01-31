import './App.css';
import './components/Form.js';
import Form from './components/Form.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tutorial from './components/Tutorial.js';
import { useState } from 'react';
import Loading from './components/Loading.js';

function App() {

  const [loading, setLoading] = useState(true);

  // simulate a 4 second loading time
  setTimeout(function() {
    setLoading(false);  
  }, 4000);

  if (loading) {
    return (
      <div className="app">
        <Loading handleLoading={loading}/>
      </div>
    );
  }
  else {
    return (
      <div className="app">
        <Header />
        <Form />
        <Tutorial />
        <Footer />
      </div>
    );
  }

  
}

export default App;
