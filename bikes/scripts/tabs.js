//разобрать что и как работает Event
class Event {
    constructor(name) {
        this._name = name;
        this._subscribers = [];
    }

    get name() {
        return this._name;
    }

    on(subscriber) {
        if (this._subscribers.find(item => item === subscriber) !== undefined) {
            return;
        }
        this._subscribers.push(subscriber)
    }

    off(subscriber) {
        this._subscribers = this._subscribers.filter(item => item !== subscriber);
    }

    trigger(data = null) {
        this._subscribers.forEach(item => item(data));
    }
}


class Tab {
    constructor(title, content, isOpen) {
        this._isOpen = isOpen;
        this._toggleEvent = new Event('tabs:toggle');
        this._init();
    }

    _init(){
        //повесит обработчик на tabs__navigation-btn
    }

    //евент выставленный наружу
    get toggleEvent(){
        return this._toggleEvent;
    }

    //свойство выставленное наружу
    get isOpen(){
        return this._isOpen;
    }

    //метод который закрывает и открывает панели, используется снаружи
    toggle(value){
        this._isOpen = value;
        this._toggleEvent.trigger(value);
    }
}

class Tabs {
    constructor() {
        this._container = document.querySelector('.tabs');
        //собрать объект из DOM объетов для табов
        this._items = items.map((item, i) => new Tab(item.title, item.content, i === 0));
        this._items.forEach(item => {
            //подписка на события
            item.toggleEvent.on(this._onTabsChange);
        })
    }

    _onTabsChange(value){
        //закрывается все панели
    }
}