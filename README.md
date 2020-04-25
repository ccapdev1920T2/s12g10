# **Mnemosis**

#### __Submitted by: S12 Group 10__
- MACEDA, Dustin Wenzel
- NILL, Byron Ethelbert
- UY, Geosef Viktor

## **Repository Contents**
- [README_imgs](https://github.com/ccapdev1920T2/s12g10/tree/master/README_imgs) - contains the images used in `README.md` files
- [controllers](https://github.com/ccapdev1920T2/s12g10/tree/master/controllers) - contains `.js` files that define callback functions for client-side requests
- [models](https://github.com/ccapdev1920T2/s12g10/tree/master/models) - contains `.js` files that define functions for database connection and manipulation, also contains `data.js` which houses predefined data to be inserted to the database
- [routes](https://github.com/ccapdev1920T2/s12g10/tree/master/routes) - contains `.js` files that define the server response dependent on the client-side request
- [public](https://github.com/ccapdev1920T2/s12g10/tree/master/public) - contains static `.js`, `.css`, and `img` files that are used for front-end display manipulation
- [views](https://github.com/ccapdev1920T2/s12g10/tree/master/views) - contains `.ejs` files that will be rendered and displayed upon request  

## **Running the app (Heroku)**
Go to https://mnemosis.herokuapp.com to access the deployed application.

## **Setting up (Local)**
1. Ensure that mongodb is installed and is running.
2. Open the command prompt (Windows) or terminal (Mac) and `cd` to the project folder.
3. Run `npm install` to initialize and install the necessary modules.
4. Enter the appropriate command to create the environment variable `MNEMOSIS_URI` which allows access to the database hosted in MongoDB Atlas.
   - Windows: `SET MNEMOSIS_URI=mongodb+srv://testUser:ETadYrrFQ6Gl0gS3@mnemosis-dxmyx.gcp.mongodb.net/Mnemosis?retryWrites=true^&w=majority`
   - Mac / Linux: `export MNEMOSIS_URI="mongodb+srv://testUser:ETadYrrFQ6Gl0gS3@mnemosis-dxmyx.gcp.mongodb.net/Mnemosis?retryWrites=true&w=majority"`

## **Starting the app (Local)**
Upon successful installation, enter `node index.js` or `nodemon index.js` on the terminal. 

If the environment variable `MNEMOSIS_URI` was set successfully, the console will display the following:
```
Listening at http://localhost:3000
User data found
Game data found
Attempt data found
Item data found
Database connection successful. URL: mongodb+srv://testUser:ETadYrrFQ6Gl0gS3@mnemosis-dxmyx.gcp.mongodb.net/Mnemosis?retryWrites=true^&w=majority
``` 

If not, and if this is the first time that the application (and thus the database) is initialized on the machine or if the database has been dropped, the following will be displayed on the console window:
```
Listening at http://localhost:3000
Database connection successful. URL: mongodb://localhost:27017/mnemosis
Added 1 document to users
Added 1 document to users
Added 1 document to users
Added 1 document to users
Added 1 document to users
Added 1 document to users
Added 1 document to users
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

## **Logging in**

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

## **Registering for an account**

Clients may also choose to register for their own account. Successful registration will render the `view_profile_self.ejs` file and display the following page.

![alt text](./README_imgs/profile.png "Profile")
