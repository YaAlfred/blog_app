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
        console.log('items loaded');
    }
}

export default ApplicationRender;