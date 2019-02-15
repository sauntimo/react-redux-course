import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

export class App extends React.Component {
    state = {videos: []};

    onSearchSubmit = async (term) => {
        const res = await youtube.get( '/search',
            {
            params: {
                q: term
            }
        });

        this.setState({videos: res.data.items});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit}></SearchBar>
                <VideoList videos={this.state.videos}></VideoList>
            </div>
        )
    }
}

export default App;
