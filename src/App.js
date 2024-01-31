import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Loading from './components/Loading.js';
import Body from './components/Body.js';
import './styles/app.scss';

function App() {

  const [loading, setLoading] = useState(false);

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
        <Body />
        <Footer />
      </div>
    );
  }

  
}

export default App;
