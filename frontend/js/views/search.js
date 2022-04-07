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
                <img src='${data.data.top.thumbnailM}'>
                <h4>${data.data.top.name||data.data.top.artists.map(artist=>artist.name)}</h4>
            </div>`
        }

        if (artistSearch != null) {
            artistSearch.innerHTML += `<h3>Nghệ Sĩ/OA</h3>
            <div class='artist'></div>
            `
            data.data.artists.map((artist) => {
                document.querySelector('.artists .artist').innerHTML += `
                <div class='artist__item'>
                    <img src='${artist.thumbnailM}'>
                    <h4>${artist.name}</h4>
                </div>`
            })
        }
        if (songSearch != null) {
            songSearch.innerHTML += '<h3>Bài Hát</h3>'
            data.data.songs.map((song, index) => {
                songSearch.innerHTML += `
                <div class='song'>
                    <div class="song__index">${index+1}</div>
                    <div class='song__image' style='background-image: url(${song.thumbnailM})'></div>
                    <div class='song__info'>
                        <h4>${song.title}</h4>
                        <p>${song.artistsNames}</p>
                    </div>
                    <div class='song__control'>
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `


            })
        }
        if (videoSearch != null) {
            videoSearch.innerHTML += `<h3>MV</h3><div class='video'></div>`
            data.data.videos.map((video) => {
                document.querySelector('.videos .video').innerHTML += `
                <div class="video__item">
                    <img src="${video.thumbnailM}" alt="">
                    <div class="info">
                        <img src="${video.artist.thumbnail}" alt="">
                        <div class="info__title">
                            <h4>${video.title}</h4>
                            <p>${video.artists.map((artist) => artist.name)}</p>
                        </div>
                    </div>
                </div>`
            })
        }
        if (playlistSearch != null) {

            playlistSearch.innerHTML += `<h3>Playlist/Album</h3>
            <div class='playlist'></div>`
            data.data.playlists.map((playlist) => {
                document.querySelector('.playlists .playlist').innerHTML += `
                    <div class='playlist__item'>
                        <img src='${playlist.thumbnailM}'>
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