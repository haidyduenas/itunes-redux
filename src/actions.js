import store from './store';

export const play=()=>{
    store.setState({
        isPlaying: true,
    })
}
export const stop=()=>{
    store.setState({
        isPlaying: false,
    })
}
export const next=()=>{
    alert("holi");
}