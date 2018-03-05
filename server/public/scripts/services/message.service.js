app.service('MessageService', ['$http', function($http) {
    console.log('Message service created');
    let self = this;

    self.messages = {newMessage:{}, allMessages:[]};

    self.newMessageSubmitted = function(newMessage){
        console.log('in newMessageSubmitted function');
        $http({
            method: 'POST',
            url: '/message',
            data: {
                name: newMessage.name,
                message: newMessage.message
            }
          }).then(function(response) {
            self.messages.newMessage = {};
            console.log('Sent new message');
            self.getAllMessages();
          })
          .catch(function(error){
            console.log(error);
          })
    }

    self.getAllMessages = function(){
        console.log('In getAllMessages function');
        $http({
            method: 'GET',
            url: '/message'
        }).then(function(response){
            console.log('Got all messages:', response.data);
            self.messages.allMessages = response.data; 
            console.log('allMessages array:', self.messages.allMessages);
        }).catch(function(error){
            console.error('Error getting messages', error)
        })
    }

    self.getAllMessages();

}]);