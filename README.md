# rectangle.js
Simple rectangle in JavaScript.

## Usage

#### Creating a rectangle

```js
var rectangle = new Rectangle();
```

Set all value is zero.

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
var fromRect = new Rectangle();
fromRect.set(20, 20, 200, 100);
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
var rectangle = new Rectangle();
rectangle.set(10, 15, 100, 200);
rectangle.left(); // => 10
rectangle.top(); // => 15
rectangle.right(); // => 110
rectangle.bottom(); // => 215
```

> centerX centerY

```js
var rectangle = new Rectangle();
rectangle.set(10, 15, 100, 205);
rectangle.centerX(); // => 60
rectangle.centerY(); // => 117
```

※ Use `Math.floor`

#### Update rectangle coordinate

> move

```js
var rectangle = new Rectangle();
rectangle.set(5, 20, 100, 200);
rectangle.move(10, 5); // => x:15, y:25
```

> scale

```js
var rectangle = new Rectangle();
rectangle.set(5, 20, 100, 200);
rectangle.scale(2.0, 2.0);
```

Scale rectangle from center.

#### Contains rectangle

> contains

```js
var rectangle = new Rectangle();
rectangle.set(5, 15, 150, 150);
rectangle.contains(6, 164); // => true
```

> containsWithPadding

```js
var rectangle = new Rectangle();
rectangle.set(5, 15, 150, 150);
rectangle.containsWithPadding(4, 164, 10); // => true
```

> limit

```js
var rectangle = new Rectangle();
rectangle.set(5, 15, 150, 150);
var rectLimit = new Rectangle();
rectLimit.set(30, 30, 10, 10);
rectangle.limit(rectLimit); // => x:30, y:30, width: 10, height:10
```

To update a small rectangle.

## Licence

MIT

## Author

[slowhand0309](https://github.com/Slowhand0309)
