import React from 'react';
import Comment from '../comment/comment'
import Votes from '../votes/votes'
const http = require('../../http/http')

class Fact extends React.Component {
    getFact(){
        const data = http.getTodaysFact()
        //console.log(data)
        this.setState({
            isLoading: false

        })
        return data
  
    }
    async componentDidMount(){
        this.setState({
            data: await this.getFact(),
            isLoading: false

        })
    }
    constructor(){
        super()
        this.state = {
            data: [],
            isLoading: false
        }
    }
    render() {
        const { data, isLoading } = this.state;
        
        if (isLoading) {
            return <p>Loading ...</p>;
        }
    
        return (
            <div>
                <div style={{width: 500}}>
                    <h2>Fact</h2>
                    
                    {data.map(d => 
                        <p>{d.fact}</p>
                    )}
                    

                </div>
                <Votes></Votes>
                <div>

                </div>
                <div>
                    <Comment/>
                </div>

            </div>
        );
    }
}

export default Fact