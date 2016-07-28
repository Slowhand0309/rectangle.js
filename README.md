# rectangle.js
Simple rectangle in JavaScript.

[![Build Status](https://travis-ci.org/Slowhand0309/rectangle.js.svg?branch=master)](https://travis-ci.org/Slowhand0309/rectangle.js)

[![BOWER version](https://badge-me.herokuapp.com/api/bower/Slowhand0309/rectangle.js.png)](http://badges.enytc.com/for/bower/Slowhand0309/rectangle.js)

## Install

```sh
$ bower install rectangle.js
```

## Usage

#### Creating a rectangle

```js
var r1 = new Rectangle();
// => x:0, y:0, width:0, height:0
var r2 = new Rectangle(5, 7, 10, 20);
// => x:5, y:7, width:10, height:20
```

#### Setting rectangle value

> set

```js
var rectangle = new Rectangle();
// x:10, y:10, width:100, height:200
rectangle.set(10, 10, 100, 200);
```
Set x, y, width, height value.

> corner

```js
var rectangle = new Rectangle();
// x:10, y:10, width:40, height:50
rectangle.corner(10, 10, 50, 60);
```
Set left, top, right, bottom value.

> copy

```js
var fromRect = new Rectangle(20, 20, 200, 100);
var rectangle = new Rectangle();
rectangle.copy(fromRect); // => 20, 20, 200, 100
```
Set value from other rectangle.

#### Check all value zero?

> empty

```js
var rectangle = new Rectangle();
rectangle.empty(); // => true
```

#### Get rectangle value

> left top right bottom

```js
var rectangle = new Rectangle(10, 15, 100, 200);
rectangle.left(); // => 10
rectangle.top(); // => 15
rectangle.right(); // => 110
rectangle.bottom(); // => 215
```

> centerX centerY

```js
var rectangle = new Rectangle(10, 15, 100, 205);
rectangle.centerX(); // => 60
rectangle.centerY(); // => 117
```

※ Use `Math.floor`

#### Check movable / scalable rectangle

> isMovable

```js
var rectangle = new Rectangle(5, 15, 150, 150);
var limit = new Rectangle(5, 10, 200, 200);
rectangle.isMovable(5, 5, limit); // => true
```

> isScalable

```js
var rectangle = new Rectangle(150, 150, 100, 100);
var limit = new Rectangle(50, 20, 260, 260);
rectangle.isScalable(2.0, 1.5, limit); // => true
```

#### Update rectangle coordinate

> move

```js
var rectangle = new Rectangle(5, 20, 100, 200);
rectangle.move(10, 5); // => x:15, y:25
```

> scale

```js
var rectangle = new Rectangle(5, 20, 100, 200);
rectangle.scale(2.0, 2.0);
```

Scale rectangle from center.

#### Contains rectangle

> contains

```js
var rectangle = new Rectangle(5, 15, 150, 150);
rectangle.contains(6, 164); // => true
```

> containsWithPadding

```js
var rectangle = new Rectangle(5, 15, 150, 150);
rectangle.containsWithPadding(4, 164, 10); // => true
```

#### Include rectangle

> include

```js
var r1 = new Rectangle(10, 10, 200, 50);
var r2 = new Rectangle(11, 11, 198, 48);
r1.include(r2); // => true
```

#### Limit rectangle

> limit

```js
var rectangle = new Rectangle(5, 15, 150, 150);
var rectLimit = new Rectangle(30, 30, 10, 10);
rectangle.limit(rectLimit); // => x:30, y:30, width: 10, height:10
```

To update a small rectangle.

#### Utilitys

> swap

```js
var rectangle = new Rectangle(5, 15, 100, 150);
rectangle.swap(); // => width:150, height:100
```

Swap width and height.

## Licence

MIT

## Author

[slowhand0309](https://github.com/Slowhand0309)
