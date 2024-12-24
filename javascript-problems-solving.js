// 1. Count how many times each and every characters in the string excluding space inbetween

const str = "hare krishna hare krishna krishna krishna krishna hare hare";
let res = str.split(" ").join("");
console.log("RES : ", res);
let obj = {};

for (let x of res) {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
}

console.log("obj:", obj);
