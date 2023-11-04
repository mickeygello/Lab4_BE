import Comments from "../model/Comment.js";

async function createComment({user, text, content}){
    const comment = Comments.create({user, text, content});
    return comment
}

export default{
    createComment
}