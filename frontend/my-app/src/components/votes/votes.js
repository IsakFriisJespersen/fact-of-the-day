import React from 'react';
import http from '../../http/http'
// import Button from 'react-bootstrap/Button';

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            votesUp: this.props.votesUp,
            votesDown: this.props.votesDown
        }
        this.putVotesUp = this.putVotesUp.bind(this)
        this.putVotesDown = this.putVotesDown.bind(this)
    }
    putVotesDown(){
        this.setState({
            votesDown: this.state.votesDown + 1
        })
    }
    putVotesUp(){
        this.setState({
            votesUp: this.state.votesUp + 1
        })
    }
    render() {
        const {votesUp, votesDown} = this.state
        return (
           
            <div
            style={{
                alignItems: 'row'
            }}
            className=""
            >
                <button
                    className="btn btn-success glyphicon glyphicon-thumbs-up"
                    onClick = {this.putVotesUp}
                >   {votesUp}</button>
                <button
                    className="btn btn-danger glyphicon glyphicon-thumbs-down"
                    onClick = {this.putVotesDown}
                >   {votesDown}</button>
            </div>

            
        );
    }
}

export default Comment