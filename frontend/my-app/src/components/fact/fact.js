import React from 'react';
import Comment from '../comment/comment'

class Fact extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Fact</h2>
                    <p>The Fact text!!!</p>
                </div>
                <div>
                    <Comment/>
                </div>

            </div>
        );
    }
}

export default Fact