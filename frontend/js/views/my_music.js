import { myMusicContent, domain, container, btnLogin, btnUser } from '../variable/constant.js';
import { pathName } from '../index.js';

const myMusic = {
    data: {},
    handle: function() {
        console.log(this.data.user)
        if (this.data.isLogin) {
            container.classList.add('login')
        } else {
            container.classList.remove('login')
        }

        btnUser.onclick = () => {
            window.history.pushState({}, '', '/my-music')
            pathName()
        }
    },
    render: function() {
        if (this.data.isLogin) {
            myMusicContent.innerHTML =
                `<div class="user">
                    <div class="user__avatar">
                        <img src="${this.data.user.picture}" alt=""/>
                    </div>
                    <div class="user__info">
                        <h3>${this.data.user.displayName}</h3>
                        <p>Email:${this.data.user.email}</p>
                        <p>Id:${this.data.user.id}</p>
                    </div>
                </div>
                <div class="favorite__song">
                    <h3>Favorite Song</h3>
                </div>`
            btnUser.src = this.data.user.picture
        } else {
            myMusicContent.innerHTML =
                `<div class="user">
                    <div class="user__avatar">
                        <img src="./img/Users-User-Male-icon.png" alt=""/>
                    </div>
                    <div class="user__info">
                        <h3>Ẩn Danh</h3>
                        <p>Email:</p>
                        <p>Id:</p>
                    </div>
                </div>
                <div class="favorite__song">
                    <h3>Favorite Song</h3>
                    <div class="songs">
                    </div>
                </div>`
            btnUser.src = './img/Users-User-Male-icon.png'
        }
        //btnLogin.href = this.data.link
        btnLogin.onclick = () => {
            window.history.pushState({}, '', this.data.link)
            window.location.reload()
        }

    },
    start: async function() {
        var data = await fetch(domain + '/auth/profile').then(res => res.json())
        this.data = data
        this.render()
        this.handle()
    }
}
export default myMusic