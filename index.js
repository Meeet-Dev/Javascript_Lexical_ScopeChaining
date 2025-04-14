// 🌍 Global Execution Context
var globalVar = "I am global";

function logGlobal() {
  console.log(globalVar); // Accessible due to lexical scope
}
logGlobal();

// 🔍 Lexical Scope and Scope Chaining
function outer() {
  const outerVar = "I am in outer";

  function inner() {
    const innerVar = "I am in inner";
    console.log(outerVar); // Lexical scope allows access
    console.log(innerVar);
  }

  inner();
}
outer();

// 🧰 var vs let vs const
function testVarLetConst() {
  if (true) {
    var a = "var scoped to function";
    let b = "let scoped to block";
    const c = "const scoped to block";
    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(a); // Works (function-scoped)
  // console.log(b); // Error (block-scoped)
  // console.log(c); // Error (block-scoped)
}
testVarLetConst();

// ⏳ Temporal Dead Zone
function testTDZ() {
  // console.log(x); // ReferenceError due to TDZ
  let x = 10;
  console.log(x);
}
testTDZ();

// ❌ ReferenceError
function testReferenceError() {
  // console.log(notDeclared); // ReferenceError
}
testReferenceError();

// ❌ SyntaxError
// let let = 10; // SyntaxError: Unexpected token 'let'

// ❌ TypeError
function testTypeError() {
  const num = 5;
  try {
    num(); // TypeError: num is not a function
  } catch (e) {
    console.log("Caught a TypeError:", e.message);
  }
}
testTypeError();
