var reverseString = (str) => {
  var arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  console.log(arr.join(""));
};
reverseString("my name is Shahriar");

function reverseString2(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString2("my last name is Iqbal"));
