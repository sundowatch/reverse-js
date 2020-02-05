# reverse-value (Reverse Everything)

This library reverses all possible variables

### Variable types

- String
- Number
- Array
- Boolean

## Installation
<pre>npm install reverse-value</pre>


## Usage
#### reverse(value)
```javascript
const rev = require('reverse-value');

console.log(rev.reverse( 'qwe' ));      //  ewq
console.log(rev.reverse( 1992 ));       //  2991
console.log(rev.reverse( true ));       //  false
console.log(rev.reverse( false ));      //  true
console.log(rev.reverse( ['asd', 12, 'www', 'qwe'] ));      //  ['qwe', 'www', 12, 'asd']

console.log(rev.reverse( null ));       //  null    - Remains same
console.log(rev.reverse( undefined ));  //  undefined   - Remains same
console.log(rev.reverse( { a: 'asd', b: 'qwe' } ));       //  { a: 'asd', b: 'qwe' }    - Remains same
```
