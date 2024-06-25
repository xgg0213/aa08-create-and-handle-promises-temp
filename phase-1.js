// question 1: what is the impact of having the console.log in different places?
// question 2: is the solution below correct, especially the workout one?

function stretch() {
  // Your code here 
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log("done stretching"); 
      resolve(); // syntax is for fullfiling the promise, can treat resolve() as return;
    }, 1000)

    
  })
  
}

function runOnTreadmill() {
  // Your code here 
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500)

    
  })

  
}

function liftWeights() {
  // Your code here 
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
      console.log("done lifting weights");
      resolve();
    }, 2000)

    
  })

}

function workout() {
  // Your code here 
  stretch()
    .then(runOnTreadmill) // no need to invoke the function here because the .then takes in a function by default
    .then(liftWeights)
    .then(() => console.log("done working out"))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out