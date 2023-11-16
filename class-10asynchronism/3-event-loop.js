// task
setTimeout(() => {
    console.log(2);
}, 2000 );

// Microtask
Promise.resolve().then(() =>  {
    console.log(4);
});

// Microtask
queueMicrotask(() => {
    console.log(3);
});

// call Stack
console.log(1);

// call Stack
for(let index = 0; index < 1000000; index++ ) {
    console.log(index);
}




