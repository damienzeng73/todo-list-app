import React from 'react'

import Header from '../components/Header'
import ListContainer from '../containers/ListContainer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ListContainer />
            </div>
        )
    }
}


export default App
