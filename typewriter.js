const sentence = "hello there from lighthouse labs";
let num = 0;
let n = sentence.length * 50 + 10;

const typewriter = function(sentence) {
  for (const char of sentence) {
    num += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, num);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, n);
};
console.log(typewriter(sentence));




