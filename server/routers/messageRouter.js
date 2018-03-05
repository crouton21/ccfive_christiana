const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const messageSchema = new mongoose.Schema(
    {
        name: {type: String},
        message: {type: String}
    }
)

const message = mongoose.model('message', messageSchema, 'messages');

router.post('/', function(request, response){
    let newMessage = new message(request.body);
    console.log('Message to save is:', request.body);
    newMessage.save(function(error, savedMessage){
        if (error){
            console.log('error on saving message:', error);
            response.sendStatus(500);
        }
        else{
            response.sendStatus(200);
        }
    })
});

router.get('/', function(request, response){
    message.find({}, function(error, messages){ 
        if(error){
            console.log('error on getting all messages', error);
            response.sendStatus(500);
        }
        else{
            response.send(messages);
        }
    })
});

module.exports = router;