import React from 'react'
import { Container } from 'semantic-ui-react'

import AddItemForm from '../components/AddItemForm'
import List from '../components/List'

class ListContainer extends React.Component {
    render() {
        return (
            <Container id='todo-list-container'>
                <AddItemForm />
                <List />
            </Container>
        )
    }
}


export default ListContainer
