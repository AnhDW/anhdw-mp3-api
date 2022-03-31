import { myMusicContent } from '../variable/constant.js';
const myMusic = {
    render: function() {
        myMusicContent.innerHTML = '<h1>My Music</h1>'
    },
    init: function() {
        console.log('app init');
    },
    start: function() {
        this.init();
        this.render();
    }
}
export default myMusic