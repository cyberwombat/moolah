
var M = function(n) {
  this.me = parseFloat(n || 0) * 100;

};
M.prototype.reduce = function(array, fn, init) {
  var self = this;
  var tally = this.in(init);

  array.forEach(function(i) {
    var m  = function(n) {
      return new M().in(n);
    };
    var sub = fn.call(self, m, i);
    tally.plus(sub ? sub.float() : 0);
  });
  return this;
};

M.prototype.load = function(n) {
  return typeof n === Object ? n.float() : parseFloat(n || 0);
};

M.prototype.discount = function(n) {
  var d = this.me * ((n < 1) ? n : n / 100);
  this.me = this.me - d;
  return this;
};

M.prototype.percent = function(n) {
  var d = this.me * ((n < 1) ? n : n / 100);
  this.me = d;
  return this;
};

M.prototype.in = function(n) {
  this.me = parseFloat(n || 0) * 100;
  return this;
};

M.prototype.plus = function(n) {
  this.me += this.load(n) * 100;
  return this;
};

M.prototype.less = function(n) {
  this.me -= this.load(n) * 100;
  return this;
};

M.prototype.times = function(n) {
  this.me = this.me * this.load(n);
  return this;
};

M.prototype.by = function(n) {
  this.me = this.me / this.load(n);
  return this;
};

M.prototype.float = function() {
  return Math.round(this.me, 2) / 100;
};

M.prototype.string = function() {
  return this.float().toFixed(2);
};

M.prototype.toString = function() {
  return this.string();
};

module.exports = function(n) {
  return new M(n);
};
