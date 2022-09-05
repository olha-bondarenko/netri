import {Schema, model} from 'mongoose';

export interface Post {
    title: string;
    message: string;
    name: string;
    creator: string;
    tags: string[];
    selectedFile: string;
    likes: any[],
    createdAt: {
        type: Date,
        default: Date
    }
} 

const PostSchema = new Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    name: {type: String, required: true}, 
    creator: {type: String},
    tags: [{type: String, required: true},],
    selectedFile: {type: String, required: true},
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const PostMessage = model('postMessage', PostSchema)