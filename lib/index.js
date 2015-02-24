
var M = function() {
  this.me = 0;
};
M.prototype.reduce = function(array, fn, init) {
  var self = this;
  var tally = this.in(init);

  array.forEach(function(i) {
    var m  = Object.create(self);
    var sub = fn.call(self, m, i).out();

    tally.plus(sub);
  });
  return this;
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
  this.me += parseFloat(n) * 100;
  return this;
};

M.prototype.less = function(n) {
  this.me -= parseFloat(n) * 100;
  return this;
};

M.prototype.times = function(n) {
  this.me = this.me * parseFloat(n);
  return this;
};

M.prototype.by = function(n) {
  this.me = this.me / parseFloat(n);
  return this;
};

M.prototype.out = function(n) {
  if(n)
    this.in(n);
  return Math.round(this.me, 2) /100;
};

M.prototype.float = function(n) {
  return this.out(n);
};

M.prototype.string = function(n) {
  if(n)
    this.in(n);
  return this.out().toFixed(2);
};
M.prototype.toString = function() {
  return this.out().toFixed(2);
};

module.exports = new M();
