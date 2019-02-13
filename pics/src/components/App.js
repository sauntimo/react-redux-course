import React from 'react'

import Searchbar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

export class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        
        const res = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: res.data.results });
    }
    
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
}

export default App
