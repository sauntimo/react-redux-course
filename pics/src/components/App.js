import React from 'react'

import Searchbar from './SearchBar';

export class App extends React.Component {
    
    onSearchSubmit(term) {
        console.log(term);
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
            </div>
        )
    }
}

export default App
