# **Mnemosis**

#### __Submitted by: S12 Group 10__
- MACEDA, Dustin Wenzel
- NILL, Byron Ethelbert
- UY, Geosef Viktor

## **Setting up**
1. Ensure that mongodb is installed and is running.
2. Open the command prompt (Windows) or terminal (Mac) and `cd` to the project folder.
3. Run `npm install` to initialize and install the modules defined in `package.json`.

## **Starting the app**
Upon successful installation, enter `node index.js` or `nodemon index.js` on the terminal. 

If this is the first time that the application is initialized on the machine, the following will be displayed on the console window:
```
Listening at http://localhost:3000
Database connection successful. URL: mongodb://localhost:27017/mnemosis
Added 7 documents to users
Added 21 documents to games
Added 268 documents to items
Added 31 documents to attempts
``` 
Otherwise, the console will display the following:
```
Listening at http://localhost:3000
Database connection successful. URL: mongodb://localhost:27017/mnemosis
User data found
Game data found
Attempt data found
Item data found
``` 

The server is already running. Go to `http://localhost:3000` on any browser or click the link provided in the terminal. 
This will render the `login_and_register.ejs` file.

![alt text](./README_imgs/login.png "Login Page")

Any of the following accounts may be used to log into the app.
```
Administrator access:

email:      seandoe@mnemosis.com
password:   admin

email:      rocky@hfpa.com
password:   goldenglobes
```
```
User access:

email:      ellen@ellen.com
password:   iloveportia

email:      nyronbill@gmail.com
password:   p@55w0rd

email:      joseph_uy@gmail.com
password:   zyxwvutsrqp

email:      dustin.blumentritt@gmail.com
password:   6!is120

email:      new_user@sims.com
password:   newtothis
```

Alternatively, `Continue as guest` may be chosen to proceed to the application's homepage.

Successfully logging into the application will render the `homepage.ejs` file and display the following page.

![alt text](./README_imgs/homepage.png "Homepage")

## **Contents**
[ref link] ()