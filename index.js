/*
Created by: zpecter.com
Url: https://github.com/zpectah/javascript-es6-helpers
*/

const messages = {
    error: 'Undefined error',
    elementNotSet: 'Element  not set!',
    selectorNotSet: 'Selector not set!',
    tagNotSet: 'Tag name not set!',
    classListArray: 'Class list must be an array!',
    notValidElement: 'Not valid node element!',
    parentOrChildNotSet: 'Parent or child element not set!',
    notValidArray: 'Not valid Array field!',
    notValidObject: 'Not valid Object!'
};

const date = {
    getTodayObject: function () {
        const D = new Date();
        const getDayOfTheYear = () => {
            let start = new Date(D.getFullYear(), 0, 0);
            let diff = (D - start) + ((start.getTimezoneOffset() - D.getTimezoneOffset()) * 60 * 1000);
            let oneDay = 1000 * 60 * 60 * 24;
            return Math.floor(diff / oneDay);
        };
        return {
            year: D.getFullYear(),
            month: D.getMonth() + 1,
            day: D.getDate(),
            hour: D.getHours(),
            minute: D.getMinutes(),
            second: D.getSeconds(),
            dayOfTheWeek: D.getDay(),
            dayOfTheYear: getDayOfTheYear(),
        };
    },
    getTimestampString: function (
        separator = ''
    ) {
        const T = this.getTodayObject();

        return T.year + separator +  number.getTwoDecimal( T.month ) + separator +  number.getTwoDecimal( T.day ) + separator +  number.getTwoDecimal( T.hour ) + separator +  number.getTwoDecimal( T.minute );
    },
};

const number = {
    getTwoDecimal: function (
        number
    ) {
        let string = String( number );
        if ( Number( number ) <= 9 ) string = '0' + '' + number;

        return String( string );
    },
};

const string = {
    getRandom: function (
        length = 16,
        type = 'all',
        patterns = {}
    ) {
        const subs = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            number: '0123456789',
            special: '_-',
            ...patterns
        };
        const get_string = () => {
            let string = subs.uppercase + subs.lowercase + subs.number + subs.special;
            switch ( type ) {
                case 'uppercase':
                    string = subs.uppercase;
                    break;
                case 'lowercase':
                    string = subs.lowercase;
                    break;
                case 'number':
                    string = subs.number;
                    break;
                case 'special':
                    string = subs.special;
                    break;
            }
            return string;
        };
        let text = '';
        const possible = get_string();
        for ( let i = 0; i < length; i++ ) {
            text += possible.charAt( Math.floor( Math.random() * possible.length ) );
        }

        return text;
    },
    getToken: function (
        length = 8,
        separator = '-'
    ) {
        const subs = {
            a: this.getRandom( ( length / 2 ), 'lowercase' ),
            b: this.getRandom( ( length ), 'number' ),
            c: this.getRandom( ( length ), 'uppercase' ),
            d: this.getRandom( ( length * 2 ) ),
        };

        return subs.a + separator + subs.b + separator + subs.c + separator + subs.d;
    },
    truncate: function (
        input,
        length = 500,
        end = '…'
    ) {
        if (input) {
            let shouldTruncate = input.length >= length;
            let truncated = shouldTruncate ? input.substring(0, length) : input;
            let rest = shouldTruncate ? input.substring(length) : null;
            if (shouldTruncate) {
                return [
                    truncated + end,
                    rest,
                ];
            } else {
                return [
                    truncated
                ];
            }
        } else {
            return null;
        }
    },
    truncateFileName: function (
        fileName,
        length = 10,
        separator = '…'
    ) {
        let ext = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase();
        let name = fileName.replace('.'+ext,'');
        if(name.length <= length) {
            return fileName;
        }
        name = name.substr(0, length) + (fileName.length > length ? separator : '');
        return name + '.' + ext;
    },
};

const array = {
    add: function (
        array,
        item
    ) {
        if (Array.isArray(array)) {
            if (array.indexOf(item) === -1) array.push();
        } else {
            console.warn(messages.notValidArray);
        }

        return array;
    },
    remove: function (
        array,
        index
    ) {
        if (Array.isArray(array)) {
            if (index > -1) array.splice(index, 1);
        } else {
            console.warn(messages.notValidArray);
        }

        return array;
    },
    search: function (
        array,
        attrs,
        search
    ) {
        // Up to five level object is possible to search => item[0][1][2][3][4] = value to search
        let na = [];
        attrs.forEach(attr => {
            na = [
                ...na,
                ...array.filter(item => {
                    if (attr.indexOf('.') > -1) {
                        let cb = attr.split(/[,.]/);
                        if (cb[0] && cb[1]) {
                            if (item[cb[0]][cb[1]].includes(search)) if (!na.includes(item)) return item;
                        } else if (cb[0] && cb[2]) {
                            if (item[cb[0]][cb[1]][cb[2]].includes(search)) if (!na.includes(item)) return item;
                        } else if (cb[0] && cb[3]) {
                            if (item[cb[0]][cb[1]][cb[2]][cb[3]].includes(search)) if (!na.includes(item)) return item;
                        } else if (cb[0] && cb[4]) {
                            if (item[cb[0]][cb[1]][cb[2][cb[3]][cb[4]]].includes(search)) if (!na.includes(item)) return item;
                        }
                    } else {
                        if (item[attr] && item[attr].includes(search)) if (!na.includes(item)) return item;
                    }
                })
            ];
        });
        return na;
    }
};

const object = {
    search: function (
        object,
        search
    ) {
        if (object && typeof object == 'object') {
            for (let [key, value] of Object.entries(object)) {
                return value;
            }
        } else {
            console.warn(messages.notValidObject);
        }
    }
};

const cookies = {
    set: function (
        name,
        value,
        days = 365,
        path = '/'
    ) {
        let d = new Date();
        d.setTime(d.getTime() + (days*24*60*60*1000));
        let expires = 'expires='+ d.toUTCString();
        document.cookie = name + '=' + value + ';' + expires + ';path=' + path;
    },
    get: function (
        name
    ) {
        let cname = name + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }

        return null;
    },
    check: function (
        name
    ) {
        let present;
        if (this.get(name) !== null) {
            present = true;
        } else {
            present = false;
        }

        return present;
    },
    remove: function (
        name
    ) {
        document.cookie = name + '=; Max-Age=-99999999;';
    },
};

const storage = {
    set: function (
        name,
        value
    ) {
        localStorage.setItem(name, value);
    },
    get: function (
        name
    ) {
        return localStorage.getItem(name);
    },
    remove: function (
        name
    ) {
        localStorage.removeItem(name);
    },
    clearAll: function () {
        localStorage.clear();
    },
};

const session = {
    set: function (
        name,
        value
    ) {
        sessionStorage.setItem(name, value);
    },
    get: function (
        name
    ) {
        return sessionStorage.getItem(name);
    },
    remove: function (
        name
    ) {
        sessionStorage.removeItem(name);
    },
    clearAll: function () {
        sessionStorage.clear();
    },
};

const element = {
    get: function (
        selector,
        parent = document
    ) {
        if (selector) {
            return parent.querySelector(selector);
        } else {
            console.warn(messages.selectorNotSet);

            return null;
        }
    },
    getAll: function (
        selector,
        parent = document
    ) {
        if (selector) {
            return parent.querySelectorAll(selector);
        } else {
            console.warn(messages.selectorNotSet);

            return null;
        }
    },
    remove: function (
        element
    ) {
        if (element) {
            element.remove();

            return true;
        } else {
            console.warn(messages.elementNotSet);

            return false;
        }
    },
    create: function (
        tagName,
        content,
        parent = document
    ) {
        if (tagName) {
            const parent = parent.createElement(tagName);
            if (content) parent.innerHTML = content;

            return parent;
        } else {
            console.warn(messages.tagNotSet);

            return null;
        }
    },
    append: function (
        parentElement,
        childElement
    ) {
        if (parentElement && childElement) {
            if (parentElement.nodeType && childElement.nodeType) {
                parentElement.appendChild(childElement);

                return true;
            } else {
                console.warn(messages.notValidElement);

                return false;
            }
        } else {
            console.warn(messages.parentOrChildNotSet);

            return false;
        }
    },
    addClass: function (
        element,
        classList
    ) {
        if (element) {
            if (Array.isArray(classList)) {
                if (classList.length > 0) {
                    classList.forEach(item => element.classList.add(item));
                }
            } else {
                console.warn(messages.classListArray);
            }
        } else {
            console.warn(messages.elementNotSet);
        }
    },
    removeClass: function (
        element,
        classList
    ) {
        if (element) {
            if (Array.isArray(classList)) {
                if (classList.length > 0) {
                    classList.forEach(item => element.classList.remove(item));
                }
            } else {
                console.warn(messages.classListArray);
            }
        } else {
            console.warn(messages.elementNotSet);
        }
    },
    toggleClass: function (
        element,
        classList
    ) {
        if (element) {
            if (Array.isArray(classList)) {
                if (classList.length > 0) {
                    classList.forEach(item => element.classList.toggle(item));
                }
            } else {
                console.warn(messages.classListArray);
            }
        } else {
            console.warn(messages.elementNotSet);
        }
    },
    isClass: function (
        element,
        className
    ) {
        if (element) {
            if (className) return element.classList.contains(className);
        } else {
            console.warn(messages.elementNotSet);

            return null;
        }
    },
    addAttr: function (
        element,
        attrsObject
    ) {
        if (element) {
            if (typeof attrsObject === 'object') {
                for (const [key, value] of Object.entries(attrsObject)) {
                    element.setAttribute(key, value);
                }
            } else {
                console.warn(messages.notValidObject);
            }
        } else {
            console.warn(messages.elementNotSet);
        }
    },
    removeAttr: function (
        element,
        attrsList
    ) {
        if (element) {
            if (Array.isArray(attrsList)) {
                if (attrsList.length > 0) {
                    attrsList.forEach(item => element.removeAttribute(item));
                }
            } else {
                console.warn(messages.classListArray);
            }
        } else {
            console.warn(messages.elementNotSet);
        }
    },
    isAttr: function (
        element,
        attrName
    ) {
        if (element) {
            if (attrName) return element.hasAttribute(attrName);
        } else {
            console.warn(messages.elementNotSet);

            return null;
        }
    },
};

const image = {
    onLoad: function (element, callback) {
        if (element) {
            return element.addEventListener('load', (e) => {
                if (callback && typeof callback == 'function') return callback(e, element);
            });
        } else {
            console.warn(messages.elementNotSet);
        }
    },
};

const data = {
    dataURItoBlob: function (
        dataURI
    ) {
        let byteString;
        if (dataURI.split(",")[0].indexOf("base64") >= 0)
            byteString = atob(dataURI.split(",")[1]);
            else byteString = unescape(dataURI.split(",")[1]);
        let mimeString = dataURI
            .split(",")[0]
            .split(":")[1]
            .split(";")[0];
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: mimeString });
    },
    objectToFormData: function (
        object
    ) {
        const fd = new FormData;

        for ( let key in object ) {
            fd.append(key, object[key]);
        }

        return fd;
    }
};

const http = {
    ajax: function await (
        url = '',
        method = 'GET',
        data = {},
        headers = {
            'Content-Type': 'application/json'
        }
    ) {
        const init = {
            method: method.toUpperCase(),
            headers: headers,
        }
        // if (init.method !== 'GET') init.body = JSON.stringify(data);
        // if (init.method !== 'GET') init.body = data;
        if (init.method !== 'GET') init.body = data.objectToFormData(data);
        return fetch(
            url,
            init
        )
        .then(resp => resp.json())
        .then(response => response);
    }
};

const view = {
    onReady: function (callback) {
        return window.addEventListener('DOMContentLoaded', (e) => {
            if (callback && typeof callback == 'function') return callback(e);
        });
    },
    beforeUnload: function (callback) {
        return window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = '';
            if (callback && typeof callback == 'function') return callback(e);
        });
    }
};

const link = {
    go: function (url, target = '_self') {
        window.location.href = url;
    },
    goHome: function (url = '/') {
        window.location.href = url;
    }
};


module.exports = exports = {
    date: date,
    number: number,
    string: string,
    array: array,
    object: object,
    cookies: cookies,
    storage: storage,
    session: session,
    element: element,
    image: image,
    data: data,
    http: http,
    view: view,
    link: link,
};
