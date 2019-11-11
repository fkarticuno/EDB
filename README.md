# EDB
Eat-Da-Burger

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* My app will store every burger in a database, whether devoured or not.

# Organization
```
.
├── config
│   ├── config.json
│ 
├── models
│   └── burger_perm.js
│   └── burgers.js
│   └── index.js
├── public
│   ├── css
│       └── styles.css
│   └── js
│       └── views.js
│   └── index.html
│
├── routes
│   └── api-routes.js
│ 
├── node_modules
│ 
├── package.json
│
├── server.js
```
# Packages Used
https://www.npmjs.com/package/express
https://www.npmjs.com/package/mysql2
https://www.npmjs.com/package/sequelize
