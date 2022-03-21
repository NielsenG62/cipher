const sentence = prompt("Enter a sentence...") ;
console.log(sentence);
let first = sentence.charAt(0)
let last = sentence.charAt(sentence.length-1)

function capitalize (){
  first = first.toUpperCase();
  last = last.toUpperCase();
  return first + last;
}

function swap () {
  return last + first;
}

function concatenate () {
// capitalize();
// swap();
return sentence.concat(swap());
}

function findMiddle () {
  let mid = Math.floor(sentence.length / 2)
  return sentence.concat(sentence.charAt(mid))
}

findMiddle()