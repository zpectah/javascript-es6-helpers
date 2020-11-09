# Javascript ES6 helper utilities

Simple method organized in objects for better importing. 
Most of these methods have error handling.

Project is still in development, so please be patient.

## Install

``npm i github:zpectah/javascript-es6-helpers --save``

## Import

``import Helpers from 'javascript-es6-helpers';``

or

``import { date, number, string, array, cookies, storage, session, element, image, http, document } from 'javascript-es6-helpers';``

you can use alias

``import { document as DocumentHelper } from 'javascript-es6-helpers';``

## Method groups:


### { date }

#### date.getTodayObject() => object{}

#### date.getTimestampString(separator?) => string

name | type | default value
------------ | ------------- | -------------
separator | string


### { number }

#### number.getTwoDecimal(number) => string

name | type | default value
------------ | ------------- | -------------
number | number | 


### { string }

#### string.getRandom(length?, type?, patterns?) => string

name | type | default value | options
------------ | ------------- | ------------- | -------------
length | number | 16
type | string | 'all' | [uppercase, lowercase, number, special, all]
patterns | object | { uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', lowercase: 'abcdefghijklmnopqrstuvwxyz', number: '0123456789', special: '_-' }

#### string.truncate(input, length?, end?) => [string, string?]

name | type | default value
------------ | ------------- | -------------
input | string
length | number | 500
end | string | '…'

#### string.truncateFileName(fileName, length?, separator?) => string

name | type | default value
------------ | ------------- | -------------
fileName | string
length | number | 10
separator | string | '…'


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

#### element.getAll(selector, parent?) => array[nodes]

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


## { image }

#### image.onLoad(element, callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
element | node
callback | function


## { data }

#### data.dataURItoBlob(dataURI) => (binary:blob)

name | type | default value
------------ | ------------- | -------------
dataURI | base64


## { http }

#### http.ajax(method, url, body, headers?) => promise => object{}

name | type | default value | options
------------ | ------------- | ------------- | -------------
method | string | 'GET' | [GET, POST, DELETE, UPDATE]
url | string
body | object
headers | object | {'Content-Type': 'application/json'}


## { document }

### document.onReady(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | function

### document.beforeUnload(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | function


