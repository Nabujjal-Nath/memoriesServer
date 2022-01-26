import PostMessage from "../models/postMessages.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;                     //getting data from client side ie. form data
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(400).json({ newPost })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}