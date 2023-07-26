// import Background from './Background';
// import NasaData from './NasaData';
import nebula from './nebula.jpg'
import './App.css'
const App = () => {
  const myStyle = {
    backgroundImage: `url(${nebula})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    zIndex: 0,
    position: 'relative'
  };
  return (
    <div>
      <div style={myStyle}>
        <p id="name">Areebah Anzar</p>
      </div>
    </div>
  )
};

export default App;
