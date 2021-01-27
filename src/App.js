import './App.css';
import Header from './components/Header';
import TwoTruthsLie from './components/challenges/day01/TwoTruthsLie';
import Footer from './components/challenges/day01/Footer';
import Home from './components/challenges/day01/Home';

function App() { // this is a root component

  // JS above the return statement can be injected into JSX using {}
  const name = 'Bob';
  
  return (
    // Div to Div is considered one JSX element. You can only return one element!
    <div className="App">
      {/* className is a JSX attribute - class is already used by HTML/CSS */}
      <Home />
      <h1>Welcome to React, {name}!</h1>
      <h2>We just modified our root App component.</h2>
      <p>Create ./components/challenges/day01 folder.</p>
      <p>Create a component with h1 tag of your name,
        p tag with description of yourself, and an 
        unordered list of two truths and a lie.
      </p>
      <p>Export, import into App, and mount it.</p>
      {/* This is how we mount our component. */}
      <Header />
      <TwoTruthsLie />
      <Footer />
    </div>
  );
}

export default App;
