const post= require("../models/postModel");

exports.createPost= async(req,res)=>{
    try {
        const {title,body}= req.body;
        const post= new post({
            title, body
        })
        const savePost= await post.save();

        res.status(200).json({
            savePost
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating post"
        });
    }
}

exports.getAllPosts= async(req,res)=>{
    try {
        const posts=await post.find().populate("likes").populate("comments").exec();

        res.status(200).json({
            posts
        });
    } catch (error) {
        return res.status(400).json({
            error: "Error while receiving post"
        });
    }
}