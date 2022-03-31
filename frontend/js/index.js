import HomeView from "./views/home.js"
import MyMusicView from "./views/my_music.js"
import ChartView from "./views/chart.js"
import RadioView from "./views/radio.js"
import FollowView from "./views/follow.js"
import Search from "./views/search.js"
import Error from "./views/404.js"

import { aElements, iElements, keyword, contentItem, domain } from './variable/constant.js';

function getUrlParameter(name, urlweb) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(urlweb);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const load = () => {
    HomeView.start()
    MyMusicView.start()
    ChartView.start()
    RadioView.start()
    FollowView.start()
}

const routes = {
    '/': 'Home',
    '/my-music': 'My Music',
    '/chart': 'Chart',
    '/radio': 'Radio',
    '/follow': 'Follow',
    '/search': 'Search',
    '/404': 'Error'
}

const route = e => {
    e.preventDefault()
    window.history.pushState({}, '', e.target.href)
    pathName()
}

const pathName = () => {
    var path = window.location.pathname
    var routeTitle = routes[path] || routes['/404']
    document.title = 'MP3 | ' + routeTitle
    if (routeTitle === 'Error') {
        contentItem.forEach((item) => {
            item.classList.remove('active')
        })
        document.querySelector('#content_404').classList.add('active')
    }
    aElements.forEach((a, index) => {
        if (a.href === (('http://localhost:' + ('3000' || process.env.PORT)) + path)) {
            a.classList.add('active')
            contentItem[index].classList.add('active')
            document.querySelector('#content_404').classList.remove('active')
        } else {
            a.classList.remove('active')
            contentItem[index].classList.remove('active')
            document.querySelector('.search__content').classList.remove('active')
        }
    })

    pathSearch()
}

const pathSearch = () => {
    var path = window.location.pathname
    var param = getUrlParameter('q', ('http://localhost:' + ('3000' || process.env.PORT)) + location.pathname + location.search)
    if (path === '/search') {
        keyword.value = param
        Search.start()

        contentItem.forEach((item) => {
            item.classList.remove('active')
        })
        document.querySelector('.search__content').classList.add('active')
    }
}

const handleSearch = () => {

    document.querySelector('.fa-magnifying-glass').onclick = (e) => {
        document.querySelector('#search__button').click()
    }
    document.querySelector('#search__button').onclick = (e) => {
        if (keyword.value !== '') {
            document.querySelector('#search__button').href = '/search?q=' + keyword.value
            e.preventDefault()
            window.history.pushState({}, '', e.target.href)
            pathName()
        }
    }

    keyword.addEventListener('keyup', (e) => {
        if (e.keyCode === 13 && keyword.value !== '') {
            document.querySelector('#search__button').click();
        }
    })
}



aElements.forEach((aElement, index) => {
    iElements[index].onclick = (e) => {
        aElement.click()
    }
    aElement.onclick = route
})

window.onpopstate = pathName

load()
pathName()
handleSearch()