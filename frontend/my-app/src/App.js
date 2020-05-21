import React from 'react';
import Header from './components/header/header'
import Fact from './components/fact/fact'
// import logo from './logo.svg';
import './App.css';
const imgMyimageexample = require('../src/istockphoto-1138395421-612x612.jpg');

class App extends React.Component {
    
    render() {
        return (
            <div style={{
                backgroundImage: `url(${imgMyimageexample})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'noRepeat',
                width: '100vw',
                height: '100vh'
            }}>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <div style={{
                    display:'flex', 
                    alignItems:'flex-start'
                    
                }}>
                    <Header/>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Fact/>
                </div>
            </div>
        );
    }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


