# Mini Library Book Tracker :blue_book:


### Description: A full-stack library application that tracks the books at the Northwestern University department of Material Science and Engineering. Facilitates access for students and faculty.


```
File Structure Diagram

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── mlbtracker_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── mlbtracker.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── mlbtracker_style.css
│   │   └── img
│   │       └── logo.jpg
│   └── test.html
│
├── server.js
│
└── views
    └── layouts
          ├── bookcheckout.handlebars
          ├── bookcrud.handlebars
          ├── checkout.handlebars
          ├── index.handlebars
          └── usercrud.handlebars
      
```

- - -

### Technologies Used: 
<ul>
  <li>MySQL</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Handlebars</li>
  <li>ORM</li>  
</ul>

- - - 

### How to use the application:

1. Open your command-line user interface
2. Clone MLBT repo to your computer 
3. Configure the <code>connection.js</code> file to your MySQL Workbench settings
4. Type <code>node server.js</code> to connect to the server


