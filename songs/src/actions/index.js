// action creator
export const selectSong = song => {

    console.log("selectSong called");
    console.log(song);
    

    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song,
    }
}
