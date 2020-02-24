# 1. Set timeout as a promise

​
Create a function `wait`, that takes one paramer that is number of milliseconds and returns a promise.
​
I should be able to call it like this:
​

```js
wait(2000).then(() => {
  console.log("executed after 2 seconds");
});
```

# 2. Load script as a promise

​
Let's create a function `loadScript`.
​
I should be able to use it like this:
​

```js
loadScript("./my-module.js")
  .then(module => {
    console.log(module);
    helloWorld("joe");
  })
  .catch(e => {
    console.log(e);
  });
```

​
`helloWorld` is a function defined inside `my-module.js`.
​
Take a look at the `onload` event [here](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload), and the [onerror](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror).

# 3. Promise all

​
implement [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) functionality, let's call it `all`
