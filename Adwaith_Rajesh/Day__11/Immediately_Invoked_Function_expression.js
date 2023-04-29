//-----------------Immediately invoked function expression

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again'); //This body is called Immediately invoked function expression
  const isPrivate = 23;
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate); //Will create block scope
console.log(notPrivate); // Does not create a block scope

//---Note : Here the Immediately invoked funcctio is not still used anyway beacuse a block of statemnet inside "{ }" can create a scope for private variables(privacy)..So inorder to create privately accessable varibles we nowadays do not relay on IIFe.

// It is still used now a days for executing this function only once ..And its most use case can be see in async javascript