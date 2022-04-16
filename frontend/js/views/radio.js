import { radioContent } from '../variable/constant.js';
const radio = {
    render: function() {

        radioContent.innerHTML = '<h1>Video MV</h1>'
    },
    start: async function(page) {
        var data = await fetch(domain + '/api/listmv/IWZ9Z089/' + page + '/15')
        this.render();
    }
}
export default radio