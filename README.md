A todo list app built with ReactJS, Flask
=============

Description
-----------
This application using [ReactJS](https://facebook.github.io/react/) and [Semantic-UI-React](https://react.semantic-ui.com/introduction) for building front-end, [Flask](http://flask.pocoo.org/) for back-end, [axios](https://github.com/mzabriskie/axios) for calling API.

Use MongoDB to store all todos.

Dependecies
-----------

Python3+
MongoDB

How can I try it
----------------

Clone this repository:
    git clone https://github.com/damnee562/Todo-list-app.git

Create virtualenv and install all requirements:
    python3 -m venv venv_name
    source venv_name/bin/activate
    cd Todo-list-app
    pip install -r requirements.txt

Install all needed node_modules:
    npm init
    npm install

or if you using yarn:
    yarn init
    yarn install

Run webpack for generating bundles:
    ./node_modules/.bin/webpack --config webpack.config.js

This will create a folder named static that contains main.js and main.css.

Make sure MongoDB is running on your system, you can check its status by typing:
    sudo service mongod status

If it's not running, fire it up by:
    sudo service mongod start

Finally, run the server by:
    FLASK_APP=app.py flask run

Fire up browser to `http://localhost:5000`
