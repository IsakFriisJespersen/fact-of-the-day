import React from 'react';
import {Comment, Form, Button, Header} from 'semantic-ui-react'
import './comments.css'

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }
    putComment(){

    }
    render() {
        const comments = this.state.comments
        console.log(comments)
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
                            comments.map(c => 
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Author>Hidden</Comment.Author>
                                        <Comment.Metadata><div>{c.meta.date}</div></Comment.Metadata>
                                        <Comment.Text>{c.body}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                                )
                        }
                        <Form reply>
                            <Form.TextArea />
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