import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <UserProfile />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
