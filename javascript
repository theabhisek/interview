compile,beble,memorymangemant,serverside, clint side 
let var const  @
callback function @
JavaScript closures @
SCOP in javaScript @
Arow Function @
This Keyword   @
Call /Apply /bind  @
Map/reduce/filter  @
Import Export   @
callbackhell   @
promise      @
event      @
event loop  @
asynchronous and synchronous   @
asyn and await   @
imediate invoke function @
hosting  @
JSON    @
slice/splice   @
first class function   @
first order function   @
higher order function    @
unary function    @
currying function    @
pure/impure function	   @
temporal dead zone     @
call stack     
callback queue
microtask queue
getter setter
itertor ,generator
LEXICAL ENVIRONRMENT
class
strict mode 
hasOwnProperty
timing featurs
host object /native object
error type -rangeError,ReferenceError: b is not defined,TypeError,synatxError,urierror,evalerror,internalError
time and date 
array properties
object properties
string properties
evel
protptype


/*#########################let and var and const###############################/
let and var ,const are used for variable and method declarations in JavaScript.
let and const have block scop. 

*/


/*##########################################callback function#############################################

A callback function can be defined as a function passed into another function as a parameter.its called callback.
In other words, we can say that a function passed to another function as an argument is referred to as a callback function.
 The callback function runs after the completion of the outer function. 
 It is useful to develop an asynchronous JavaScript code.*/
 
 function abhi(callback){
       console.log("hello i am not call back);
       callback() 
 }
 function shek(){
 console.log("hello i am call back")
 }
 abhi(shek)
 
 /*##############################################JavaScript closures#############################################
 
 A closure can be defined as a JavaScript feature in which the inner function has access to the outer function variable.
 In JavaScript,every time a closure is created with the creation of a function.
The closure has three scope chains listed as follows:
Access to its own scope.
Access to the variables of the outer function.
Access to the global variables. */

A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables.

function fun()  
{  
var a = 4; // 'a' is the local variable, created by the fun()  
function innerfun() // the innerfun() is the inner function, or a closure  
{  
return a;  
}  
return innerfun;  
}  
var output = fun();  
console.log(output());  
console.log(output());  
/*#################################################SCOP in javaScript#############################
The scope of a variable implies where the variable has been declared or defined in a JavaScript program.
There are two scopes of a variable:
Global Scope
Global variables, having global scope are available everywhere in a JavaScript code.
Local Scope
Local variables are accessible only within a function in which they are defined.
let and const have a block scop 
*/


/*####################################### Arow Function ###############################
Arrow functions were introduced in the ES6 version of JavaScript. When compared to the regular functions, it allows the developers to write functions more cleanly. It doesn't create its execution content but inherits this from the outer function where the arrow function is defined.
*/
let wish = () => console.log(‘Good Afternoon’);
wish();

/*###########################################################This Keyword ####################################################################

The ‘this’ keyword in JavaScript refers to the currently calling object. It is commonly used in constructors to assign values to object properties.
*/
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};
console.log(test.func());


/*#############################################################Call /Apply /bind#########################################################################
CALL: binds the this value, invokes the function, and allows you to pass a list of arguments.
The call method binds the this value to the function and executes the function. 
It takes the this value and a list of arguments as parameters.
Then, it returns the value returned by the function, which is called using the call method.
*/
function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}

test.call({num: 100}, 10, 20);
/*
APPLY: binds the this value, invokes the function, and allows you to pass arguments as an array.
The apply method binds the this value to the function and executes the function
. It takes the this value and a single array object as parameters, and it returns the value returned by the function, 
which is called using the apply method.
*/
function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}

test.apply({num: 100}, [1,2,3]);   
/*
BIND: binds the this value, returns a new function, and allows you to pass in a list of arguments.
The bind method binds the this value to the function and returns a new function.
 However, we still need to separately invoke the returned function
 The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

A good use of the bind function is when you have a particular function that you want to call with a specific this value.
 You can then use bind to pass a specific object to a function that uses a this reference..
*/
function test(arg){
 console.log(this.number, arg);
}
let bindedFn = test.bind({number: 99}, "argument");
bindedFn(); 

/*###################################  Map/reduce/filter################
MAP:
The map() method is used for creating a new array from an existing one, 
applying a function to each one of the elements of the first array.
in the function, only the array element is required.
 Usually some action is performed on the value and then a new value is returned.*/
var new_array = arr.map(function callback(element, index, array) {
  retrun element*2
}[, thisArg])

/*Reduce:
The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array.
*/


/*Filter
The filter() method takes each element in an array and it applies a conditional statement against it. 
If this conditional returns true, the element gets pushed to the output array. 
If the condition returns false, the element does not get pushed to the output array.
*/
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])
/*###########################################Import Export###############################################
Imports and exports help in writing modular code for our JavaScript applications.
 With the help of imports and exports, we can split a JavaScript code into multiple files in a project. 
 This greatly simplifies the application source code and encourages code readability.
 
*/
/*#######################################Callback Hell###################################################
Callback Hell:
	      Callback hell in Node.js is the situation in which we have complex nested callbacks.
	      In this, each callback takes arguments that have been obtained as a result of previous callbacks.
	       This kind of callback structure leads to lesser code readability and maintainability.
		We can avoid the callback hell with the help of Promises. 
		Promises in javascript are a way to handle asynchronous operations in Node.js.
		 It allows us to return a value from an asynchronous function like synchronous functions.
		When we return something from an asynchronous method it returns a promise which can be used to consume the final value
		 when it is available in the future with the help of then() method or await inside of async functions. 
		 The syntax to create a promise is mentioned below.
		 
		 const promise = new Promise(function(resolve, reject){
    				 // code logic
			});
		promise.then((res)=>{
		console.log(res});
		promise.catch((err)=>{
		console.log(err)}
		
/**############################################  Promise ####################################################	
	A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network 	error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending
	Before promises, callbacks were used to handle asynchronous operations. But due to the limited functionality of callbacks, using multiple callbacks to handle 	asynchronous code can lead to unmanageable code.

	Promise object has four states -

	Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
	Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
	Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
	Settled - This state represents that the promise has been either rejected or fulfilled.
	A promise is created using the Promise constructor which takes in a callback function with two parameters, resolve and reject respectively.


	Promises are a way to implement asynchronous programming in JavaScript(ES6 which is also known as ECMAScript-6)
	. A Promise acts as a container for future values.
	A Promise is created when we are unsure of whether or not the assigned task will be completed. The Promise object represents the eventual completion (or 		failure) of an async(asynchronous) operation and its resulting value. As the name suggests from real life itself, a Promise is either kept or broken. A Promise 		is always in one of the following states:

	fulfilled: Action related to the promise succeeded.
	rejected: Action related to the promise failed.
	pending: Promise is still pending i.e not fulfilled or rejected yet.
	settled: Promise has been fulfilled or rejected
	
	example:
	 const promise =new Promise((res,rej)=>{
	 if(0){
	 res("hello i am resolev")
	 }
	 esle{
	 rej("hello i am reject")}
	 }).then((res)=>{
	 console.log(res)}).catch((err)=>{console.log(err)}).finally(()=>{
	 console.log("hello i am finally")})

/*###############################################Promise All#######################################
Promise.all():
	The Promise.all() method takes an iterable of promises as input and returns a single Promise. 
	This returned promise fulfills when all of the input's promises
	fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
	It rejects when any of the input's promises rejects, with this first rejection reason
	
	const promise1 = Promise.resolve(3);
	const promise2 = new Promise((resolve, reject) => {
	  setTimeout(resolve,100,'23');
	});
	const promise3 = new Promise((resolve, reject) => {
	  setTimeout(resolve, 100, 'foo');
	});

	Promise.all([promise1, promise2, promise3]).then((values) => {
	  console.log(values);
	});
	// expected output: Array [3, 42, "foo"]
promise.allSettled:
	The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise.
	This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
	with an array of objects that describe the outcome of each promise.
	const promise1 = Promise.resolve(3);
	const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
	const promises = [promise1, promise2];

	Promise.allSettled(promises).
 	 then((results) => results.forEach((result) => console.log(result.status)));

	// expected output:
	// "fulfilled"
	// "rejected"

Promise.any():
	The Promise.any() method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises 	fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an 		AggregateError containing an array of rejection reasons.
	const promise1 = Promise.reject(0);
	const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
	const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

	const promises = [promise1, promise2, promise3];

	Promise.any(promises).then((value) => console.log(value));

	// expected output: "quick"
Promise.prototype.than():	
	The then() method returns a Promise. It takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise.
	const promise1 = new Promise((resolve, reject) => {
  	resolve('Success!');
	});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});

Promise.prototype.catch()
	The catch() method returns a Promise and deals with rejected cases only.
	 It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact,calling obj.catch(onRejected) internally calls obj.
	 then(undefined, onRejected)).
	 This means that you have to provide an onRejected function even if you want to fall back to an undefined result value - for example obj.catch(() => {}).
	 
Promise.prototype.finally()
	The finally() method of a Promise schedules a function, the callback function, to be called when the promise is settled. Like then() and catch(), it immediately 	returns an equivalent Promise object, allowing you to chain calls to another promise method, an operation called composition.
	function checkMail() {
	  return new Promise((resolve, reject) => {
	    if (Math.random() > 0.5) {
      	resolve('Mail has arrived');
   	 } else {
      	reject(new Error('Failed to arrive'));
   		 }
  	});
	}

	checkMail()
	  .then((mail) => {
	    console.log(mail);
	  })
	  .catch((err) => {
	    console.error(err);
	  })
	  .finally(() => {
	    console.log('Experiment completed');
	  });
	This lets you avoid duplicating code in both the promise's then() and catch() handlers.
		 
Promise.race()
	The Promise.race() method takes an iterable of promises as input and returns a single Promise. 
	This returned promise settles with the eventual state of the first promise that settles.	 
	 const promise1 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 500, 'one');
	});

	const promise2 = new Promise((resolve, reject) => {
  	setTimeout(resolve, 100, y);
	});

	Promise.race([promise1, promise2]).then((value) => {
  	console.log(value);
  	// Both resolve, but promise2 is faster
	});
	// expected output: "two"

Promise.reject()
	The Promise.reject() method returns a Promise object that is rejected with a given reason.
	function resolved(result) {
 	 console.log('Resolved');
	}

	function rejected(result) {
  	console.error(result);
	}

	Promise.reject(new Error('fail')).then(resolved, rejected);
	// expected output: Error: fail
Promise.resolve()
	The Promise.resolve() method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable, 		Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

	This function flattens nested layers of promise-like objects (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer — a 		promise that fulfills to a non-thenable value.
	const promise1 = Promise.resolve(123);

	promise1.then((value) => {
	  console.log(value);
	  // expected output: 123
	});


#################################################### event ###############################################

	The event loop is a mechanism that allows JavaScript to perform non-blocking operations. 
	When an asynchronous task is started.
	The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue.
	 If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack,
	 which effectively runs it.
	Such an iteration is called a tick in the Event Loop. Each event is just a function callback	
	
###################################################asynchronous and synchronous###################################	
	Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. 
	Tasks can run simultaneously. 
	Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.
	
############################################# async and await ###################################

	Because it has a single thread that's why it can only execute one command at a time and the other commands need to wait for executing 
	before the running command executes.		
	An async function is a function declared with the async keyword, and the await keyword is permitted within it. 
	The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
	avoiding the need to explicitly configure promise chains

################################hosting ###################################
Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.
 Remember that JavaScript only hoists declarations, not initialisation.
 This hoisting makes functions to be safely used in code before they are declared.

####################################JSON #################################
json stend for javascript object notesion  json is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford.
 It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json;
 Parsing: Converting a string to a native object
 	JSON.parse(text);
 	
Stringification: converting a native object to a string so it can be transmitted across the network.
	JSON.stringify(object);
	
#####################################Slice########################################3
The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
Note: Slice method don't mutate the original array but it returns the subset as a new array.
Some of the examples of this method are,

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]	

#########################################splice#############################################
The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.	
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

Splice method modifies the original array and returns the deleted array.

##################################### first class function##########################
In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.  
const handler = () => console.log("This is a click handler function");







###################################temporal dead zone ###############################
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}

#####################################first order function #########################
First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
const firstOrder = () => console.log("I am a first order function!");

######################################higher order function ########################
Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => Return FirstOrderFunc();
higherOrder(firstOrderFunc);

###############################unary function ###########################
Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function



############################################Currying functin ##########################
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
Let's take an example of n-ary function and how it turns into a currying function,
Curried functions are great to improve code reusability and functional composition.
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1)(2)(3);


#####################################call backs need #########################
The callbacks are needed because javascript is an event driven language. 
That means instead of waiting for a response javascript will keep executing while listening for other events. 
Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.


###############################regular expression###############################	
A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,


#############################################getter setter#######################
setter:
In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value

GETTER:
Getters give you a way to define a property of an object, but they do not calculate the property's value until it is accessed. A getter defers the cost of calculating the value until the value is needed.

Getters and setters are used to protect your data, particularly when creating classes. For each instance variable, a getter method returns its value while a setter method sets or updates its value. Given this, getters and setters are also known as accessors and mutators, respectively.
Getters and Setters play an important role in retrieving and updating the value of a variable outside the encapsulating class. A setter updates the value of a variable, while a getter reads the value of a variable
##################################microTask queue#########################################
Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc


Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue. The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

###################################heap memory###############
Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

			####################evel############
			
The eval() function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

###############################protoptype#####################
Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

















