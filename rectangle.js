// rectangle.js
//
'use strict';

/**
 * Constructor.
 *
 * Set all zero.
 */
var Rectangle = function() {
  this.set(0, 0, 0, 0);
};

/**
 * Set rectangle value.
 *
 * @param x Rectangle x
 * @param y Rectangle y
 * @param width Rectangle width
 * @param height Rectangle height
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
 * @param left Rectangle left
 * @param top Rectangle top
 * @param right Rectangle right
 * @param bottom Rectangle bottom
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
 * @param obj Other rectangle
 */
Rectangle.prototype.copy = function(obj) {
  if (obj != null && obj instanceof Rectangle) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
  }
};

/**
 * Check for empty rectangle object.
 *
 * @return true if rectangle value all zero
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
 * @return left
 */
Rectangle.prototype.left = function() {
  return this.x;
};

/**
 * Get rectangle top.
 *
 * @return top
 */
Rectangle.prototype.top = function() {
  return this.y;
};

/**
 * Get rectangle right.
 *
 * @return right
 */
Rectangle.prototype.right = function() {
  return this.x + this.width;
};

/**
 * Get rectangle bottom.
 *
 * @return right
 */
Rectangle.prototype.bottom = function() {
  return this.y + this.height;
};

/**
 * Move rectangle.
 *
 * @param dx amount of movement x
 * @param dy amount of movement y
 */
Rectangle.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
};

/**
 * Check for contains coordinate in rectangle.
 *
 * @param x
 * @param y
 */
Rectangle.prototype.contains = function(x, y) {
  this.containsWithPadding(x, y, 0);
};

/**
 * Check for contains coordinate in rectangle with padding.
 *
 * @param x
 * @param y
 * @param padding
 */
Rectangle.prototype.containsWithPadding = function(x, y, padding) {

  if (x > (this.x - padding) && x < (this.right() + padding)
      && y > (this.y - padding) && y < (this.bottom() + padding)) {
    return true;
  }
  return false;
};

/**
 * Update rectangle value by limit.
 *
 * @param rect Limit rectangle
 */
Rectangle.prototype.limit = function(rect) {
  if (rect != null && rect instanceof Rectangle) {
    if (this.x < rect.x) {
      this.x = rect.x;
    }
    if (this.y < rect.y) {
      this.y = rect.y;
    }
    if (this.width < rect.width) {
      this.width = rect.width;
    }
    if (this.height < rect.height) {
      this.height = rect.height;
    }
  }
};

/**
 * Scale rectangle.
 *
 * @param sx scale of x
 * @param sy scale of y
 */
Rectangle.prototype.scale = function(sx, sy) {
  this.x *= sx;
  this.y *= sy;
  this.width *= sx;
  this.height *= sy;
};
