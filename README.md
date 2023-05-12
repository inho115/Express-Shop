# Express Shop
Link to website <a href="https://express-shop.up.railway.app/">Express Shop</a><br/>
By In ho Han <br/>
Responsive Demo E-commerce website.<br/>
This website is created under instruction made by Maximillian on Udemy course.
It is a mixture of provided content and my own work.
## Technologies Used
- JavaScript
- HTML
- CSS
- Express
- Mongoose
## Implemented Concepts
- Server-side logic
- MVC framework
- CRUD operation
- Authentication
- Validation
- Authorization
- Session
- Objects
- JSON 
- API (Cloudinary, Stripe, SendGrid)
- Asynchronous function
## Third party technologies
- <a href="https://cloudinary.com/">Cloudinary</a>
  - Cloudinary is a perfect location to store and fetch images for your project.
- <a href="https://stripe.com/en-ca">Stripe</a>
  - Stripe is perfect solution to implement payment system into your project or online business.
- <a href="https://sendgrid.com/">Send Grid</a>
  - Send Grid is perfect way to communicate with users by sending email. 
## Dependencies
- @sendgrid/mail (ver 7.7.0)
- bcryptjs (ver 2.4.3)
- body-parser (ver 1.18.3)
- cloudinary (ver 1.36.4)
- compression (ver 1.7.4)
- connect-flash (ver 0.1.1)
- connect-mongodb-session (ver 3.1.1)
- dotenv (ver 16.0.3)
- ejs (ver 2.6.1)
- express (ver 4.16.3)
- express-session (ver 1.17.3 )
- express-validator (ver 7.0.1)
- helmet (ver 6.1.5)
- mongodb (ver 5.3.0)
- mongoose (ver 7.0.4)
- multer (ver 1.4.5-lts.1)
- mysql2 (ver 1.6.1)
- nodemailer (ver 6.9.1)
- nodemailer-sendgrid-transport (ver 0.2.0)
- pdfkit (ver 0.13.0)
- stripe (ver 12.4.0)

## Purpose
- This project demonstrates practice online business website. 
- User can 
  - Add product to a market
  - Add product on a cart
  - Place an order
  - Download an invoice
  - Make a payment
  - Delete a registered product from website.
![LoggedIn](https://github.com/inho115/Express-Shop/assets/97544886/0336f54c-509e-4bd1-a4c3-ab206749962a)

- Purpose of this project is to demonstrate my understanding of crucial conecept in web developement and they are:
  - Server-side logic
  - MVC framework
  - CRUD operation
  - Authentication
  - Validation
  - Authorization
  - Session

## Description 
- When a visitor is not logged in, available action are limited to viewing existing products.
![LoggedIn](https://github.com/inho115/Express-Shop/assets/97544886/712a6448-d7d4-4791-a4ca-306eb0baa644)

- If a user is not authenticated (not logged in or does not exist), an authentication middleware will check a status of a session. 
- As a next step, server redirects a user to either login page or correct page.
- An authentication middleware is applied to most of CRUD operations, and it prevents a malicious user from entering url manually to perform unallowed actions.
![login](https://github.com/inho115/Express-Shop/assets/97544886/5589a1c3-aec9-4b0c-843f-2ee83aa8807f)

- Once sign up process is complete, a user will receive an email from test@inhohan.ca with a welcoming message.
- Seng Grid API was implemented for this purpose but also for resetting a password.
- Signed up user's information will be saved to a mongoDb Atlas database, and will be used to authenticate and authorize user.
![signup email](https://github.com/inho115/Express-Shop/assets/97544886/19a8fe60-886c-45c8-b7d9-85b2afbdd993)

- If a user click a reset password link, a single line form will be rendered. 
- When form is submitted, encrypted token is created for the user and it will be used for resetting process.
- The user will receive an email generated by Send Grid, which contains token as a paramter.
![Reset password link](https://github.com/inho115/Express-Shop/assets/97544886/734f55a2-448b-44a2-8ff3-fac6c1a09f2f)

- This link will lead a user to reach a route where it utilize the parameter for validation/authentication process.
- If a verification with a reset token is complete, the user can enter new password and server will redirect user to a login page.
- ![Uploading new password input.PNG…]()

- To add product, the user will be asked to input title, image file, price, and description of the product.
- For an image, the image will be stored in server's images folder and deleted after image is uploaded to cloudinary server.
- Once upload is complete, the server will fetch url of image and store the url instead of path of the image.
- This process was implemented to reduce the number of static file in server for optimization purpose.
- ![add product page](https://github.com/inho115/Express-Shop/assets/97544886/2ae10712-2929-415c-bef1-cc1416bca313)

- On Admin page, the user can either update or delete product.
- Editing is simple, unless user is updating the image file.
- If new image is updated, the same process that occured in adding stage will happen once again.
- For deletion, server will request Cloudinary to delete the file by sending filename as a parameter.
- The server is deleting Cloudinary data first since database holds the name of the file.
- After that the server will find the product with same id in mongoDB database and delete it.

## License 
- Copyright (c) 2023 In ho Han
## Thanks to
- <a href="[https://www.udemy.com/user/jonasschmedtmann/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Webindex_Catchall_la.EN_cc.CA&utm_term=_._ag_119831896715_._ad_533102824920_._kw__._de_c_._dm__._pl__._ti_dsa-423967289464_._li_9000910_._pd__._&matchtype=&gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPKPVDeN_Q4-z80u10OX9Ig540Dbr_XlxbYkkADXGTnZgvQOjOA1LssaAuaHEALw_wcB](https://www.udemy.com/user/academind/)">Academind by Maximillian</a>
  - Youtube Channel owner and instructor at Udemy.
## Contact
- If you have any question related to this project, please contact me with any of these method.
  - bhan951105@gmail.com
  - <a href="https://www.linkedin.com/in/ihhan/">LinkedIn</a>
