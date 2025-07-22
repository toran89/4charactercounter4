let textArea = document.getElementById("InputValue");

let remainWords = document.getElementById("inputRemaininNum");
let counter = 0;
textArea.addEventListener("input",function(){
counter = textArea.value;
let textAreaLength = counter.length;
console.log(counter);
console.log(textAreaLength);
// let result = remainWords.textContent = length;
// console.log(result);
remainWords.innerHTML = textAreaLength;
if (textAreaLength >= 15
) {
 textArea.value =  counter.slice(0,14);

 return;
}
})