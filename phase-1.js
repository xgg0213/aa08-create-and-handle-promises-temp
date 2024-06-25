function stretch() {
  // Your code here 
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      resolve()
    }, 1000)

    console.log("done stretching")
  })
  
}

function runOnTreadmill() {
  // Your code here 
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500)

    console.log("done running on treadmill")
  })

  
}

function liftWeights() {
  // Your code here 
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
      resolve();
    }, 2000)

    console.log("done lifting weights")
  })

}

function workout() {
  // Your code here 
  stretch().then();
  runOnTreadmill().then();
  liftWeights().then();
  console.log("done working out")
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