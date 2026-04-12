// const Student = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
//   habits: ["eating", "sleeping", "playing"]
// };

// console.log({ ...Student, name: Monish });


const user = {
  name: "sio",
  age: 30,
  isAdmin: true
}




const per = {
  [user.name]: 90

}
console.log(per);


// let obj = {
//   name: "Monish",
//   address: "Katmandu",
//   email: "shrestha.sumit1371@gmail.com",
// };

// lets create a nested object to understand deep clone




let obj = {
  name: "Monish",
  age: "Kathmandu",
  email: "shrestha.sumit1371@gmail.com",
  address: {
    city: "Kathmandu",
  },
};


for(let key in obj){
  console.log(key, obj[key]);
}


// Object.keys puts all keys in to array
console.log(Object.keys(obj));

// What object.entries does is it creates array of array
console.log(Object.entries(obj));

//
// let obj2 = Object.assign({age: 26}, obj);
// console.log("objectassigne:", obj2);

// deep clone

console.log(JSON.stringify(obj));
// console.log(JSON.parse(obj));

let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);


// JSON.stringify(obj); // Converts to Strings

// JSON.parse(obj); // it converts to real form


// optional Chaining

// computed properties






