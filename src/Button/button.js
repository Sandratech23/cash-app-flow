
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title= 'Welcome on Sandra';
  // const x = 'Hey Baby';
  // const likes =50;
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar /> 
    <div className="content">
      <h1>{title}</h1>
      <Home /> 
      {/* <h1>{x}</h1>
      <p>liked {likes} times </p>
      <p>{ ['Best', ' ', 'Sandra',' ',  'Tunde']}</p>
      <a href={link}> Google site </a>
      <p> { Math.random () * 10 }</p> */}
     </div>
    </div>
  );
}

export default App;