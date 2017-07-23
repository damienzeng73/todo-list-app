import React from 'react'

import AddItemForm from '../components/AddItemForm'
import List from '../components/List'

class ListContainer extends React.Component {
    render() {
        return (
            <div id='todo-list-container'>
                <AddItemForm />
                <List />
            </div>
        )
    }
}


export default ListContainer
