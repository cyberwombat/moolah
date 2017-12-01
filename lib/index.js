
class M {
  constructor (n) {
    this.me = parseFloat(n || 0) * 100
  }

  reduce (array, fn, init) {
    const self = this
    const tally = this.in(init)

    array.forEach(i => {
      const m = n => {
        return new M().in(n)
      }
      const sub = fn.call(self, m, i)
      tally.plus(sub ? sub.float() : 0)
    })
    return this
  }

  load (n) {
    return typeof n === 'object' ? n.float() : parseFloat(n || 0)
  }

  discount (n) {
    const d = this.me * ((n < 1) ? n : n / 100)
    this.me = this.me - d
    return this
  }

  percent (n) {
    const d = this.me * ((n < 1) ? n : n / 100)
    this.me = d
    return this
  }

  in (n) {
    this.me = parseFloat(n || 0) * 100
    return this
  }

  plus (n) {
    this.me += this.load(n) * 100
    return this
  }

  less (n) {
    this.me -= this.load(n) * 100
    return this
  }

  times (n) {
    this.me = this.me * this.load(n)
    return this
  }

  by (n) {
    this.me = this.me / this.load(n)
    return this
  }

  float () {
    return Math.round(this.me, 2) / 100
  }

  string () {
    return this.float().toFixed(2)
  }

  toString () {
    return this.string()
  }
}
module.exports = (n) => {
  return new M(n)
}
