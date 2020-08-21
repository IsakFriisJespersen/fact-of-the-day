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
            socketComment: [],
            userComment: ""
        }
        this.putComment = this.putComment.bind(this)
        // this.commentsData = this.commentsData.bind(this)
    }
    componentWillMount(){
        console.log("componentWillMount")
        http.getComments(this.props.factId)
            .then(data => {
                this.setState({
                    data: {
                        comments: data,
                        isLoading: false
                    }
                })
            })
        
        // socket.on(`comment`, data => {
        //         this.state.socketComment.push(data)
        // })

        socket.on('broadcast',function(data) {
            // document.body.innerHTML = '';
            // document.write(data.description);
         });

        }
        
    putComment = () => {
        // const factId = this.state.factId
        const userComment = this.state.userComment
        // http.putComment(factId, userComment)
        socket.emit('comment', this.state.userComment)
        this.setState(
            state => {
                const socketComment = state.socketComment.concat(userComment)
                return {
                    socketComment
                }
            }
            )
            
            socket.on('connection', function(){
               socket.on('comment',function(data){
                   console.log(data)
                   io.emit('comment',data);  
               });
            })
        }
        



    render() {
        console.log("rendercomment")

        const {comments, isLoading} = this.state.data
        if(isLoading){
            return <h3>isLoading</h3>
        }
        return (
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
                        onChange = {
                            (e) => {
                                // console.log(e.target.value)
                                this.setState(
                                    {
                                        userComment: e.target.value
                                    }
                                )
                            }
                        }
                        id="commentTextArea"
                        />
                        <Button content='Add Reply' 
                        labelPosition='left' 
                        icon='edit'
                        primary 
                        onClick = {this.putComment}
                        />
                    </Form>
                </Comment.Group>
                <div>
                    {
                        this.state.socketComment.map(data =>
                            <h1 key={data}>{data}</h1>
                        )

                    }
                </div>
            </div>
        );
    }
}

export default Comments