import createStore from "redux-zero";

let song = [
	{
		name: "Here Comes the Sun",
		artist :"The Beatles",
        duration :"2:54"
	},
	{
		name: "Walking on Sunshine",
		artist :"Katrina and the Waves",
        duration :"3:43"
	},
	{
		name: "Sunshine",
		artist :"Katrina",
        duration :"4:43"
	},
];
const initialState = {
    songs: song,
    isPlaying: false,
	nowPlaying: 0
};

const store = createStore(initialState);

export default store;