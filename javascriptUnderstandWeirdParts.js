function testClosure(){
	var x = 4;
	function closeX(){
		return x;
	}
	return closeX;
}
var checkLocalX = testClosure();

function buildCoveTicketMaker( transport ){
	return function ( name ){
		alert(`get on the ${transport}, ${name}`);
	}
}

var getSub = buildCoveTicketMaker('sub')
var getBS = buildCoveTicketMaker('BS');
var getSG = buildCoveTicketMaker('SG');
getSub('mario')
getBS('bowser')
getSG("luigi")

function makeGreeting(language){
	return function(firstname, lastname) {
		if (language === 'en'){
			console.log('hello' + firstnae...)
		}
		if ( language === 'ese') {
			console.log('hola' + firstname...)
		}
	}
}

var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es');

greetEnglish('john', 'doe');
greetSpanish('carlos', 'souza');


promises...


let whencatloaded = loadImagePromised('cat3.jpg');
whenCatLoaded.then((img) => {
	let imgElement = document.createElement("img");
	imgElement.src = img.src;
	document.body.appendChild(imgElement);
})


callbackverysion
loadImageCallbacked('cat4.jpg',
	(error, img) => {
		let imgElement =
		documentcreateElement("img");
		imgElement.src = img.src;
		document.body.appendChild(imgElement);
	})



let addImg = (src) => {
	let imgElement = document.createElement('img');
	imgElement.src = src;
	document.body.appendChild(imgElement);
}


closeures


function buildTickMaker(trans){
	var passengerNumber = 0;
	return function ( name ) {
		passengerNumber++;
		alert(`string with ${trans} and ${name} and ${passengerNumber}`);
	}
}

var getSubTick = buildTickMaker('sub');

var x = 4;
var y = '4'

x.valueOf(); 4
y.valueOf() '4';

var b = new Number(6);

var o = function(){
	this.cat = cat;
	this.areas = areas;
};

cities = [[ca], [bfdbs], [hfds, fds, fs]];
twistera

o.prototype.valueOf = function(){

}


var list [list]
var hof = doc.byId('hof'),



var pers = {
	first: 'jon',
	last: 'doe',
	getfull(){
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}

var logName = function(lang1, land2) {
	console.log('logged: ' + this.getfull());
}

//above ^^^ fails

//make it work by pointing _this_ to person

var logPersonName = logName.bind(person);

logPersonName();

//alternateively

var logName = function(lang1, land2) {
	console.log('logged: ' + this.getfull());
}.bind(person);


(var logName = function(lang1, land2) {
	console.log('logged: ' + this.getfull());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
}).apply(person, ['en', 'es']);

var logPersonname = logname.bind(person);
logPersonname('en');



logName.call(person, 'en', 'es')
unlike bind which makes a copy of the function, CALL executes it.

So does apply, but that takes an array



func borrowing

var person2 {
	first: 'tom',
	last: 'hardy'
}

person.getFullname.apply(person)


//function currying, passing params to the bind...
//remember that bind creates a copy, so what happens when we pass params into it?

function mult(a, b){
	return a*b;
}

var multiplybytwo = mult.bind(this, 2); // if this were (this, 2, 3) then permanently a==2 and b ==3.  but for now just a ===2 


	//this is the same as


function mult2(b){
	var a = 2;
	return a*b;
}


functional programming
functional programming
functional programming
functional programming


var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for ( var i = 0; i < arr1.length i++ ) {
	arr2.pus(arr[i] * 2 ) { 

	}
}

console.log(arr2);



function mapForEach(arr, fn){

	var newArr = [];
	for ( var i = 0; i < arr.length; i++ ) { 
		newArr.push(
			fn(arr[i])
		)
	}
}

var arr3 = mapForEach(arr1, (item) => item * 2);
var arr4 = mapForEach(arr1, (item) => item > 2); --- SAME

console.log(arr3);
console.log(arr4);

var checkPastLimit = function(limiter, item) {    ---- SAME
	return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)); -- SAME <-- use currying bc 2 args are required, set 1 to default

var checkPastLimitSimplified = function(limiter){
	return function(limiter, item){
		return item > limiter;
	}.bind(this, limiter);


}

var arr6 = mapForEach(arr1, checkPastLimitSimplified(1));

var arr7 = _.filter([2,3,4,5,6,7], it => it % 2 === 0);



classical vs prototypal inheritance!
classical, best known and popular, in c# and java

VERBOSE.


prototypal

simple.
extensible.
flexible.
easy to understand.


var pers = {
	first: 'def'
	last: 'def',
	getFull(){
		retur this.first + ' '+ this.last;
	}

}


//DONT DO THE FOLLOWING EVER

var john = {
	firstnae: john
	lastname: 'doe',
}

john.__proto__ = person;
console.log(john.getFullName());


var jane = {
	firstname: 'jaen';
}

jane.__proto__ = person;
console.log(jane.getFullName())

----------

everything is an object (or primitive)!



var a = {}
var b = [];
var c = 
console.log(john.first)//john



REFLECTION AND EXTEND

for (var prop in john)//...also grabs prototype stuff... fix it with..
	if (john.hasOwnProperty(prop)){}


_.Extend(john, jane, jim);

^^^different from prototype because it truly places them onto the john object


hide big loadImageCallbacked

put book on its own row

.col-xs-


col-xs-10 col-xs-offset-1

col-sm-offset-0 overrides the xs things for small screens
hidden-sm, hidden-xs to hide div in small or xs mode

visible-md


NAMESPACE

jjj


node modules, making our own modules.
custom_hello.js
var hello = function() {
	console.log('hello!');
}

in order to expose this method and make it public, we need to write 
moduele.exports = hello;

then in app.js
var hello = require('./custon_hello');

hello() <- will work


custom_goodbye.js
exports.goodbye = function {
	console.log('bye!')
}

then in app.js....

var gb = require('./custom_goodbye')
gb.goodbye() <- will work
//alternatively do it all at once
require('./custom_goodbye').goodbye();


my_mod.js
var foo = function() {...}
var bar = function() {...}
var baz = function() {...}
//make two of them public.
exports.foo;
exports.bar;

in app.js
var myMod = require('./my_mod');
myMod.foo();
myMod.bar();
//baz is private and only avail in module


var http = require('http');
//var message = 'hey';
var makeRequest = function(message){
var options = {
	host: 'localhost', port: 8080, path: '/', method: 'POST'}

	var request = http.requrest(options, function(response){
		response.on('data', function(data){
			console.log(data);
		});
	});
	requrest.write(message);
	request.end()
}
module.exports = makeRequest;
var makeRequest

keyword NEW and function constructors 
function Person(firstName, lastName) {

	console.log(this) // {};
	this.firstName = firstName;
	this.lastName = lastName;
}


var lance = new Person('Lance', "Tschirhart"); // new is an operator, it's like an empty object created at the call
// that this points to, and at the end, that obj is returned from the fn AUTOMATICALLY
console.log(lance);



all fns have a prototype, it exists just for when you are using function constructors

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName;
}

//Person.prototype starts its life as an empty fn.
//
var lance = new Person('Lance', "Tschirhart") // that empty object created when we use new , 
//when we use new it sets the prototype of that empty object to the prototype property of
//the function that you then call.  Person.prototype, in this case

//later, I can decide to add more methods to the proto for lance and the other Persons.

Person.prototype.getFormalName = function() {
	return this.lastName + ', ' + this.firstName;
}


NOTE!   OFTEN, in good Javascript, props are set inside the fn constructor, but METHODS sit on the prototype.
They take up space, so we should only have one copy of them.











-- BABEL BREAK ---

