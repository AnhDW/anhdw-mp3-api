import { searchContent, keyword, domain } from '../variable/constant.js';


const search = {
    render: async function() {
        var data = await fetch(domain + '/api/search/' + keyword.value).then(res => res.json())
        searchContent.innerHTML = ''

        for (let i in data.data) {
            var html = `<div class='${i}'></div>`
            searchContent.innerHTML += html
            console.log(data.data[i])
        }

        var topSearch = document.querySelector('.top')
        var artistSearch = document.querySelector('.artists')
        var songSearch = document.querySelector('.songs')
        var videoSearch = document.querySelector('.videos')
        var playlistSearch = document.querySelector('.playlists')


        if (topSearch != null) {
            topSearch.innerHTML += `
            <h3>Top Kết Quả "${keyword.value}"</h3>
            <div class='top__item'>
                <img src='${data.data.top.thumbnail}'>
                <h4>${data.data.top.name||data.data.top.artists.map(artist=>artist.name)}</h4>
            </div>`
        }

        if (artistSearch != null) {
            artistSearch.innerHTML += '<h3>Nghệ Sĩ</h3>'
            data.data.artists.map((artist) => {
                artistSearch.innerHTML += `
                <div class='top__item'>
                <img src='${artist.thumbnail}'>
                <h4>${artist.name}</h4>
                </div>`
            })
        }

        if (songSearch != null) {
            data.data.songs.map((song) => {
                songSearch.innerHTML += `
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
                </div>`
            })
        }

        if (videoSearch != null) {
            data.data.videos.map((video) => {
                videoSearch.innerHTML += `
                <div class='video'>
                    <img src='${video.thumbnail}'>
                    <h4>${video.title}</h4>
                    <p>${video.artists.map((artist) => artist.name)}</p>
                </div>`
            })
        }

        if (playlistSearch != null) {
            data.data.playlists.map((playlist) => {
                playlistSearch.innerHTML += `
                    <div class='video'>
                        <img src='${playlist.thumbnail}'>
                        <h4>${playlist.title}</h4>
                        <p>${playlist.artists.map((artist) => artist.name)}</p>
                    </div>`
            })
        }

    },
    start: function() {
        this.render();
    }
}
export default search