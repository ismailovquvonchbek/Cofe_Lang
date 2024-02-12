import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Our from './Components/Our/Our';
import Maps from './Components/Maps/Maps';
import Ani from './Components/Ani/Ani';
import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  const [lang, setLangs] = React.useState('en')
  return (
    <>
      <Header lang={lang} setLangs={setLangs}/>
      <Hero lang={lang} setLangs={setLangs}/>
      <Our lang={lang} setLangs={setLangs}/>
      <Maps lang={lang} setLangs={setLangs}/>
      <Ani lang={lang} setLangs={setLangs}/>
      <Footer lang={lang} setLangs={setLangs}/>
    </>
  );
}

export default App;
