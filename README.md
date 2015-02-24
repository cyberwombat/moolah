# Moolah

Moolah is a super simple math library specifically created for handling basic currency calculations for things like ecommerce. It offers:

- Handles/ouputs everything as floats with optional string output to 2 decimal places
- Provides simple routines for basic calculations, discounts, repeatable totalling etc
- 0.1 + 0.2 = 0.3

*Note:* This is an evolving work in progress. API likely to change.

## API

```js
var moolah = require('moolah');

// Initialize and just output as 2 dec rounded float
moolah(0.3333).float(); // 0.33

// Initialize and just output as 2 dec string
moolah(0.3333).string(); // '0.33'

// Add
moolah(0.1).plus(0.2).float(); // 0.3

// Subtract
moolah(0.3).less(0.1).float(); // 0.2

// Multiply
moolah(50).times(2).float(); // 100

// Divide
moolah(100).by(2).float(); // 50

// Return percentage left over
moolah(50).discount(20).float(); // 40

// Return percentage left over using decimal
moolah(50).discount(0.2).float(); // 40

// Return percentage discount
moolah(50).percent(20).float(); // 10

// Return percentage discount using decimal
moolah(50).percent(0.2).float(); // 10

// Add, subtract, multiply or divide using instances
moolah(10).plus(moolah(2)).float(); // 20

// Process array of items and return total (initialized with 10)
var items = [
 { cost: 45, qty: 3 },
 { cost: 100, qty: 2 }
 ];
var total = moolah.reduce(items, function(m, item) {
  return m(item.cost).times(item.qty);
}, 10).float();  // 345
```
