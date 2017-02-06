# Geist Server

## Details
This is the server side of `Geist`.
Powered and hosted by [`Firebase`](https://firebase.google.com/).

## Setup
Before you start you have following these simple steps to setup `Geist Server` correctly.

1. Create the Firebase Project
2. Activate E-Mail/Password registration method
![registration method](art/activate_mail_pass.png)
3. Restrict the browser key. Go to the [Google API Console](https://console.developers.google.com/apis) and select the browser key.
![api console. listed keys](art/restrict_browser_key.png)
4. Enable only your Firebase Project domains.
![api console. enable own domain](art/restrict_domains.png)
5. (Optional but recommended) Enable Goo.gl Shortener API.
![api console. enable shortener api](art/enable_shortener_api.png)
> **Note:** For the first time you are finish here.
[Deploy](#deploy) the App and execute `Geist` client. Follow the steps on [Geist - creating a User](https://github.com/stefma/Geist).
6. (Optional but recommended) Restrict your created user.
![get uid from user](art/restrict_user_uid.png)
7. (Optional but recommended) Set storage permissions.
![set permissions](art/restrict_user_permissions.png)

## Deploy

#### Credentials
Copy the credentials from your Firebase Project into the [`firebase_base.js`](js/firebase_base.js).

See [`Add Firebase to your Project`](https://firebase.google.com/docs/web/setup).

#### Upload to Firebase
After you have installed the Firebase CLI tool

`npm install -g firebase-tools`

You can just run

`firebase deploy --project $YOUR_🔥BASE_PROJECTID`
