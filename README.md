# Weather Assistant
Link to website <a href="https://express-shop.up.railway.app/">Express Shop</a><br/>
By In ho Han <br/>
Responsive Demo E-commerce website.<br/>
This website is created under instruction made by Maximillian on Udemy course.
It is a mixture of provided content and my own work.
## Technologies Used
- JavaScript (Vanilla JS)
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
- These behaviours are only allowed to signed up and logged in user. When visitor is not logged in, the guest only can view available products.
![LoggedIn](https://github.com/inho115/Express-Shop/assets/97544886/712a6448-d7d4-4791-a4ca-306eb0baa644)

- If user is not authenticated (not logged in or does not exist), the authentication middleware will check the status of session and either redirect to correct url or to login page.
![login](https://github.com/inho115/Express-Shop/assets/97544886/5589a1c3-aec9-4b0c-843f-2ee83aa8807f)


## License 
- Copyright (c) 2023 In ho Han
## Thanks to
- <a href="[https://www.udemy.com/user/jonasschmedtmann/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Webindex_Catchall_la.EN_cc.CA&utm_term=_._ag_119831896715_._ad_533102824920_._kw__._de_c_._dm__._pl__._ti_dsa-423967289464_._li_9000910_._pd__._&matchtype=&gclid=Cj0KCQiA6rCgBhDVARIsAK1kGPKPVDeN_Q4-z80u10OX9Ig540Dbr_XlxbYkkADXGTnZgvQOjOA1LssaAuaHEALw_wcB](https://www.udemy.com/user/academind/)">Academind by Maximillian</a>
  - Youtube Channel owner and instructor at Udemy.
## Contact
- If you have any question related to this project, please contact me with any of these method.
  - bhan951105@gmail.com
  - <a href="https://www.linkedin.com/in/ihhan/">LinkedIn</a>
