# Eat-Da-Burger

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, this app will display the burger waiting to be devoured.
Each burger in the waiting area also has a `Devour it!` and 'Favorite!` button. When the user clicks `Devour it`, the burger will be removed from the waiting area (via JSON and Mongodb). When the user clicks `Favorite` the burger name will become bold and glow. The app will store every burger in a database, whether devoured or not.

## [Try it yourself!](https://eat-da-burger-fka.herokuapp.com/) 

![image](https://github.com/fkarticuno/CodingPortfolio/Assets/Images/15.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. They will also give an overview of some of the app's functionality. 

### Prerequisites

You will need MongoDB installed if you want to run this application locally. For help installing MongoDB, visit
````
https://docs.mongodb.com/manual/installation/
````

Once installed, make sure the MongoDB daemon is running with the following command line command:
````
$ mongod
````

### Installing

Git clone the repository to your local machine: 

HTTPS:
```
$ git clone https://github.com/fkarticuno/burger.git
```
SSH:
````
$ git clone github.com:fkarticuno/burger.git
````

To connect to your local Mongo database, you will need to add an .env file in the root of your cloned repository containing the following code:
````
MONGO_DB="mongodb://localhost/<you decide the name here>"
````

Next, cd into the repository you cloned and install the necessary dependencies by running:
````
$ npm install
````

You will then be able to start the app locally by runnning:
````
$ node server
````

## Built With

* [MongoDB](https://www.mongodb.com/) - NoSQL Database
* [Express.js](https://expressjs.com/) - Node.js framework
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [NPM](https://www.npmjs.com/) - Dependency management
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - CSS framework
* [Sequelize](https://www.npmjs.com/package/sequelize) - Promise-based Node.js ORM

## Notes
Please see https://github.com/fkarticuno/burger/tree/master/imgs for progression images

## Authors

See the list of [contributors](https://github.com/fkarticuno/burger/graphs/contributors) who participated in this project along with individual commit history. 

## Planned updates

At the moment, this app is the minimum viable product. We hope to make updates to improve the UI/UX.
