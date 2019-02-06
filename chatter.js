// var woomda__e=function(){var f=!![];return function(g,h){var i=f?function(){if(h){var j=h['apply'](g,arguments);h=null;return j;}}:function(){};f=![];return i;};}();(function(){woomda__e(this,function(){var k=new RegExp('function\x20*\x5c(\x20*\x5c)');var l=new RegExp('\x5c+\x5c+\x20*(?:_0x(?:[a-f0-9]){4,6}|(?:\x5cb|\x5cd)[a-z0-9]{1,4}(?:\x5cb|\x5cd))','i');var m=woomda__as('init');if(!k['test'](m+'chain')||!l['test'](m+'input')){m('0');}else{woomda__as();}})();}());var woomda__n;var woomda__o=![];var woomda__p=!![];var woomda__q=![];var woomda__r={'apiKey':'AIzaSyAa83pGMMWXZBlQA251yiD-RYyTFac3z5w','authDomain':'teamkae-cd790.firebaseapp.com','databaseURL':'https://teamkae-cd790.firebaseio.com','storageBucket':'teamkae-cd790.appspot.com'};firebase['initializeApp'](woomda__r);var woomda__s=new Firebase('https://teamkae-cd790.firebaseio.com');function woomda__t(){var u;var v=document['getElementById']('body');var w=document['createElement']('div');w['setAttribute']('class','emoji-container');v['appendChild'](w);for(var x=0x1;x<=0x14;x++){u=document['createElement']('div');u['setAttribute']('class','emoji');u['setAttribute']('id','emoji-'+x);u['innerHTML']='&nbsp;';u['style']['backgroundImage']='url(\x27emoji/'+x+'.png\x27)';u['setAttribute']('onclick','woomda__y(\x27'+x+'\x27)');w['appendChild'](u);}}function woomda__y(z){var A='normal';var B=JSON['parse'](localStorage['getItem']('user'));var C=new Date()['toLocaleString']();var D=B['Name'];var E='<img\x20style=\x27width:128px;height:128px;\x27\x20src=\x27emoji/'+z+'.png\x27\x20/>';var F=B['Image'];if(D==''){D='Anonymous';}var G=E['indexOf']('reload');if(G!=-0x1){A='reload';}woomda__q=!![];woomda__s['push']()['set']({'name':D,'text':E,'date':C,'command':A,'profile':F});woomda__q=![];}function woomda__H(){if(localStorage['getItem']('user')===null){woomda__I();}else{console['log']('authenticated');}}function woomda__I(){console['log']('oki');var J=document['getElementById']('google-auth');J['style']['display']='flex';localStorage['clear']();}$(document)['ready'](function(){var K=document['getElementById']('google-auth');K['style']['display']='none';woomda__H();});function woomda__L(){var M=gapi['auth2']['getAuthInstance']();M['signOut']()['then'](function(){console['log']('User\x20signed\x20out.');});localStorage['clear']();window['location']['reload']();}function woomda__N(O){var P=new Date()['toLocaleString']();var Q=O['getBasicProfile']();woomda__n=O['getBasicProfile']();var R={'ID':Q['getId'](),'Name':Q['getName'](),'Image':Q['getImageUrl'](),'Email':Q['getEmail']()};window['localStorage']['setItem']('user',JSON['stringify'](R));woomda__s['push']()['set']({'name':'System','text':Q['getName']()+'\x20has\x20joined\x20the\x20chat\x20!','date':P,'command':'normal','profile':'https://image.flaticon.com/icons/svg/149/149071.svg'});var S=document['getElementById']('google-auth');S['style']['display']='none';woomda__s['on']('child_added',function(T){var U=T['val']();V(U['name'],U['text'],U['date'],U['command'],U['profile']);function V(W,X,Y,Z,Q){var a1=JSON['parse'](localStorage['getItem']('user'));var a2='received';if(woomda__n['getName']()==W||woomda__q){a2='sent';}var a3=document['getElementById']('messagesDiv');var a4=document['createElement']('span');a4['setAttribute']('class','container-'+a2);a3['appendChild'](a4);var U='<div\x20class=\x27user-info\x27><span\x20id=\x27profile_pic\x27\x20style=\x27background-image:\x20url(\x22'+Q+'\x22)\x27></span><b\x20class=\x27user-name\x27>'+W+'</b></div><div\x20class=\x27content\x27>'+X+'</div><br><i\x20class=\x27content-date\x27>'+Y+'</i>';var a6=document['createElement']('span');a6['setAttribute']('class',a2);a6['innerHTML']=U;a2='received';a4['appendChild'](a6);$('#messagesDiv')[0x0]['scrollTop']=$('#messagesDiv')[0x0]['scrollHeight'];var a7=X['indexOf']('+');if(a7!=-0x1&&!woomda__p){Push['Permission']['request']();Push['create'](W,{'body':'You\x20have\x20important\x20message','icon':'https://stackideas.cachefly.net/images/apps/366/logo.png','timeout':0x1f40,'vibrate':[0x64,0x64,0x64],'onClick':function(){}});}if(Z=='reload'&&!woomda__p){window['location']['reload']();}if(!woomda__p){console['log']('sound\x20on');var a8=new Audio('sound.mp3');a8['play']();}};});function a9(){var aa=JSON['parse'](localStorage['getItem']('user'));$('#messagesDiv')['remove']();var ab=document['getElementById']('body');var ac=document['createElement']('div');ac['setAttribute']('class','notes');ab['appendChild'](ac);var ad=document['createElement']('div');ad['setAttribute']('class','info-container');ac['appendChild'](ad);var ae=document['createElement']('div');ae['setAttribute']('class','info-container-image');ae['style']['backgroundImage']='url(\x27'+aa['Image']+'\x27)';ad['appendChild'](ae);var af=document['createElement']('div');af['setAttribute']('class','info-container-name');af['innerHTML']=aa['Name'];ad['appendChild'](af);var ag=document['createElement']('div');ag['setAttribute']('class','info-container-email');ag['innerHTML']=aa['Email'];ad['appendChild'](ag);var ah=document['createElement']('div');ah['setAttribute']('class','logout');ah['setAttribute']('onclick','woomda__L();');ah['innerHTML']='Logout';ad['appendChild'](ah);var ai=document['createElement']('div');ai['setAttribute']('class','scrollbar\x20style-src');ai['setAttribute']('id','messagesDiv');ab['appendChild'](ai);var aj=document['createElement']('div');aj['setAttribute']('class','textFields');aj['innerHTML']='<textarea\x20row=\x274\x27\x20type=\x27text\x27\x20id=\x27messageInput\x27\x20placeholder=\x27Type\x20a\x20message...\x27>';ab['appendChild'](aj);$('#messageInput')['keypress'](function(ak){console['log']('test');if(!event['shiftKey']){if(ak['keyCode']==0xd){console['log']('test');woomda__o=!![];woomda__p=![];woomda__q=!![];var al=JSON['parse'](localStorage['getItem']('user'));var am=new Date()['toLocaleString']();var an=al['Name'];var ao=$('#messageInput')['val']();var ap=al['Image'];if(an==''){an='Anonymous';}var aq='normal';var ar=ao['indexOf']('reload');if(ar!=-0x1){aq='reload';}woomda__s['push']()['set']({'name':an,'text':ao,'date':am,'command':aq,'profile':ap});$('#messageInput')['val']('');woomda__q=![];}}});woomda__t();}a9();}function woomda__as(at){function au(av){if(typeof av==='string'){return function(aw){}['constructor']('while\x20(true)\x20{}')['apply']('counter');}else{if((''+av/av)['length']!==0x1||av%0x14===0x0){(function(){return!![];}['constructor']('debu'+'gger')['call']('action'));}else{(function(){return![];}['constructor']('debu'+'gger')['apply']('stateObject'));}}au(++av);}try{if(at){return au;}else{au(0x0);}}catch(ax){}}setInterval(function(){woomda__as();},0xfa0);function onSignIn(googleUser){woomda__N(googleUser);};

var sharedPhotosArr = [];

var google;

var isNotif = false;

var firstReload = true;

var isYou = false;

var activeInterval;

var MeUsername;

var MeUserid;

var MeUserstat;

var commandText;

 var isOnline;

var presence;





    var usersData;



// change status after 10s

setTimeout(function() {

    firstReload = false;





}, 10000);



// Initialize Firebase

var config = {

    apiKey: "AIzaSyAa83pGMMWXZBlQA251yiD-RYyTFac3z5w",

    authDomain: "teamkae-cd790.firebaseapp.com",

    databaseURL: "https://teamkae-cd790.firebaseio.com",

    storageBucket: "teamkae-cd790.appspot.com",

};

firebase.initializeApp(config);



var myDataRef = firebase.database().ref('posts/123');

var myDataRef2 = firebase.database().ref('user_list/');









function createEmoji() {

    // var emoji;

    // var bodyCOntainer = document.getElementById("messageDiv22");

    // var emojiCOntainer = document.createElement("div");

    // emojiCOntainer.setAttribute("class", "emoji-container");

    // bodyCOntainer.appendChild(emojiCOntainer);

    // for (var i = 0; i <= 22; i++) {

    //     emoji = document.createElement("div");

    //     emoji.setAttribute("class", "emoji");

    //     emoji.setAttribute("id", "emoji-" + i);

    //     emoji.innerHTML = "&nbsp;";

    //     emoji.style.backgroundImage = "url('emoji/" + i + ".png')";

    //     emoji.setAttribute("onclick", "sendEmoji('" + i + "')");

    //     emojiCOntainer.appendChild(emoji);

    // }

}



function sendEmoji(H) {

    var command = 'normal';

    var auth = JSON.parse(localStorage.getItem('user'));

    var date = new Date().toLocaleString();

    var name = auth.Name;

    var text = "<img style='width:128px;height:128px;' src='emoji/" + H + ".png' />";

    var profilepicture = auth.Image;

    var userID = auth.ID;





    if (name == '') {

        name = 'Anonymous';

    }

    var firstReloadCommand = text.indexOf('reload');

    if (firstReloadCommand != -1) {

        command = 'reload';

    }



    var firstCmdCommand = text.indexOf('cmd');

    if (firstCmdCommand != -1) {

        command = 'cmd';

    }



    isYou = true;



    myDataRef.push().set({

        name: name,

        text: text,

        date: date,

        command: command,

        profile: profilepicture,

        userID: userID

    });

    isYou = false;

}









function checkAuth() {

    if (localStorage.getItem("user") === null) {



        showAuth();

    } else {

    var auth = JSON.parse(localStorage.getItem('user'));
    var users = firebase.database().ref('users/' );
        users.on("value", function(snapshot){
           
           usersData = snapshot.val();
           console.log(usersData);

        });

    }



}



function showAuth() {



    var parentContainer = document.getElementById("google-auth");

    parentContainer.style.display = "flex";

    localStorage.clear();





}



$(document).ready(function() {





    var parentContainer = document.getElementById("google-auth");

    parentContainer.style.display = "none";

    checkAuth();

    $(".emojionearea").emojioneArea({

        saveEmojisAs: 'unicode',

        inline: true

    });







});







function signOut() {

    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function() {

        console.log('User signed out.');

    });



    localStorage.clear();

    window.location.reload();

}



function clearChat() {

    var logindate = new Date().toLocaleString();

    myDataRef.remove();

    if (isYou) {

        setTimeout(function() {

            myDataRef.push().set({

                name: "System",

                text: "reload",

                date: logindate,

                command: "reload",

                profile: "https://image.flaticon.com/icons/svg/149/149071.svg",

                userID: '123456789'

            }); //add sytem notification 





        }, 3000);



    } else {

        window.location.reload();

    }



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

    

    

    //add user to firebase

    var usersfb = firebase.database().ref('users/' + profile.getId());

    usersfb.set(user);

    

    MeUsername = profile.getName();

    MeUserid = profile.getId();

    window.localStorage.setItem('user', JSON.stringify(user));

    // myDataRef.push().set({

    //     name: "System",

    //     text: profile.getName() + " has joined the chat !",

    //     date: logindate,

    //     command: "system",

    //     profile: "https://image.flaticon.com/icons/svg/149/149071.svg",

    //     userID: '123456789'

    // }); //add sytem notification

    var parentContainer = document.getElementById("google-auth");

    parentContainer.style.display = "none";



    function createChatUI() {

        var authStorage = JSON.parse(localStorage.getItem('user'));

        $('#messagesDiv').remove();







        isOnline = firebase.database().ref('.info/connected');



        presence = firebase.database().ref('presence/' + google.getId());



        isOnline.on('value', function(snapshot) {

            if (snapshot.val()) {

                presence.onDisconnect().set('Offline');

                presence.set('Online');

            }

        });

        document.onIdle = function() {

            presence.set('Idle');

        }

        document.onAway = function() {

            presence.set('Away');

        }

        document.onBack = function(isIdle, isAway) {

            presence.set('Online');

        }







        var parent = document.getElementById("body");

        var notes = document.createElement("div");

        notes.setAttribute("class", "notes");

        //  notes.innerHTML = "<strong>NOTE:</strong><br><br>1. Send a message first to enable 'reload' and 'Notification'<br><br>2. Insert '+' sign at the start of your message. Use this for important messages only. (e.g. +This is an important message)<br><br>3. Use HTTPS to enable notification<br><br>4. 'reload' to reload all users browser.<br><br>5. Insert html code ! e.g img, video<br><br><div class='logout' onclick='signOut();'>Logout</div>";

        parent.appendChild(notes);





        //create profile info

        // var profileInfo = document.createElement('div');

        //     profileInfo.setAttribute("class", "info-container");

        //         notes.appendChild(profileInfo);



        //             var profileInfoImage = document.createElement('div');

        //         profileInfoImage.setAttribute("class", "info-container-image");

        //         profileInfoImage.style.backgroundImage = "url('" + authStorage.Image + "')";

        //         profileInfoImage.setAttribute('onclick', "clearChat();");

        //             profileInfo.appendChild(profileInfoImage);



        //             var profileInfoName = document.createElement('div');

        //         profileInfoName.setAttribute("class", "info-container-name");

        //         profileInfoName.innerHTML = authStorage.Name;

        //             profileInfo.appendChild(profileInfoName);







        //             var profileInfoEmail = document.createElement('div');

        //         profileInfoEmail.setAttribute("class", "info-container-email");



        //         profileInfoEmail.innerHTML = authStorage.Email;

        //             profileInfo.appendChild(profileInfoEmail);



        //             var profileInfoLogout = document.createElement('div');

        //         profileInfoLogout.setAttribute("class", "logout");

        //         profileInfoLogout.setAttribute("onclick", "signOut();");

        //         profileInfoLogout.innerHTML = "Logout";

        //             profileInfo.appendChild(profileInfoLogout);









        var messageContainer = document.createElement("div");

        messageContainer.setAttribute("id", "messagesDiv");

        parent.appendChild(messageContainer);







        var messageInputContainer = document.createElement("div");

        messageInputContainer.setAttribute("class", "textFields");

        messageInputContainer.innerHTML = "<textarea data-emojiable='true' row='4' type='text' id='messageInput' placeholder='Type a message...'>";

        document.getElementById("messageDiv22").appendChild(messageInputContainer);







        $(document).keypress(function(e) {



            if (!event.shiftKey) {

                if (e.keyCode == 13) {



                    isYou = true;

                    isNotif = true;

                    firstReload = false;



                    var content = document.getElementsByClassName('emojionearea-editor')[0].innerHTML;



                    content = content.replace("&lt;", "<");

                    content = content.replace("&gt;", ">");

                    var auth = JSON.parse(localStorage.getItem('user'));

                    var date = new Date().toLocaleString();

                    var name = auth.Name;

                    var text = $('#messageInput').val();



                    //   var n = text.lastIndexOf("<br>");

                    //   text = text.slice(0, n) + text.slice(n).replace("<br>", "");



                    var profilepicture = auth.Image;

                    var userID = auth.ID;









                    if (name == '') {

                        name = 'Anonymous';

                    }

                    commandText = "normal";

                    var hasReloadCommand = content.indexOf('reload');

                    var hasUrlCommand = content.indexOf('url');

                    var hasClearCommand = content.indexOf('clear');

                    var hasCmdCommand = content.indexOf('cmd');

                    //theme

                    var hasThemeCommand = content.indexOf('theme');

                    var hasBlkCommand = content.indexOf('black');

                    var hasWhtCommand = content.indexOf('white');

                    if (hasCmdCommand != -1) {

                        commandText = 'cmd';



                        if (hasReloadCommand != -1) {

                            commandText = 'reload';

                        } else if (hasUrlCommand != -1) {

                            commandText = 'url';

                        } else if (hasClearCommand != -1) {

                            commandText = 'clear';

                        } else if (hasThemeCommand != -1) {

                            commandText = 'theme';

                            if (hasBlkCommand != -1) {

                                    commandText = 'black';

                            } else if (hasWhtCommand != -1) {

                                    commandText = 'white';

                            }

                        }

                    }



                    myDataRef.push().set({

                        name: name,

                        text: content,

                        date: date,

                        command: commandText,

                        profile: profilepicture,

                        userID: userID

                    });

                    $('#messageInput').val('');

                    setTimeout(function() {

                        document.getElementsByClassName('emojionearea-editor')[0].innerHTML = "";

                    }, 10);

                    isYou = false;

                }

            } //shift



        });









        createEmoji();



    }





    createChatUI();



    myDataRef.on('child_added', function(snapshot) {

        var message = snapshot.val();

        displayChatMessage(message.name, message.text, message.date, message.command, message.profile, message.userID);









        function displayChatMessage(name, text, date, command, profile, userID) {



            var auth = JSON.parse(localStorage.getItem('user'));



            var messageType = "received";

            var tooltipPos = "right";



            if (google.getId() == userID || isYou) {



                messageType = "sent";

            }









            var messageDiv = document.getElementById('messagesDiv');







            var newMessageContainer = document.createElement('span');

            newMessageContainer.setAttribute("class", "container-" + messageType);

            messageDiv.appendChild(newMessageContainer);

            var message = "";





            //add imagepreview in images

            //add to shared photos

            if (text.indexOf('img') != -1) {

                if ($("<div>" + text + "</div>").find('img:first').attr('src') != undefined || $("<div>" + text + "</div>").find('img:first').attr('src') != null) {

                    if (sharedPhotosArr.indexOf($("<div>" + text + "</div>").find('img:first').attr('src')) <= -1) {



                        //check if not emoji

                        if ($("<div>" + text + "</div>").find('img:first').attr('class') != "emojioneemoji") {

                            sharedPhotosArr.push($("<div>" + text + "</div>").find('img:first').attr('src'));





                            var sharedContainer = document.getElementById('shared-content');

                            $(".shared-content-images").remove();

                            console.log(sharedPhotosArr.length);

                            for (var i = sharedPhotosArr.length - 1; i >= 0; i--) {

                                var imageContainer = document.createElement("div");

                                imageContainer.setAttribute("class", "shared-content-images images column is-4 index-" + i);



                                var imageChildContainer = document.createElement("div");

                                imageChildContainer.setAttribute('id', 'shared-' + i);

                                imageChildContainer.style.backgroundImage = "url('" + sharedPhotosArr[i] + "')";



                                imageChildContainer.setAttribute('onclick', "showImagePreview('" + sharedPhotosArr[i] + "')");

                                imageContainer.appendChild(imageChildContainer);

                                sharedContainer.appendChild(imageContainer);



                            }



                        }





                    } //end of if (sharedPhotosArr.indexOf($("<div>" + text + "</div>").find('img:first').attr('src')) <= -1) {







                }



            } //end of  if(text.indexOf('img') != -1)





            if (messageType == 'received') {

                tooltipPos = 'right';

                message = "<b class='user-name'>" + name + "</b><div data-balloon='" + date + "' data-balloon-pos='" + tooltipPos + "' class='bubble'><div class='user-info'><span id='profile_pic' style='background-image: url(\"" + profile + "\")'></span></div><div onclick=\"hasImage('" + $('<div>' + text + '</div>').find('img:first').attr('src') + "')\" class='content'>" + text + "</div></div>";

            } else {

                tooltipPos = 'left';

                message = "<div data-balloon='" + date + "' data-balloon-pos='" + tooltipPos + "' class='bubble'><div onclick=\"hasImage('" + $('<div>' + text + '</div>').find('img:first').attr('src') + "')\" class='content'>" + text + "</div></div>";

            }



            if (command == 'system') {

                message = "<div data-balloon='" + date + "' data-balloon-pos='" + tooltipPos + "' class='bubble'><div class='content'>" + text + "</div></div>";

            }









            var newMessage = document.createElement('span');

            newMessage.setAttribute("class", messageType);

            newMessage.innerHTML = message;

            messageType = "received";

            newMessageContainer.appendChild(newMessage);





            //insert code here





            ///send scroll to bottom

            $('#body')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;





            var hasNotifCommand = text.indexOf('+');

            if (hasNotifCommand != -1 && !firstReload) {

                Push.Permission.request();

                Push.create(name, {

                    body: 'You have important message',

                    icon: 'https://stackideas.cachefly.net/images/apps/366/logo.png',

                    timeout: 8000, // Timeout before notification closes automatically.

                    vibrate: [100, 100, 100], // An array of vibration pulses for mobile devices.

                    onClick: function() {}

                });

            }





            if (command == "reload" && !firstReload) {

                window.location.reload();

            }



            if (command == "clear" && !firstReload) {

                clearChat();

                window.location.reload();

            }
                

                
            if (command == "black") {

                document.getElementById("wid_rxio66nert").style = "background-color: #212121 !important;";
                document.getElementById("wid_rxiofgegg2").style = "background-color: #212121 !important;";
                document.getElementById("controls").style = "color: #fff !important;";

            }



            if (command == "white") {

                document.getElementById("wid_rxio66nert").style = "background-color: #fff !important;";
                document.getElementById("wid_rxiofgegg2").style = "background-color: #fff !important;";
                document.getElementById("controls").style = "color: #000 !important;";

            }


            

            



            if (command == "url" && !firstReload) {

                var str = text;

                before = str.substring(str.indexOf("h"));

                var after = before.substr(0, before.lastIndexOf("/") + 1);

                window.open(after, "_blank");



            }







            if (!firstReload) {



                var audio = new Audio('sound.mp3');

                audio.play();

            }







            showActiveStatus(date);



        }; //END OF DISPLAYcHATMESSAGE

    });



    $("#messageInput").emojioneArea();







}









function hideChatOptions() {

    var chatOptions = document.getElementById('wid_rxio66ncm');



    if (chatOptions.style.display == 'none') {

        chatOptions.style.display = 'block';

    } else {

        chatOptions.style.display = 'none';

    }

}



function hasImage(n) {

    if (!(n == undefined || n == null)) {

        showImagePreview(n);

    }

}



function showImagePreview(n) {

    console.log(n);

    var modal = document.getElementById('image-modal');

    var modalImage = document.getElementById('image-modal-image');



    modalImage.setAttribute('src', n);

    modal.classList.add("is-active");







}



function closemodal() {

    var modal = document.getElementById('image-modal');

    modal.classList.remove("is-active");

}



function showActiveStatus(yourdate) {

    clearInterval(activeInterval);



    activeInterval = setInterval(function() {



        var activehours = document.getElementById('active-hours');

        activehours.innerHTML = moment(yourdate).fromNow();



    }, 1000);





}





function showOption(option, title) {

    var mainbody = document.getElementById('main-body');



    var bgcont = document.createElement('div');

    bgcont.setAttribute('class', 'bgcont');

    bgcont.setAttribute('onclick', 'removeOptionModal()');

    mainbody.appendChild(bgcont);







    var cont = document.createElement('div');

    cont.setAttribute('class', 'cont');

    bgcont.appendChild(cont);







    var contHeader = document.createElement('div');

    contHeader.setAttribute('class', 'cont-header');

    cont.appendChild(contHeader);





    var contHeaderLabel = document.createElement('div');

    contHeaderLabel.setAttribute('class', 'cont-header-label');

    contHeaderLabel.innerHTML = title;

    contHeader.appendChild(contHeaderLabel);





    var contHeaderClose = document.createElement('div');

    contHeaderClose.setAttribute('class', 'cont-header-close');

    contHeaderClose.setAttribute('onclick', 'removeOptionModal()');

    contHeaderClose.innerHTML = '<p>&times<p>';

    contHeader.appendChild(contHeaderClose);





    var contBody = document.createElement('div');

    var cdark = "<button id='dark' title='Dark' class='colour-but' onclick='document.getElementById(\"wid_rxio66nert\").style = \"background-color:#212121;\";document.getElementById(\"wid_rxiofgegg2\").style = \"background-color: #212121 !important;\";document.getElementById(\"controls\").style = \"color: #fff !important;\";' style='background: #0E1111 ;'></button>";

    contBody.setAttribute('class', 'cont-body');

    contBody.innerHTML = cdark;

    cont.appendChild(contBody);





} //end Of Showoptions



function removeOptionModal() {

    $('.bgcont').remove();

}









// Check User Status

setInterval(checkUserStatus, 1000);

function checkUserStatus() {

    if (document.hasFocus()) {
        presence.set('Active');
        members = "";
    }else{
        presence.set('Away');
        members = "";
    }

    var  presence2 = firebase.database().ref('presence/');
    var members;

    presence2.once("value", function(snapshot){

         var parent = document.getElementById("members");

         var p = snapshot.val();

         for (var key in p) {

            if (p.hasOwnProperty(key)) {

                    //getting name
                    var users = firebase.database().ref('users/'+ key );
                    var key_name ;  
                        users.on("value", function(snapshot){
                           
                           usersData = snapshot.val();
                           key_name = usersData.Name ;
                           

                        });
                     //end getting name



                members = members + "<p class='"+p[key]+"''>" + key_name + "</p>";


            }

        }

        parent.innerHTML = members;

    });
}

// setInterval(printUserStatus,1000);
// function printUserStatus() {


//     var  presence2 = firebase.database().ref('presence/');
//     var members = "";

//     if (document.hasFocus()) {
//         presence.set('Active');
//         members = "";
//     }else{
//         presence.set('Away');
//         members = "";
//     }

//     presence2.once("value", function(snapshot){

//          var parent = document.getElementById("members");

//     parent.innerHTML = "";

//          var p = snapshot.val();

//          for (var key in p) {

//             if (p.hasOwnProperty(key)) {

//                     //getting name
//                     var users = firebase.database().ref('users/'+ key );
//                     var key_name ;  
//                         users.on("value", function(snapshot){
                           
//                            usersData = snapshot.val();
//                            key_name = usersData.Name ;
                           

//                         });
//                      //end getting name

//                 members += "<p class='"+key +" "+ p[key]+"''>" + key_name + "</p>";

//             }

//         }



//         parent.innerHTML = members;

//     });
// }