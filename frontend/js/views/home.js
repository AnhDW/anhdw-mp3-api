import { homeContent, dataHome } from '../variable/constant.js';


const home = {
    render: async function() {
        var data = await dataHome
        console.log(data.data.items)
        homeContent.innerHTML = `
        <div class="banner"></div>
        <div class="${data.data.items[3].sectionId}"><h3>${data.data.items[3].title}</h3></div>
        <div class="${data.data.items[4].sectionId}"><h3>${data.data.items[4].title}</h3></div>`

        data.data.items[0].items.map(item => {
            document.querySelector('.banner').innerHTML += `
            <div 
                style="background-image: url(${item.banner});background-size: cover;width: 300px; height:200px"
                onclick="window.location.href='${item.link}'"
            >
            </div>`
        })
        data.data.items[3].items.map(item => {
            document.querySelector('.hAutoTheme1').innerHTML += `
            <div class="playlist">
                <img src="${item.thumbnailM}">
                <h4>${item.title}</h4>
                <p>${item.sortDescription}</p>
            </div>`
        })
        data.data.items[4].items.map(item => {
            document.querySelector('.hXone').innerHTML += `
            <div class="playlist">
                <img src="${item.thumbnailM}">
                <h4>${item.title}</h4>
                <p>${item.sortDescription}</p>
            </div>`
        })

    },
    init: function() {
        console.log('init')
    },
    start: function() {
        this.init();
        this.render();
    }
}
export default home