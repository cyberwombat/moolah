const test = require('ava')
const moolah = require('../index.js')

test('should reduce an array of objects to a total', t => {
  const items = [{
    cost: 45,
    qty: 3
  }, {
    cost: 100,
    qty: 2
  }]
  const total = moolah().reduce(items, (m, item) => m(item.cost).times(item.qty), 10).float()
  t.is(total, 345)
})

test('should handle distinct instances', t => {
  const m1 = moolah(50)
  const m2 = moolah(100)
  t.is(m1.plus(100).float(), 150)
  t.is(m2.plus(100).float(), 200)
})

test('should return percentage of using decimal', t => {
  t.is(moolah(50).percent(0.2).float(), 10)
})

test('should return percentage of', t => {
  t.is(moolah(50).percent(20).float(), 10)
})

test('should return percentage left using decimal', t => {
  t.is(moolah(50).discount(0.2).float(), 40)
})

test('should return percentage left', t => {
  t.is(moolah(50).discount(20).float(), 40)
})

test('should auto round', t => {
  t.is(moolah(0.111111).float(), parseFloat(0.11))
})

test('should add', t => {
  t.is(moolah(0.1).plus(0.2).float(), parseFloat(0.3))
})

test('should add instances', t => {
  const m1 = moolah(2)
  const m2 = moolah(3)
  t.is(m1.plus(m2).float(), 5)
})

test('should subtract', t => {
  t.is(moolah(0.3).less(0.1).float(), parseFloat(0.2))
})

test('should subtract instances', t => {
  const m1 = moolah(5)
  const m2 = moolah(3)
  t.is(m1.less(m2).float(), 2)
})

test('should multiply', t => {
  t.is(moolah(10).times(2.5).float(), 25)
})

test('should multiply instances', t => {
  const m1 = moolah(5)
  const m2 = moolah(3)
  t.is(m1.times(m2).float(), 15)
})

test('should divide', t => {
  t.is(moolah(50).by(2).float(), 25)
})

test('should divide instances', t => {
  const m1 = moolah(6)
  const m2 = moolah(3)
  t.is(m1.by(m2).float(), 2)
})

test('should handle non number', t => {
  t.is(moolah(NaN).float(), 0)
})

test('should convert/output as a 2 decimal places float', t => {
  t.is(moolah(0.33333).float(), 0.33)
})

test('should convert/output as a string', t => {
  t.is(moolah(0.2011).string(), '0.20')
})

test('should handle toString', t => {
  t.is(moolah(0.3).less(0.1).toString(), '0.20')
})
