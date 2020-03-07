const myObject = {
  name: "Alex",
  age: 18,
  address: "a road b building, c city.",
  [Symbol.iterator]: function () {
    let count = -1;
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: this.name,
              done: false
            }
          case 1:
            return {
              value: this.age,
              done: false
            }
          case 2:
            return {
              value: this.address,
              done: false
            }
          default:
            return {
              value: undefined,
              done: true
            }
        }
      }
    };
  }
}

for (let x of myObject) {
  console.log(x);
}