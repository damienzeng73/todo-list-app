# Todo-list-app
A simple To-Do list app built with React, Flask.

## Dependencies
* Python3+
* Node
* MongoDB

## Getting Started
### Installation
Clone this repository:

    git clone https://github.com/damnee562/todo-list-app.git

Create virtualenv and install all requirements:

    cd todo-list-app/
    python3 -m venv venv_name
    source venv_name/bin/activate
    pip install -r requirements.txt

Install all needed node_modules:

    yarn install

or with npm:

    npm install

Run webpack to generate bundles:

    ./node_modules/.bin/webpack --config webpack.config.js

It will create a folder named **static** that contains *main.js* and *main.css*.

Make sure MongoDB is running on your system, you can check its status by typing:

    sudo service mongod status

If it's not running, fire it up:

    sudo service mongod start

Finally, run the server:

    export FLASK_APP=app.py
    flask run

Open browser to `http://localhost:5000`

## Built With
* [React](https://facebook.github.io/react/) - A JavaScript library for building UI
* [Semantic UI React](https://react.semantic-ui.com/introduction) - A React UI framework
* [Flask](http://flask.pocoo.org/) - A python web framework
* [axios](https://github.com/mzabriskie/axios) - A Promised based HTTP client

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
