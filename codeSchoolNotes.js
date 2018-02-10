SELECT count(*)
FROM Movies;

//counts all rows regardless of null vals.  otherwise won't count the null


//these 4 only work with numbers
SELECT sum(colName)
FROM tableName

SELECT avg
FROM tableName

SELECT max
FROM tableName

SELECT min
FROM tableName

//can be combined in one statement.
SELECT max(tickets), min(tickets)
FROM Movies;

-----------------------------------


GROUP BY
//formula
SELECT col_name, aggFn(col_name)
FROM table_name
GROUP BY col_name;



SELECT genre, sum(cost)
FROM Movies
GROUP BY genre;

//gives a table of sum $ per genre


what if we only wanted genres that have more than 1 film?  (only one comedy movie, so filter it.)

SELECT genre, sum(cost)
FROM Movies
GROUP BY genre
HAVING COUNT (*) > 1;

formula:

SELECT col_name, aggFn(col_name)
FROM table_name
(optional) WHERE colName operator value
GROUP BY col_name
HAVING aggFn(colName) operator value;

--------------------------------------














+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

PROMISES, alternative to callbacks.

let results = getPollResultsFromServer('Sass vs. LESS'); <- page freezes until val is returned from this fn.
ui.renderSidebar(results);


to AVOID BLOCKING the main thread of exec, we write non-blocking code...

getPollResultsFromServer('Sass vs Less', function(results){
	ui.renderSidebar(results);
})

This is called continuation-passing style (CPS) async.   
We tell a fn how to continue exec by passing callbacks.  
It can grow into complicated nested code...checking for errors on every single callback.


This is a Promise.  It is an abstraction that lets us write async easier.
getPollResultsFromServer('Sass vs. Less')
	.then(ui.renderSidebar)
	.then(sendNotificationToServer)
	.then(doSomethingElseNonBlocking)
	.catch(function(error){
	console.log("Error: ", error);
	});


Let's build a constructor for the promise.

function getPoll(pollName){
	return new Promise(function(resolve, reject){ //<-- these 2 callbacks are known as HANDLERS. 
	//They're responsible for resolving or rejecting the Promise.

	//...code
	resolve(someValue) // called when the non-blocking code is done executing.

	//...code
	reject(someValue); // called when an error occurs;

	})
}


LIFECYCLE OF A PROMISE
when we create a new Promise() it is set to the "pending" state.
Then it can do 1 of 2 things: be resolved or rejected.

a promise does not represent a "result" but rather a FUTURE value, such as the EVENTUAL
result of an async operation.  for that reason, or fn no longer needs a callback as a second arg.

let fetchingResults = getPoll('Sass vs. less');
^^^//not the actual result, but a Promise object.



let's wrap the XMLHttpRequest object API within a Promise.  Calling the resolve() handler moves the Promise to a fulfilled state.


function getPoll(pollName){
	
	return new Promise(function(resolve, reject){
		let url = `/results/${pollName}`;
		let request = new XMLHttpRequest();
		request.open('GET', url, true);
		requesst.onload = function (){
			if (request.status >= 200 && request.status < 400) {
				resolve(JSON.parse(request.response)); //<=- call resolve() handler upon successful response, //moving the promise into a fullfilled state, and THEN we can read the results... with then()
			}
		};
		//...code
		request.send();
	});
};


let fetchingResults = getPoll('Sass vs. less');
fetchingResults.then(function(results){
	ui.renderSidebar(results);
})

//alternative syntax below without the fetchingResults temp var.

getPollResultsFromServer('Sass vs less')
	.then(function(results){
		ui.renderSidebar(results)j;
	});

	//if We need to, we can pass values from one THEN to another THEN.   
	//Let's filter by only those coming from orlando

getPollResultsFromServer('Sass vs less')
	.then(function(results){
	  return results.filter((result) => result.city === "Orlando");
	})
	.then(function(resultsFromOrlando){
	  ui.renderSidebar(resultsFromOrlando);
	});

	//above, the return value from one call to then...
	//becomes the arg to the following call to then...


REJECTING A PROMISE..
we call the reject() handler for:
- unsuccessful status codes
- when onerror event is triggered on our request object. 
 Both move the Promise to a rejected state.
 And in both cases we'll give reject() a new Error obj as an argument.

function getPoll(pollName){
	
	return new Promise(function(resolve, reject){
		//...code
		requesst.onload = function (){
			if (request.status >= 200 && request.status < 400) {
				resolve(JSON.parse(request.response));
			} else {
				reject(new Error(request.status));
			}
		};
		request.onerror = function () {
			reject(new Error("Error Fetching Results"));
		}
		request.send();
	});
};


CATCH

once an error occurs, execution moves immediately to the catch() function.  
None of the remaining then() are invoked.


getPollResultsFromServer('Sass vs less')
	.then(function(results){
	  return results.filter((result) => result.city === "Orlando");
	})
	.then(function(resultsFromOrlando){
	  ui.renderSidebar(resultsFromOrlando);
	})
	.catch(function(error){
		console.log("Error: ", error);
	});


MORE SUCCINCT SYNTAX:
pass fn args to then() instead of using anon fns.

function filterResults(results){//...}

let ui = {
	renderSidebar(filteredResults){//...}
};

getPollResultsFromServer("Sass vs Less")
	.then(filterResults)
	.then(ui.renderSidebar)
	.catch(function(error){
		console.log("Error: ", error);
	});











================================
NODE 4 MODULES
===============================
custom_hello.js
var hello = function() {
	console.log('hello');
}
module.exports = hello;

//app.js

var hello = require('./custom_hello');
hello();

//custom_goodbye.js.  
exports.goodbye = function() {
	console.log("bye!");
}
^^^we could set multiple methods as public with goodbye.

we could call it in one line.
require('./custom_goodbye').goodbye();


var http = require('http')

var messsage = "hey";
var options = {
	host: 'localhost', port: 8000.....
}
var request







====FLEXBOX 2 DISTRIBUTE SPACE=====


don't forget, display: flex;   is how to make a div a flex container.

the main axis is determined by flex-irection, such as rows, that shows where Start and End are

justify-content

flex-start (def)
flex-end|fcenter|space-between|space-around

margin and padding for fine tuning.

CHANGING ORDER OF ITEMS WITH continuation-passing

order: 0 (default) -1 moves left or up, +1 moves right or down.


FLEXBOX 3---...alignment.

cross-axis is perpend main axis.


align-items: stretch (default) items stretch to fill container
flex-start (align to top or left)|flex-end. (align to right or bottom)|center|baseline

----------------------------------------------


var q = $('ul.people li');

