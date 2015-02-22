# Moolah

Moolah is a super simple math library specifically created for handling basic currency calculations for things like ecommerce. It offers:

- Handles/ouputs everything as floats with optional string output to 2 decimal places
- Provides simple routines for basic calculations, discounts, repeatable totalling etc
- 0.1 + 0.2 = 0.3


## API

```js
var moolah = require('moolah');

// Initialize and just output
moolah.in(50).out(); // 50

// Add
moolah.in(0.1).plus(0.2).out(); // 0.3

// Subtract
moolah.in(0.3).less(0.1).out(); // 0.2

// Multiply
moolah.in(50).times(2).out(); // 100

// Divide
moolah.in(100).by(2).out(); // 50

// Return percentage left over
moolah.in(50).discount(20).out(); // 40

// Return percentage left over using decimal
moolah.in(50).discount(0.2).out(); // 40

// Return percentage discount
moolah.in(50).percent(20).out(); // 10

// Return percentage discount using decimal
moolah.in(50).percent(0.2).out(); // 10

// Output as a 2 decimal places string
moolah.in(50.2).toString(); // '50.20'

// Process array of items and return total (initialized with 10)
var items = [
 { cost: 45, qty: 3 },
 { cost: 100, qty: 2 }
 ];
var total = moolah.reduce(items, function(m, item) {
  return m.in(item.cost).times(item.qty);
}, 10).out();  // 345
```
