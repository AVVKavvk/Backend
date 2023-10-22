console.log(process);
console.log(process.stdin);
console.log(process.stdin.read);
let a = "vipin";
process.stdin.read(a);
console.log(a);

console.log(process.stdout);
process.stdout.write("vipin");
