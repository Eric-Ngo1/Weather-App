//THESE FILES ARE SIMPLY FOR PRACTICE, IT CONTRIBUTES NOTHING TO FUNCTIONALITY
// OF THE PROGRAM

var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Eric'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (user) => {
  console.log(user);
});
