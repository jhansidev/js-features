// generator functions with promises practices from here -->
/* Using a generator in combination with a Promise will allow us to write asynchronous code that feels like synchronous code.
What we want to do is wait for a promise to resolve and then pass the resolved value back into our generator in the .next() call.
 */
const myPromise = () => new Promise((resolve) => {
    resolve("our value is...");
});

function* gen() {
    let result = "";
    // returns promise
    yield myPromise().then(data => { result = data }) ;
    // wait for the promise and use its value
    yield result + 'john is under custody';
};

// Call the async function and pass params
const asyncFunc = gen();
const val1 = asyncFunc.next();
console.log(val1);
// call the promise and wait for it to resolve
// {value: Promise, done: false}
val1.value.then(() => {
    console.log(asyncFunc.next());
})
// Object { value: "our value is... <result data given>, done: false }