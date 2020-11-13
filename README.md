# Javascript ES6 helper utilities

Simple method organized in objects for better importing. 
Most of these methods have error handling.

Project is still in development, so please be patient.

## Install

``npm i github:zpectah/javascript-es6-helpers --save``

## Import

``import jsES6Helpers from 'javascript-es6-helpers';``

or

``import { date, number, string, array, cookies, storage, session, element, image, data, http, view } from 'javascript-es6-helpers';``

you can use aliases

``import { view as viewHelper } from 'javascript-es6-helpers';``

## Method groups:


### { date }

#### date.getTodayObject() => object{year: number, month: number, day: number, hour: number, minute: number, second: number}

#### date.getTimestampString(separator?) => string

name | type | default value
------------ | ------------- | -------------
separator | _string_


### { number }

#### number.getTwoDecimal(number) => string

name | type | default value
------------ | ------------- | -------------
number | _number_ | 


### { string }

#### string.getRandom(length?, type?, patterns?) => string

name | type | default value | options
------------ | ------------- | ------------- | -------------
length | _number_ | 16
type | _string_ | 'all' | [uppercase, lowercase, number, special, all]
patterns | _object_ | { uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', lowercase: 'abcdefghijklmnopqrstuvwxyz', number: '0123456789', special: '_-' }

#### string.getToken(length?, separator?) => string

name | type | default value
------------ | ------------- | -------------
length | _number_ | 8
separator | _string_ | '-'

#### string.truncate(input, length?, end?) => [string, string?]

name | type | default value
------------ | ------------- | -------------
input | _string_
length | _number_ | 500
end | _string_ | '…'

#### string.truncateFileName(fileName, length?, separator?) => string

name | type | default value
------------ | ------------- | -------------
fileName | _string_
length | _number_ | 10
separator | _string_ | '…'


### { array }

#### array.add(array, item) => array[]

name | type | default value
------------ | ------------- | -------------
array | _array_
item | _any_

#### array.remove(array, index) => array[]

name | type | default value
------------ | ------------- | -------------
array | _array_
index | _number_

#### array.search(array, attrs, search) => array[]

name | type | default value
------------ | ------------- | -------------
array | _array_
attrs | _array_
search | _string_

##### Example:
``
array.search([{name: 'b', title: 'a'}, {name: 'c', title: 'd'}], ['name', 'title'], 'c'') => [{name: 'c', title: 'd'}]
``


### { object }

#### object.search(object, search) => any

name | type | default value
------------ | ------------- | -------------
object | _object_
search | _string_


### { cookies }

#### cookies.set(name, value, days?, path?)

name | type | default value
------------ | ------------- | -------------
name | _string_
value | _string_
days | _number_ | 365
path | _string_ | '/'

#### cookies.get(name) => string

name | type | default value
------------ | ------------- | -------------
name | _string_

#### cookies.check(name) => boolean

name | type | default value
------------ | ------------- | -------------
name | _string_

#### cookies.delete(name)

name | type | default value
------------ | ------------- | -------------
name | _string_


### { storage }

#### storage.set(name, value)

name | type | default value
------------ | ------------- | -------------
name | _string_
value | _string_

#### storage.get(name) => string

name | type | default value
------------ | ------------- | -------------
name | _string_

#### storage.remove(name)

name | type | default value
------------ | ------------- | -------------
name | _string_

#### storage.clearAll()


### { session }

#### session.set(name, value)

name | type | default value
------------ | ------------- | -------------
name | _string_
value | _string_

#### session.get(name) => string

name | type | default value
------------ | ------------- | -------------
name | _string_

#### session.remove(name)

name | type | default value
------------ | ------------- | -------------
name | _string_

#### session.clearAll()


### { element }

#### element.get(selector, parent?) => node

name | type | default value
------------ | ------------- | -------------
selector | _string_
parent | _node_ | document

#### element.getAll(selector, parent?) => array[nodes]

name | type | default value
------------ | ------------- | -------------
selector | _string_
parent | _node_ | document

#### element.remove(element) => boolean

name | type | default value
------------ | ------------- | -------------
element | _node_

#### element.create(tagName, content, parent?) => boolean

name | type | default value
------------ | ------------- | -------------
tagName | _string_
content | _string_
parent | _node_ | document

#### element.append(parentElement, childElement) => boolean

name | type | default value
------------ | ------------- | -------------
parentElement | _node_
childElement | _node_

#### element.addClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | _node_
classList | _array_

#### element.removeClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | _node_
classList | _array_

#### element.toggleClass(element, classList)

name | type | default value
------------ | ------------- | -------------
element | _node_
classList | _array_

#### element.isClass(element, className) => boolean

name | type | default value
------------ | ------------- | -------------
element | _node_
className | _string_

#### element.addAttr(element, attrsObject)

name | type | default value
------------ | ------------- | -------------
element | _node_
attrsObject | _object_

#### element.removeAttr(element, attrsList)

name | type | default value
------------ | ------------- | -------------
element | _node_
attrsList | _array_

#### element.isAttr(element, attrName) => boolean

name | type | default value
------------ | ------------- | -------------
element | _node_
attrName | _string_


### { image }

#### image.onLoad(element, callback) => callback(event, element)

name | type | default value
------------ | ------------- | -------------
element | _node_
callback | _function_


### { data }

#### data.dataURItoBlob(dataURI) => (binary:blob)

name | type | default value
------------ | ------------- | -------------
dataURI | _base64_


### { http }

#### http.ajax(url, method?, body?, headers?) => promise => any

name | type | default value | options
------------ | ------------- | ------------- | -------------
url | _string_
method | _string_ | 'GET' | [GET, POST, DELETE, UPDATE]
body | _object_ | {}
headers | _object_ | {'Content-Type': 'application/json'}


### { view }

#### view.onReady(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | _function_

#### view.beforeUnload(callback) => callback(event)

name | type | default value
------------ | ------------- | -------------
callback | _function_


