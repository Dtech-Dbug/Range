# range

Pythonic way of using Range function implemented in TypeScript. Cause- why not?

## Implementation

- Format :

```js
// Required argument
range(limit);

// Optional arguments
range(start, limit, step);

// start count is by default : 0;
// step count is by default : 1. i.e, unit iteration.
```

- **Start:** The start of the count. By default it is set to 0.
  To override the preset value pass an integer. (Inclusive).

- **Limit:** The maximum you would want to count. This is a required argument. The Limit argument is (Exclusive)
  **_i.e, range(3) will count from 0 to 2 - that is 3 indices : 0, 1, 2. Zero is preset start count.Check the `In Use` section to know how to override the preset values._**

- **Step:** The count of iteration. By default set to 1

## Installation

- Using npm
  `npm i range`

```js
//commonjs
const range = require("range");

//modules
import range from "range";
```

## In Use

```js
for (i of Range(3)) {
  console.log(i);
}
// 0, 1, 2
```

```js
for (i of Range(4, 8)) {
  console.log(i);
}
// 4, 5, 6, 7
```

```js
for (i of Range(4, 12, 2)) {
  console.log(i);
}
// 4, 6, 8, 10
```

## Report feedbacks, complaints, feature requests... 📩

- Reach out to me via twitter/linkedin (socials linked with Github)
- Or raise an issue for feature request or updates.
