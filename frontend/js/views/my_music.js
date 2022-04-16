import { myMusicContent } from '../variable/constant.js';
const myMusic = {
    render: function() {
        myMusicContent.innerHTML = '<h1>Chỉ chạy trên port 3000</h1>'
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