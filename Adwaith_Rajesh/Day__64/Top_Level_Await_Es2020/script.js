import * as shoppingCart from './shoppingCart.js';

console.log(`Importing Module`);
console.log(`Start Fetching`);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1) };
};

const lastPost = getLastPost(); // Always returns a promise
//console.log(lastPost);

//lastPost.then(last => console.log(last)); //Not very clean

const lastPost2 = await getLastPost();
console.log(lastPost2);

console.log(`Something`);

// Note : The code in importing module has to wait for for the code in exporting module to finish

/*
--------------------------------------------------------------------
-                  Top Level Await                                 -
-                                                                  -
-  Top level await will bock the code exection {like syncgronous}  -
- code just opsiite to async  , in modules it also block execution -
-  in importing module if exporting module has async await         -
-                                                                  -
-                                                                  -
--------------------------------------------------------------------

*/
