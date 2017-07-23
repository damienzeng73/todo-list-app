import React from 'react'
import axios from 'axios'
import { Container, Confirm } from 'semantic-ui-react'

import AddTodoForm from '../components/AddTodoForm'
import List from '../components/List'

class ListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            results: '',
            todos: [],
            open: false
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.handleOnCancel = this.handleOnCancel.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getTodos')
            .then((res) => {
                this.setState({ todos: res.data.todos })
            })
    }

    addTodo(content) {
        axios.post('http://localhost:5000/addTodo', {content: content})
            .then((res) => {
                this.setState({ todos: res.data.todos, content: '' })
            })
    }

    removeTodo() {
        axios.post('http://localhost:5000/removeTodo', {content: this.state.content})
            .then((res) => {
                this.setState({ todos: res.data.todos, open: false, content: '' })
            })
    }

    handleRemoveTodo(content) {
        this.setState({ open: true, content: content })
    }

    handleOnCancel() {
        this.setState({ open: false, content: '' })
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit(e) {
        e.preventDefault()
        this.addTodo(this.state.content)
    }

    render() {
        return (
            <Container id='todo-list-container'>
                <AddTodoForm
                    content={this.state.content}
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                />

                <List
                    todos={this.state.todos}
                    handleRemoveTodo={this.handleRemoveTodo}
                />

                <Confirm
                    open={this.state.open}
                    content={`Do you really want to delete '${this.state.content}' ?`}
                    onCancel={this.handleOnCancel}
                    onConfirm={this.removeTodo}
                />
            </Container>
        )
    }
}


export default ListContainer
