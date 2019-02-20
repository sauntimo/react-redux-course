import React from 'react'
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  return (
    <div className="ui segment">
        <div className="right floated content">
            { song &&
                <div>
                    <h3>Song Details</h3>
                    <div>
                        <strong>Title: </strong>
                        <span>{song.title}</span>
                    </div>
                    <div>
                        <strong>Duration: </strong>
                        <span>{song.duration}</span>
                    </div>
                </div>
            }
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };    
}

// connect calls dispatch for us
export default connect(mapStateToProps)(SongDetail);
