import ApplicationModel from './ApplicationModel';

class ApplicationRender {
    constructor(ApplicationModel){
        this._model = ApplicationModel;

        this.rootComponent = document.getElementById('content');

        this.blogItemsContainer = document.createElement('div');
        this.blogItemsContainer.classList.add('blogItems');
        this.blogItemsContainer.innerHTML = 'blog items goes here';

        this.rootComponent.appendChild(this.blogItemsContainer);
    }

    render() {
        const self = this;
        this._registerSw().then(function(reg) {
            // регистрация сработала
            console.log('Registration succeeded. Scope is ' + reg.scope);
            console.log('start fetching');
            self._getBlogPosts();
        }).catch(function(error) {
            // регистрация прошла неудачно
            console.log('Registration failed with ' + error);
        });;
        console.log('items loaded');
    }

    _registerSw () {
        if ('serviceWorker' in navigator) {
            return navigator.serviceWorker.register('/sw/sw.js', { scope: '/sw/' });
        };
    }

    _getBlogPosts() {
        const path = "https://api.instagram.com/v1/users/self/media/recent/?access_token=39834919b1064fba86926133d9b5d8eb";
        console.log('try to fetch');
        fetch(path).then((response) => {
            console.log('instagrampath successufully fetched, the response is: ', response);
        }).catch((err) => {
            console.err(err);
        });
    }
}

export default ApplicationRender;