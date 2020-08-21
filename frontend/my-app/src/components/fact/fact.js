import React from 'react';
import Comments from '../comments/comments'
import Votes from '../votes/votes'
const http = require('../../http/http')

class Fact extends React.Component {

    componentWillMount(){
        http.getTodaysFact()
        .then(data => {
            this.setState({
                data: data[0],
                isLoading: false
            })
        })
    }
    constructor(){
        super()
        this.state = {
            data: [],
            isLoading: true
        }
    }
    render() {
        console.log("render")
        const { data, isLoading } = this.state;
        
        if (isLoading) {
            // console.log(isLoading)
            return <p>Loading ...</p>;
        }
    
        return (
            <div>
                <div style={{width: 500}}>
                    <h2 style={{color: 'white'}}>Fact</h2>
                    <h2 style={{color: 'white'}}>{data['fact']}</h2>
                </div>
                <Votes
                    votesUp = {data['meta']['votesUp']}
                    votesDown = {data['meta']['votesDown']}
                    onVotesUp = {this.putVotesUp}
                />
                <div>
                </div>
                <div>
                    <Comments
                        // comments = {data['comments']}
                        factId = {data['_id']}
                    />
                </div>

            </div>
        );
    }
}

export default Fact