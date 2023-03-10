// 2w-1
// var a = 1
// console.log(a)
// a = "안녕하세요"
// console.log(a)

// function test() {
//   console.log("helloworld")
// }
// test()

// var test2 = function() {
//   console.log("helloworld2")
// }

// test2()

// setTimeout(() => {
//   console.log("helloworld")
// }, 1000);

// console.log("hellowrold2")

// var test = require("./test2.js")
// test()

//2w-2
// var arr = ["사과", "배", "곶감"]
// arr.push("딸기")
// console.log(arr)

var person = {
  name: "김보미",
  age: 24,
  greeting : () => {
    this.name = "김보미2"
    console.log("안녕하세요." + this.name + "입니다.")
  }
}
person.greeting()