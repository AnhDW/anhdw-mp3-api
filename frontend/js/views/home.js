import { homeContent, domain } from '../variable/constant.js';


const home = {
    render: async function() {
        var data = await fetch(domain + '/api/home/1').then(res => res.json())
        console.log(data.data.items)
        homeContent.innerHTML = `
        <div class="banner"></div>
        <div class="${data.data.items[3].sectionId}">
            <h2>${data.data.items[3].title}</h2>
            <div class='playlist'></div>
        </div>
        <div class="${data.data.items[4].sectionId}">
            <h2>${data.data.items[4].title}</h2>
            <div class='playlist'></div>
        </div>`

        data.data.items[0].items.map(item => {
            document.querySelector('.banner').innerHTML += `
            <div 
                style="background-image: url(${item.banner});"
                onclick="window.location.href='${item.link}'"
                class="banner__item">
            </div>`
        })
        data.data.items[3].items.map(item => {
            document.querySelector('.hAutoTheme1 .playlist').innerHTML += `
            <div class="playlist__item">
                <img src="${item.thumbnailM}">
                <h4>${item.title}</h4>
                <p>${item.sortDescription}</p>
            </div>`
        })
        data.data.items[4].items.map(item => {
            document.querySelector('.hXone .playlist').innerHTML += `
            <div class="playlist__item">
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