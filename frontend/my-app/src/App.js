import React from 'react';
import Header from './components/header/header'
import Fact from './components/fact/fact'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
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


