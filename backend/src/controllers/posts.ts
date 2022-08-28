import { PostMessage } from "../models/postMessage";
import mongoose from 'mongoose';

export const getPosts = async (req: any, res: any) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req: any, res: any) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    console.log(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req: any, res: any) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post exists with this id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req: any, res: any) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post exists with this id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'The post was successfully deleted'});
}

export const likePost = async (req: any, res: any) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post exists with this id');

    const post = await PostMessage.findById(id);
    
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post!.likeCount + 1}, {new: true});

    res.json(updatedPost);
}
