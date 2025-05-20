import React from 'react';
import Header from './Components/header';
import HowItWorks from './Components/Steps';
import CheckScore from './Components/CheckScoreButton';
function App() {
  return (
    <div>
      <Header/>
      <HowItWorks/>
      <CheckScore/>
    </div>
  );
}
export default App;