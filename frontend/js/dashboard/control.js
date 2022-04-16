import {
    domain,
    container,
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
    sectionRight,
    sectionRightTop,
} from '../variable/constant.js'

const control = {
    currentId: '',
    currentIndex: 0,
    data: [],
    next: function() {
        this.currentIndex++
            if (this.currentIndex > this.data.length - 1) {
                this.currentIndex = 0
            }

        this.currentId = this.data[this.currentIndex]
        this.init()
    },
    prev: function() {
        this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.data.length - 1
            }

        this.currentId = this.data[this.currentIndex]
        this.init()
    },
    random: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.data.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.currentId = this.data[this.currentIndex]
        this.init()
    },
    time: function(time) {
        var mind = time % (60 * 60)
        var min = Math.floor(mind / 60) < 10 ? '0' + Math.floor(mind / 60) : Math.floor(mind / 60)
        var secd = mind % 60
        var sec = secd < 10 ? '0' + Math.ceil(secd) : Math.ceil(secd)
        return min + ':' + sec
    },
    playSong: function() {
        audio.play()
        container.classList.add('playing')
    },
    pauseSong: function() {
        audio.pause()
        container.classList.remove('playing')
    },
    handle: function() {
        togglePlay.onclick = () => {
            if (audio.paused) {
                this.playSong()
            } else {
                this.pauseSong()
            }
        }
        nextBtn.onclick = () => {
            if (randomBtn.classList.contains('active')) {
                this.random()
            } else {
                this.next()
            }
            this.getData()
        }
        prevBtn.onclick = () => {
            if (randomBtn.classList.contains('active')) {
                this.random()
            } else {
                this.prev()
            }
        }
        randomBtn.onclick = () => {
            if (randomBtn.classList.contains('active')) {
                randomBtn.classList.remove('active')
            } else {
                randomBtn.classList.add('active')
            }
        }
        repeatBtn.onclick = () => {
            if (repeatBtn.classList.contains('active')) {
                repeatBtn.classList.remove('active')
            } else {
                repeatBtn.classList.add('active')
            }
        }
        audio.ontimeupdate = () => {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100) //thời gian hiện tại chia cho thời lượng bài hát ra phần trăm
                progress.value = progressPercent
                document.querySelector('.current-time').innerText = this.time(audio.currentTime)
                document.querySelector('.duration-time').innerText = this.time(audio.duration)
            }
        }
        progress.onchange = function(e) {
            audio.currentTime = e.target.value / 100 * audio.duration
        }
        audio.onended = function() {
            if (repeatBtn.classList.contains('active') == false) {
                nextBtn.click()
            } else {
                audio.play()
            }
        }
        sectionRight.onscroll = function() {
            const scrollTop = sectionRight.scrollTop
            sectionRightTop.style.backgroundColor = `rgba(251,211,210,${scrollTop / 100})`
        }
    },
    getData: async function() {
        container.onclick = e => {
            var songs = e.target.closest('.songs') || e.target.closest('.listSong')
            var song = e.target.closest('.song')
            if (songs && song) {
                this.data = songs.dataset.songs.split(' ')
                this.currentIndex = this.data.findIndex(item => item === song.dataset.id)
                this.currentId = song.dataset.id
                this.init()
            }

        }
    },
    render: function() {},
    init: async function() {
        var infoSong = await fetch(domain + '/api/infosong/' + this.data[this.currentIndex]).then(res => res.json())
        var audioSong = await fetch(domain + '/api/song/' + this.data[this.currentIndex]).then(res => res.json())
        songImg.style.backgroundImage = `url(${infoSong.data.thumbnail})`
        songTitle.innerText = infoSong.data.title
        songAuthor.innerText = infoSong.data.artistsNames
        audio.src = audioSong.data[128]
        this.playSong()

        var song = document.querySelectorAll('.song')
        song.forEach(item => {
            if (item.dataset.id === this.currentId) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })
    },
    start: function() {
        this.getData()
        this.handle()
    }
}

export default control