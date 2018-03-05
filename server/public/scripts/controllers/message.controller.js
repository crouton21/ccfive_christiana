app.controller('messageController', ['MessageService', function(MessageService) {
    console.log('messageController created.');
    let self = this;

    self.messages = MessageService.messages;
    self.newMessageSubmitted = MessageService.newMessageSubmitted;
    self.getAllMessages = MessageService.getAllMessages;

  }]);