//------------Top level await------

console.log('Exporting Module');
console.log(`Start Fetching Users`);
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log(`Finished  Fetching Users`);