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
    var total = moolah.reduce(items, function(m, item) {
      return m.in(item.cost).times(item.qty);
    }, 10).out();
    expect(total).to.eql(345);
  });

  it('should return percentage of using decimal', function() {
    expect(moolah.in(50).percent(0.2).out()).to.eql(parseFloat(10));
  });

  it('should return percentage of', function() {
    expect(moolah.in(50).percent(20).out()).to.eql(parseFloat(10));
  });

  it('should return percentage left using decimal', function() {
    expect(moolah.in(50).discount(0.2).out()).to.eql(parseFloat(40));
  });

  it('should return percentage left', function() {
    expect(moolah.in(50).discount(20).out()).to.eql(parseFloat(40));
  });

  it('should auto round', function() {
    expect(moolah.in(0.111111).out()).to.eql(parseFloat(0.11));
  });

  it('should add', function() {
    expect(moolah.in(0.1).plus(0.2).out()).to.eql(parseFloat(0.3));
  });

  it('should subtract', function() {
    expect(moolah.in(0.3).less(0.1).out()).to.eql(parseFloat(0.2));
  });

  it('should multiply', function() {
    expect(moolah.in(10).times(2.5).out()).to.eql(parseFloat(25));
  });

  it('should divide', function() {
    expect(moolah.in(50).by(2).out()).to.eql(parseFloat(25));
  });

  it('should handle non number', function() {
    expect(moolah.in(NaN).out()).to.eql(0);
  });

  it('should convert/output as a 2 decimal places float', function() {
    expect(moolah.float(0.33333)).to.eql(0.33);
  });

  it('should convert/output as a string', function() {
    expect(moolah.string(0.2011)).to.eql('0.20');
  });

  it('should handle toString', function() {
    expect(moolah.in(0.3).less(0.1).toString()).to.eql('0.20');
  });

});
