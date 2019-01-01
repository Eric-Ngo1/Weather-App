//THESE FILES ARE SIMPLY FOR PRACTICE, IT CONTRIBUTES NOTHING TO FUNCTIONALITY
// OF THE PROGRAM

console.log('starting app');

setTimeout(() => {
  console.log('Inside of callback function');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0)

console.log('finishing app');
