import React from 'react';
import {Comment, Form, Button, Header} from 'semantic-ui-react'
import io from 'socket.io-client'
import './comments.css'

const http = require('../../http/http')
const socket = io(`http://localhost:8080`)
class Comments extends React.Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            factId: this.props.factId,
            data: {
                comments: [],
                isLoading: true
            },
            userComment: ""
        }
        this.putComment = this.putComment.bind(this)
        // this.commentsData = this.commentsData.bind(this)
    }
    componentWillMount(){
        http.getComments(this.props.factId)
            .then(data => {
                this.setState({
                    data: {
                        comments: data,
                        isLoading: false
                    }
                })
            })
        socket.emit('comment', "hello1")
        socket.emit('comment', "hello2")
        socket.emit('comment', "hello3")
        socket.on(`comment`, data => {
            console.log(data)
            })
    }

    putComment(){
        const factId = this.state.factId
        const userComment = this.state.userComment
        http.putComment(factId, userComment)
    }

    render() {

        const {comments, isLoading} = this.state.data
        if(isLoading){
            return <h3>isLoading</h3>
        }
        // console.log(comments)
        return (
            <div>
                <div>
                    <Comment.Group>
                    <Header 
                        as='h3' dividing
                        className="Comments-Header"
                    >
                        Comments
                    </Header>
                        {
                            comments.map((c, index) => 
                                <Comment
                                key={index}
                                >
                                    <Comment.Content>
                                        <Comment.Author>Hidden</Comment.Author>
                                        <Comment.Metadata><div>{c.meta.date}</div></Comment.Metadata>
                                        <Comment.Text>{c.body}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                                )
                        }
                        <Form reply>
                            <Form.TextArea 
                            onChange = {(e) => {this.setState({
                                userComment: e.target.value
                            })}}
                            
                            />
                            <Button content='Add Reply' 
                            labelPosition='left' 
                            icon='edit'
                            primary 
                            onClick = {this.putComment}
                            />
                        </Form>
                    </Comment.Group>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Comments