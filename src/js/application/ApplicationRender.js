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
        this._registerSw().then(function(reg) {
            // регистрация сработала
            console.log('Registration succeeded. Scope is ' + reg.scope);
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
}

export default ApplicationRender;