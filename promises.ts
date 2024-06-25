// Tea
// Add water
// After 3 second Add sugar
// After 4 second Add Tea Leaves
// After 5 second Add Milk
// after 3 second Tea is Ready

// promises .then().catch()

function makeChai(ingredients: string, delay: number) {
  let promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(ingredients);
    //   resolve("successfully...");
    reject("something went wrong!")
    }, delay);
  });
  return promise;
}

// promise chaining

console.log("Add Water...");
makeChai("Add Sugar...", 3000)
.then(() => {makeChai("Add Tea Leaves...", 4000)
.then(() => {makeChai("Add Milk...", 5000)
.then(() => {makeChai("Tea is Ready...", 3000)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))
    });
  });
});
