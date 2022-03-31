import { followContent } from '../variable/constant.js';
const follow = {
    render: function() {
        followContent.innerHTML = '<h1>Follow</h1>'
    },
    init: function() {
        console.log('app init');
    },
    start: function() {
        this.init();
        this.render();
    }
}
export default follow