//=========================================================== 1 =================================================================

// // const myObj = {
// //   marks: 0,

// //   get mark() {
// //     return this.marks;
// //   },

// //   set mark(value) {
// //     if (value < 0) {
// //       console.log("error");
// //     }
// //     else {
// //        this.marks = value
// //     }
// //   },
// // };
// // myObj.mark=9;
// // console.log(myObj.mark);

// const myObj = {
//     marks: 0,

//     set mark(value) {
//       if (value >= 0) {
//           this.marks = value
//         }
//         else {
//           console.log("error");
//       }
//     },
//   };
//   myObj.mark=9;
//   console.log(myObj.marks);

//=========================================================== 2 =================================================================

// const obj = {
//   userID: 0,
//   get user() {
//     return this.userID;
//   },
//   set user(value) {
//     if (this.userID === 0) {
//         this.userID = value;
//     }else {
//       console.log("already has been");
//     }
//   },
// };
// obj.user = 3;
// console.log(obj.user);

//=========================================================== 3 =================================================================

// const obj = {
//   id: 1,
//   username: "John",
//   password: "secret",
//   email: "john@email.com",
// };

// function hideValue(hidden, others) {return hidden === 'password' ? undefined : others}
// const change = JSON.stringify(obj, hideValue);
// console.log(change);

//=========================================================== 4 =================================================================

// const obj = {
//   count: 0,
//   get counter() {
//     return ++this.count;
//   },
// };

// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);
// console.log(obj.counter);

//=========================================================== 5 =================================================================

// class Obj {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.salary = 0;
// }
// }
// const newObj = new Obj(15, "bfbxhgj");
// newObj.salary = 100000
// console.log(newObj);

//=========================================================== 6 =================================================================

const myObj = {
    id: 1,
    name: 'rvjgvcrtryh',
    address: {
        city: 'Baku',
        street: 'U.Hajibayov'
    }
}
  
  function displayNestedobj(obj) {
    for(const key in obj){
      if(typeof obj[key]==="object" && obj[key]!==null)
      {console.log(`Key: ${key} and Value: (Nested obj)`);
      displayNestedobj(obj[key])
  
      }else{
       console.log(` Key: ${key} and Value: ${obj[key]}`);
      }
    } 
  }
  displayNestedobj(myObj);