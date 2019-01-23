
                        var google;
                        var isNotif = false;
                        var firstReload = true;
                        var isYou = false;
                          // Initialize Firebase
                          var config = {
                                apiKey: "", //insert AIzaSyAa83pGMMWXZBlQA251yiD-xxxxxxxxx
                                authDomain: "",//insert your xxxxxxxx.firebaseapp.com
                                databaseURL: "",//insert here xxxxxx.firebaseio.com",
                                storageBucket: "", //insert xxxx.appspot.com
                          };
                          firebase.initializeApp(config);
                        
                        var myDataRef = new Firebase('');//insert your databaseURL here
                        

                        
                        

        


                function createEmoji() {
                    var emoji;
                    var bodyCOntainer = document.getElementById("body");
                    var emojiCOntainer = document.createElement("div");
                    emojiCOntainer.setAttribute("class", "emoji-container");
                    bodyCOntainer.appendChild(emojiCOntainer);
                    for (var i = 0; i <= 20; i++) {
                        emoji = document.createElement("div");
                        emoji.setAttribute("class", "emoji");
                        emoji.setAttribute("id", "emoji-" + i);
                        emoji.innerHTML = "&nbsp;";
                        emoji.style.backgroundImage = "url('emoji/" + i + ".png')";
                        emoji.setAttribute("onclick", "sendEmoji('" + i + "')");
                        emojiCOntainer.appendChild(emoji);
                    }
                }

                function sendEmoji(H) {
                    var command = 'normal';
                    var auth = JSON.parse(localStorage.getItem('user'));
                        var date = new Date().toLocaleString();
                                                  var name = auth.Name;
                    var text = "<img style='width:128px;height:128px;' src='emoji/" + H + ".png' />";
                    var profilepicture = auth.Image;
                    
                    
                    if (name == '') {
                       name = 'Anonymous';
                    }
                    var firstReloadCommand = text.indexOf('reload');
                    if (firstReloadCommand != -1) {
                        command = 'reload';
                    }
        
                        isYou=true;
                        
                        myDataRef.push().set({name: name, text: text, date: date, command:  command, profile:  profilepicture});
                        isYou = false;
                }
                




                
                


function checkAuth(){
        if (localStorage.getItem("user") === null) {
                
                  showAuth();
        }
        else{
                console.log('authenticated');
        }

}

function showAuth(){
                        console.log('oki');
                        var parentContainer = document.getElementById("google-auth");        
                        parentContainer.style.display = "flex";
                        localStorage.clear();

                  
}

$( document ).ready(function() {
          var parentContainer = document.getElementById("google-auth");        
                        parentContainer.style.display = "none";
    checkAuth();


  
});




 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

     localStorage.clear();
     window.location.reload();
  }

function onSignIn(googleUser) {
    
          var logindate = new Date().toLocaleString();
                  var profile = googleUser.getBasicProfile();
                  google = googleUser.getBasicProfile();
                  var user = {
                                  ID: profile.getId(),
                                  Name: profile.getName(),
                                  Image: profile.getImageUrl(),
                                  Email: profile.getEmail()
                        }
                  window.localStorage.setItem('user', JSON.stringify(user));
                  myDataRef.push().set({name: "System", text: profile.getName() + " has joined the chat !", date: logindate, command:  "normal", profile:  "https://image.flaticon.com/icons/svg/149/149071.svg"}); //add sytem notification
                   var parentContainer = document.getElementById("google-auth");        
                   parentContainer.style.display = "none";




                myDataRef.on('child_added', function(snapshot) {
                                var message = snapshot.val();
                                displayChatMessage(message.name, message.text, message.date, message.command, message.profile);
                                
                        
                                function displayChatMessage(name, text, date, command, profile) {
                                        var auth = JSON.parse(localStorage.getItem('user'));

                                var messageType = "received";
                                
                                        if(google.getName() == name || isYou){
                                                messageType = "sent";
                                        }
                                
                                
                                        
                                         
                                        var messageDiv = document.getElementById('messagesDiv');


                                        var newMessageContainer = document.createElement('span');
                                        newMessageContainer.setAttribute("class", "container-" + messageType);
                                        messageDiv.appendChild(newMessageContainer);


                                        var message = "<div class='user-info'><span id='profile_pic' style='background-image: url(\""  +  profile +  "\")'></span><b class='user-name'>" +name + "</b></div><div class='content'>" + text + "</div><br><i class='content-date'>" + date + "</i>";
                                        var newMessage = document.createElement('span');
                                        newMessage.setAttribute("class", messageType);
                                        newMessage.innerHTML = message;
                                        messageType = "received";
                                        newMessageContainer.appendChild(newMessage);

                                        
                                        //insert code here


                                        ///send scroll to bottom
                                        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;

                                         var hasNotifCommand = text.indexOf('+');
                                    if (hasNotifCommand != -1 && !firstReload) {
                                        Push.Permission.request();
                                        Push.create(name, {
                                                    body: 'You have important message',
                                                    icon: 'https://stackideas.cachefly.net/images/apps/366/logo.png',
                                                    timeout: 8000,               // Timeout before notification closes automatically.
                                                    vibrate: [100, 100, 100],    // An array of vibration pulses for mobile devices.
                                                    onClick: function() {
                                                    }  
                                                });
                                    }
        

                                        if(command=="reload" && !firstReload){
                                                window.location.reload();
                                        }


                                        if(!firstReload){
                                            console.log("sound on");
                                                var audio = new Audio('sound.mp3');
                                                audio.play();
                                        }
                                        

                                };
                  });


        function createChatUI(){
                var authStorage = JSON.parse(localStorage.getItem('user'));
                            $('#messagesDiv').remove();
    
                            var parent = document.getElementById("body");
                        var notes = document.createElement("div");
                        notes.setAttribute("class", "notes");
                      //  notes.innerHTML = "<strong>NOTE:</strong><br><br>1. Send a message first to enable 'reload' and 'Notification'<br><br>2. Insert '+' sign at the start of your message. Use this for important messages only. (e.g. +This is an important message)<br><br>3. Use HTTPS to enable notification<br><br>4. 'reload' to reload all users browser.<br><br>5. Insert html code ! e.g img, video<br><br><div class='logout' onclick='signOut();'>Logout</div>";
                        parent.appendChild(notes);
                        
                        
                        //create profile info
                        var profileInfo = document.createElement('div');
                            profileInfo.setAttribute("class", "info-container");
                                notes.appendChild(profileInfo);
                                
                                    var profileInfoImage = document.createElement('div');
                                profileInfoImage.setAttribute("class", "info-container-image");
                                profileInfoImage.style.backgroundImage = "url('" + authStorage.Image + "')";
                                    profileInfo.appendChild(profileInfoImage);
                                    
                                    var profileInfoName = document.createElement('div');
                                profileInfoName.setAttribute("class", "info-container-name");
                                profileInfoName.innerHTML = authStorage.Name;
                                    profileInfo.appendChild(profileInfoName);
                                    
                                    
                                    
                                    var profileInfoEmail = document.createElement('div');
                                profileInfoEmail.setAttribute("class", "info-container-email");
                                
                                profileInfoEmail.innerHTML = authStorage.Email;
                                    profileInfo.appendChild(profileInfoEmail);
                                    
                                    var profileInfoLogout = document.createElement('div');
                                profileInfoLogout.setAttribute("class", "logout");
                                profileInfoLogout.setAttribute("onclick", "signOut();");
                                profileInfoLogout.innerHTML = "Logout";
                                    profileInfo.appendChild(profileInfoLogout);
                                    
                                    
 
    
    
                        var messageContainer = document.createElement("div");
                        messageContainer.setAttribute("class", "scrollbar style-src");
                        messageContainer.setAttribute("id", "messagesDiv");
                        parent.appendChild(messageContainer);
    
    
    
                        var messageInputContainer = document.createElement("div");
                         messageInputContainer.setAttribute("class", "textFields");
                        messageInputContainer.innerHTML = "<textarea row='4' type='text' id='messageInput' placeholder='Type a message...'>";
                        parent.appendChild(messageInputContainer);
    
    
    
                            $('#messageInput').keypress(function (e) {
                                     console.log('test');
                                     if(!event.shiftKey){
                                                     if (e.keyCode == 13) {
                                                            console.log('test');
                                                            isNotif=true;
                                                            firstReload = false;
                                                            isYou=true;
    
                                                            var auth = JSON.parse(localStorage.getItem('user'));
                                                      var date = new Date().toLocaleString();
                                                      var name = auth.Name;
                                                      var text = $('#messageInput').val();
                                                      var profilepicture = auth.Image;
    
    
                                                    
    
                                                      if (name == '') {
                                                           name = 'Anonymous';
                                                       }
                                                      var commandText = "normal";
                                                      var hasReloadCommand = text.indexOf('reload');
                                                        if (hasReloadCommand != -1) {
                                                            commandText = 'reload';
                                                        }
    
                                                      myDataRef.push().set({name: name, text: text, date: date, command:  commandText, profile:  profilepicture});
                                                      $('#messageInput').val('');
                                                      isYou = false;
                                                    }
                                     }//shift
                                    
                            });
    
    
                        
    
    
                        createEmoji();
    
    }

                createChatUI();

}





