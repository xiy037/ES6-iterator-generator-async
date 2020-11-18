const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("TIMEOUT")
  }, 1000)
})

promise.then(res => console.log("RESOLVED", res))
.catch((err) => {
  throw err
  console.log("won't be called after throw")
}).catch(err => {
  console.log("REJECTED TWICE", err)
})