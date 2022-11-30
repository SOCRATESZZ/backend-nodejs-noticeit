const Chat = require('../models/chatModel');


const postChat = async (req,res) => {


    const {org, chat } = req.body;

    const newChat = new Chat({
        org, chat
    });

    newChat.save()
    .then( val => {
        res.json({
            message: "added successfuly!"
        })
    })
    .catch(err => {
        console.error(error);
    })
}

const getChats = async (req, res) => {

     
        var chats = await Chat.findAll({
            order: [['createdAt', 'DESC']]
        });

        console.log(chats);
    
        res.json({
            chats: chats,
        });

        // res.json({
        //     chat: "getting chats"
        // })
    

}

module.exports = {
    postChat,
    getChats
}