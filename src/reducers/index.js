import { combineReducers } from 'redux'; 

const songsReducer = () => {
  return [
    { title: 'Smells like teen spirit', duration: '4:05'},
    { title: 'Come as you are', duration: '3:34'},
    { title: 'Lake of fire', duration: '2:33'},
    { title: 'In bloom', duration: '3:28'}
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}; 

export default combineReducers({
  songs: songsReducer,
  selectedSong: SelectedSongReducer
});
