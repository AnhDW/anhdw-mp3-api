import { videoContent, domain } from '../variable/constant.js'

const video = {
    render: function() {
        videoContent.innerHTML = `<h1>Video</h1>`
    },
    start: async function() {
        console.log('start')
    }
}

export default video