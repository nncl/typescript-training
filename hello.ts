console.log(`Hello
World :) Bye bye`);

// Destructuring o/
const obj = {first: "Caue", last: "Almeida"};
const {first: f} = obj;
console.log(f); // damn

const {first} = obj;
console.log(first); // shortcode

// Declaring default x value
function fn({x = 0}){
    console.log(x);
}

fn({x: 1});
