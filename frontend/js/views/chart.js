import {
    aElements,
    iElements,
    content,
    keyword,
    songImg,
    songTitle,
    songAuthor,
    audio,
    playBtn,
    pauseBtn,
    togglePlay,
    prevBtn,
    nextBtn,
    randomBtn,
    repeatBtn,
    progress,
    container,
    chartContent,
    domain,
} from '../variable/constant.js';

const chart = {
    render: async function() {
        var data = await fetch(domain + '/api/chart').then(res => res.json())
        var top100 = data.data.RTChart.items
        var weeklyChart = data.data.weekChart
        console.log(top100)
        chartContent.innerHTML = `<div class="chart__top100"></div>
        <div class="chart__weekly">
            <h2>BXH Hàng Tuần</h2>
        </div>`
        var chartTop100 = document.querySelector('.chart__top100')


        if (top100 !== undefined) {
            top100.map(song => {
                chartTop100.innerHTML += `
                <div class="song">
                    <div class="song__img">
                        <img src="${song.thumbnail}"></img>
                    </div>
                    <div class="song__info">
                        <h4>${song.title}</h4>
                        <p>${song.artistsNames}</p>
                    </div>
                    <div class="song__option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
            })
        }

        if (weeklyChart !== undefined) {
            weeklyChart.vn.items.map(song => {
                chartContent.innerHTML += `
                <div class="song">
                    <div class="song__img">
                        <img src="${song.thumbnail}"></img>
                    </div>
                    <div class="song__info">
                        <h4>${song.title}</h4>
                        <p>${song.artists.map(artist => artist.name)}</p>
                    </div>
                    <div class="song__option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
            })
        }
    },
    start: function() {
        this.render()
    }
}
export default chart