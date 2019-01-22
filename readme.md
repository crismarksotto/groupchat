What is it?
A firebase group chat app built with javascript with google authentication.

Simple features :D
1. Google authentication
2. Real time chatting
3. Send stickers
4. Notification and Commands e.g. "reload"

Some commands
1. Plus(+) sign to send an important message. This will show notification to all users.
2. reload = use this to reload all user's window.

How it works?
1. Ask the user to login with google account.
2. The app store the credentials in localstorage of a browser.
3. The app uses the data to send or received a message.


How to use
1. First create your firebase database in https://firebase.google.com/
2. Open chatter.js
3. Replace the value of "config object" with details of your firebase databse. It can be found in Authentication > Web Setup
4. In database tab, change  "Cloud Firestore" to "Realtime Database".
5. On the same tab, change the rules to


service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}


6. Follow this for google authentication https://developers.google.com/identity/sign-in/web/sign-in

