from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'todos'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/todos'

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/getTodos', methods=['POST'])
def getTodos():
    todos = []
    for todo in mongo.db.todos.find():
        todos.append({'content': todo['content']})

    response = {}
    response['todos'] = todos
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
