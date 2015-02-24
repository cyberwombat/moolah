var expect = require('chai').expect;
var moolah = require('../index.js');


describe('MiniMath library', function() {

  it('should reduce an array of objects to a total', function() {
    var items = [{
      cost: 45,
      qty: 3
    }, {
      cost: 100,
      qty: 2
    }];
    var total = moolah().reduce(items, function(m, item) {
      return m(item.cost).times(item.qty);
    }, 10).float();
    expect(total).to.eql(345);
  });

  it('should handle distinct instances', function() {
    var m1 = moolah(50);
    var m2 = moolah(100);
    expect(m1.plus(100).float()).to.eql(150);
  });

  it('should return percentage of using decimal', function() {
    expect(moolah(50).percent(0.2).float()).to.eql(10);
  });

  it('should return percentage of', function() {
    expect(moolah(50).percent(20).float()).to.eql(10);
  });

  it('should return percentage left using decimal', function() {
    expect(moolah(50).discount(0.2).float()).to.eql(40);
  });

  it('should return percentage left', function() {
    expect(moolah(50).discount(20).float()).to.eql(40);
  });

  it('should auto round', function() {
    expect(moolah(0.111111).float()).to.eql(parseFloat(0.11));
  });

  it('should add', function() {
    expect(moolah(0.1).plus(0.2).float()).to.eql(parseFloat(0.3));
  });

  it('should add instances', function() {
    var m1 = moolah(2);
    var m2 = moolah(3);
    expect(m1.plus(m2).float()).to.eql(5);
  });

  it('should subtract', function() {
    expect(moolah(0.3).less(0.1).float()).to.eql(parseFloat(0.2));
  });

  it('should subtract instances', function() {
    var m1 = moolah(5);
    var m2 = moolah(3);
    expect(m1.less(m2).float()).to.eql(2);
  });

  it('should multiply', function() {
    expect(moolah(10).times(2.5).float()).to.eql(25);
  });

  it('should multiply instances', function() {
    var m1 = moolah(5);
    var m2 = moolah(3);
    expect(m1.times(m2).float()).to.eql(15);
  });

  it('should divide', function() {
    expect(moolah(50).by(2).float()).to.eql(25);
  });

  it('should divide instances', function() {
    var m1 = moolah(6);
    var m2 = moolah(3);
    expect(m1.by(m2).float()).to.eql(2);
  });

  it('should handle non number', function() {
    expect(moolah(NaN).float()).to.eql(0);
  });

  it('should convert/output as a 2 decimal places float', function() {
    expect(moolah(0.33333).float()).to.eql(0.33);
  });

  it('should convert/output as a string', function() {
    expect(moolah(0.2011).string()).to.eql('0.20');
  });

  it('should handle toString', function() {
    expect(moolah(0.3).less(0.1).toString()).to.eql('0.20');
  });

});
