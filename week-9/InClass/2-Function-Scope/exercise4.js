//using some of the language we learned today - can you explain why the following code is throwing an error?

let x = 10;

function f1() {
  console.log(x);
  let y = 20;
  console.log(y);
}

//console.log(f1()); // -> the function is called inside the console, so logged line 6
f1();
//console.log(y); // -> local variable, can be logged inside the function
