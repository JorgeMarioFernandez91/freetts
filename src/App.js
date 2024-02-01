import './App.css';
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Loading from './components/widgets/Loading.js';
import Body from './components/Body.js';
import './styles/app.scss';

/**
 * Application begins here
 * @returns 
 */
function App() {

  const [loading, setLoading] = useState(true);

  const handleLoading = (value) => {
    setLoading(value);
  }

  // simulate a 4 second loading time for flair
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
        <Header handleLoading={handleLoading} />
        <Body />
        <Footer />
      </div>
    );
  }

  
}

export default App;
