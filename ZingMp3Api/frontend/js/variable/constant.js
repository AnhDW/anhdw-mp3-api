const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
export const aElements = $$('.nav__item__link')
export const iElements = $$('.fa-solid')
export const content = $('#section__right__bottom')
export const keyword = $('#keyword')
export const songImg = $('.song__img')
export const songTitle = $('.title')
export const songAuthor = $('.author')
export const audio = $('#audio')
export const playBtn = $('.icon-play')
export const pauseBtn = $('.icon-pause')
export const togglePlay = $('.btn-toggle-play')
export const prevBtn = $('.btn-prev')
export const nextBtn = $('.btn-next')
export const randomBtn = $('.btn-random')
export const repeatBtn = $('.btn-repeat')
export const progress = $('.progress')
export const container = $('.container')
export const contentItem = $$('.content__item')

export const myMusicContent = $('.my-music__content')
export const homeContent = $('.home__content')
export const chartContent = $('.chart__content')
export const radioContent = $('.radio__content')
export const followContent = $('.follow__content')
export const searchContent = $('.search__content')


export const dataChart = fetch('http://localhost:3000/api/chart').then(res => res.json())