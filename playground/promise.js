//THESE FILES ARE SIMPLY FOR PRACTICE, IT CONTRIBUTES NOTHING TO FUNCTIONALITY
// OF THE PROGRAM

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      // resolve('Hey. It worked!');
      reject('Unable to fulfill promise.');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Succes: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
