import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit("bad sounds");
    }

    onSearchSubmit = async (term) => {
        const res = await youtube.get('/search',
            {
                params: {
                    q: term
                }
            });

        this.setState({
            videos: res.data.items.slice(1),
            selectedVideo: res.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />

                <div className="ui grid">
                    <div className="ui row">

                        <div className="eleven wide column">
                            {this.state.selectedVideo &&
                                <VideoDetail video={this.state.selectedVideo} />
                            }
                        </div>

                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default App;
