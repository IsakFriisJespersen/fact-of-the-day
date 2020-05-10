import React from 'react';
import logo from './logo.png'; // Tell webpack this JS file uses this image
class Header extends React.Component {
    render() {
        return (
            <div style={{
                display:'flex',
                flexDirection: 'row',
            }}> 
                <img src={logo} alt="Logo" style={{height: '50px', width: '50px'}}/>
                <h1>Fun Fact Of The Day</h1>
                
            </div>
        );
    }
}

export default Header

