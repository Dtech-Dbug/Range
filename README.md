# Range

Pythonic way of running for loops using Range function implemented in JavaScript. Cause- why not?

## Implementation

- Format :

```js
// Required argument
Range(limit);

// Optional arguments
Range(start, limit, step);
```

- **Start:** The start of the count. By default it is set to 0.
  To override the preset value pass an integer. Inclusive.

- **Limit:** The maximum you would want to count. This is a required argument.

- **Step:** The count of iteration. By default set to 1

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
