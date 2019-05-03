import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import LeftNav from './left-nav';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
