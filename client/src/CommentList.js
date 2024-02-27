import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        switch(comment.status) {
            case 'approved':
                content = comment.content;
                break;
            case 'pending':
                content = 'The comment is awaiting for moderation';
                break;
            case 'rejected':
                content = 'The comment has been rejected';
                break;
            default:
                break;
        }
        
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;
}

export default CommentList;