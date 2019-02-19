import React from 'react';
import SongList from './SongList';

export default () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList></SongList>
                </div>
            </div>
        </div>
    )
}
