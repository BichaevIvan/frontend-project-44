import readlineSync from 'readline-sync';
const tekst = (tekct) => {
console.log ("Welcome to the Brain Games!")
const name = readlineSync.question('May I have your name?');
console.log (`Hello, ${name}!`);
if (tekct !== undefined) console.log(tekct);
return name;
};
export default tekst;