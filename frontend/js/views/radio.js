import { radioContent } from '../variable/constant.js';
const radio = {
    render: function() {

        radioContent.innerHTML = '<h1>Radio</h1>'
    },
    init: function() {
        console.log('app init');
    },
    start: function() {
        this.init();
        this.render();
    }
}
export default radio