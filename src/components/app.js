import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import LeftNav from './left-nav';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <LeftNav />
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
