import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Glue", duration: "3:15" },
        { title: "Destroyer", duration: "4:02" },
        { title: "Talk too much", duration: "3:36" },
        { title: "I sold my bed but not my stereo", duration: "4:17" },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});