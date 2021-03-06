// rectangle.js
//
(function(global) {
'use strict';

/**
 * Constructor.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 *
 * Set all zero if not argument.
 */
var Rectangle = function(x, y, width, height) {
  var _x = x || 0;
  var _y = y || 0;
  var _width = width || 0;
  var _height = height || 0;
  this.set(_x, _y, _width, _height);
};

/**
 * Set rectangle value.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 */
Rectangle.prototype.set = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

/**
 * Set rectangle corner value.
 *
 * @param {Number} left
 * @param {Number} top
 * @param {Number} right
 * @param {Number} bottom
 */
Rectangle.prototype.corner = function(left, top, right, bottom) {
  this.x = left;
  this.y = top;
  this.width = right - left;
  this.height = bottom - top;
};

/**
 * Copy other rectangle object.
 *
 * @param {Rectangle} obj
 */
Rectangle.prototype.copy = function(obj) {
  if (obj instanceof Rectangle) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
  }
};

/**
 * Check for empty rectangle object.
 *
 * @return {Boolean} true if rectangle value all zero
 */
Rectangle.prototype.empty = function() {
  if (this.x == 0 && this.y == 0 && this.width == 0 && this.height == 0) {
    return true;
  }
  return false;
};

/**
 * Get rectangle left.
 *
 * @return {Number} left
 */
Rectangle.prototype.left = function() {
  return this.x;
};

/**
 * Get rectangle top.
 *
 * @return {Number} top
 */
Rectangle.prototype.top = function() {
  return this.y;
};

/**
 * Get rectangle right.
 *
 * @return {Number} right
 */
Rectangle.prototype.right = function() {
  return this.x + this.width;
};

/**
 * Get rectangle bottom.
 *
 * @return {Number} bottom
 */
Rectangle.prototype.bottom = function() {
  return this.y + this.height;
};

/**
 * Get rectangle center x.
 *
 * @return {Number} center x
 */
Rectangle.prototype.centerX = function() {
  return this.x + Math.floor(this.width / 2);
};

/**
 * Get rectangle center y.
 *
 * @return {Number} center y
 */
Rectangle.prototype.centerY = function() {
  return this.y + Math.floor(this.height / 2);
};

/**
 * Check movable rectangle.
 *
 * @param {Number} dx amount of movement x
 * @param {Number} dy amount of movement y
 * @param {Rectangle} limit
 * @return {Boolean}
 */
Rectangle.prototype.isMovable = function(dx, dy, limit) {
  if (limit instanceof Rectangle) {
    var x = this.x + dx;
    var y = this.y + dy;
    if (x >= limit.x && y >= limit.y
        && x + this.width <= limit.right()
        && y + this.height <= limit.bottom()) {
        return true;
    }
  }
  return false;
};

/**
 * Move rectangle.
 *
 * @param {Number} dx amount of movement x
 * @param {Number} dy amount of movement y
 */
Rectangle.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
};

/**
 * Check scalable rectangle.
 *
 * @param {Number} sx scale of x
 * @param {Number} sy scale of y
 * @param {Rectangle} limit
 * @return {Boolean}
 */
Rectangle.prototype.isScalable = function(sx, sy, limit) {
  if (limit instanceof Rectangle) {
    var r = new Rectangle();
    r.copy(this);
    r.scale(sx, sy);
    if (r.x >= limit.x && r.y >= limit.y
        && r.right() <= limit.right()
        && r.bottom() <= limit.bottom()) {
        return true;
    }
  }
  return false;
};

/**
 * Scale rectangle from center.
 *
 * @param {Number} sx scale of x
 * @param {Number} sy scale of y
 */
Rectangle.prototype.scale = function(sx, sy) {

  var diffX = this.width * sx - this.width;
  var diffY = this.height * sy - this.height;

  this.x -= (diffX / 2);
  this.y -= (diffY / 2);
  this.width *= sx;
  this.height *= sy;
};

/**
 * Check for contains coordinate in rectangle.
 *
 * @param {Number} x
 * @param {Number} y
 */
Rectangle.prototype.contains = function(x, y) {
  return this.containsWithPadding(x, y, 0);
};

/**
 * Check for contains coordinate in rectangle with padding.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} padding
 */
Rectangle.prototype.containsWithPadding = function(x, y, padding) {

  if (x > (this.x - padding) && x < (this.right() + padding)
      && y > (this.y - padding) && y < (this.bottom() + padding)) {
    return true;
  }
  return false;
};

/**
 * Check for include other rectangle.
 *
 * @param {Rectangle} rect
 * @return {Boolean} True if include rect, False not include.
 */
Rectangle.prototype.include = function(rect) {
  if (rect instanceof Rectangle) {
    if (this.left() < rect.left() && this.right() > rect.right()
        && this.top() < rect.top() && this.bottom() > rect.bottom()) {
        return true;
    }
  }
  return false;
};

/**
 * Update rectangle value by limit.
 *
 * @param {Rectangle} rect Limit rectangle
 */
Rectangle.prototype.limit = function(rect) {
  if (rect instanceof Rectangle) {
    if (this.x < rect.x) {
      this.x = rect.x;
    }
    if (this.y < rect.y) {
      this.y = rect.y;
    }
    if (this.right() > rect.right()) {
      this.width = rect.width;
    }
    if (this.bottom() > rect.bottom()) {
      this.height = rect.height;
    }
  }
};

/**
 * Swap width and height.
 */
Rectangle.prototype.swap = function() {
  var tmp = this.width;
  this.width = this.height;
  this.height = tmp;
};

if ("process" in global) {
    module["exports"] = Rectangle;
}
global["Rectangle"] = Rectangle;

})((this || 0).self || global);
