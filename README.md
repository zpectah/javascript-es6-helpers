# Javascript ES6 helper utilities

Simple method organized in objects for better importing. 
Most of these methods have error handling.

Project is still in development, so please be patient.

## Install

``npm i github:zpectah/javascript-es6-helpers --save``

## Import

``import Helpers from 'javascript-es6-helpers';``

or

``import { date, number, string, array, cookies, storage, session, element, http, document } from 'javascript-es6-helpers';``

you can use alias

``import { document as DocumentHelper } from 'javascript-es6-helpers';``

## Method groups:


### { date }

#### date.getTodayObject() => object{}

#### date.getTimestampString() => string

name | type | default value
------------ | ------------- | -------------
separator | string


### { number }

#### number.getTwoDecimal(number) => string

name | type | default value
------------ | ------------- | -------------
number | number | 


### { string }

#### string.getRandom(length?, type?) => string

name | type | default value
------------ | ------------- | -------------
length | number | 16
type | string | 'all'

#### string.getToken(length?, separator?) => string

name | type | default value
------------ | ------------- | -------------
length | number | 8
separator | string | '-'


### { array }

#### array.add(array, item) => array[]

name | type | default value
------------ | ------------- | -------------
array | array | 
item | any | 

#### array.remove(array, index) => array[]

name | type | default value
------------ | ------------- | -------------
array | array | 
index | number | 


### { cookies }

#### cookies.set(name, value, days?, path?)

name | type | default value
------------ | ------------- | -------------
name | string |
value | string |
days | number | 365
path | string | '/'

#### cookies.get(name) => string|null

name | type | default value
------------ | ------------- | -------------
name | string |

#### cookies.check(name) => boolean

name | type | default value
------------ | ------------- | -------------
name | string |

#### cookies.delete(name)

name | type | default value
------------ | ------------- | -------------
name | string |


## { storage }

### storage.set(name, value)

name | type | default value
------------ | ------------- | -------------
name | string
value | string

### storage.get(name) => string

name | type | default value
------------ | ------------- | -------------
name | string

### storage.remove(name)

name | type | default value
------------ | ------------- | -------------
name | string

### storage.clearAll()


## { session }

### session.set(name, value)

name | type | default value
------------ | ------------- | -------------
name | string
value | string

### session.get(name) => string

name | type | default value
------------ | ------------- | -------------
name | string

### session.remove(name)

name | type | default value
------------ | ------------- | -------------
name | string

### session.clearAll()


### { element }

#### element.get(selector, parent?) => node

name | type | default value
------------ | ------------- | -------------
selector | string |
parent | node | document

#### element.getAll(selector, parent?) => array[node]

name | type | default value
------------ | ------------- | -------------
selector | string |
parent | node | document

#### element.remove(element) => boolean

name | type | default value
------------ | ------------- | -------------
element | node |

#### element.create(tagName, content, parent?) => boolean

name | type | default value
------------ | ------------- | -------------
tagName | string
content | string
parent | node | document

#### element.append(parentElement, childElement) => boolean

name | type | default value
------------ | ------------- | -------------
parentElement | node
childElement | node

#### element.addClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | node
classList | array

#### element.removeClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | node
classList | array

#### element.toggleClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | node
classList | array

#### element.addAttr(element, attrsObject)

name | type | default value
------------ | ------------- | -------------
element | node
attrsObject | object

#### element.removeAttr(element, attrsList)

name | type | default value
------------ | ------------- | -------------
element | node
attrsList | array


## { http }

#### http.ajax(method, url, body, headers?) => promise => object{}

name | type | default value
------------ | ------------- | -------------
method | string
url | string
body | object
headers | object | { 'Content-Type': 'application/json' }


## { document }

### document.onReady(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | function

### document.beforeUnload(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | function


