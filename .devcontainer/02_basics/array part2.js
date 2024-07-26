
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//ye ... spread operator hai ye sbko ek sath le aata hai bina array ko read kiye failaa dena matlab

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // saare array jo bhi array ke andar hai jitne bhi hai sbko ek array me convert kr dega
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//check krta hai ki ye array hai ki nahi
console.log(Array.from("Hitesh"))
//is se ye ise array bna dega
console.log(Array.from({name: "hitesh"})) // interesting ab ye empty return krra hai kyuki ye curly brackets ke andar vala  read nahi kr paara hai 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//ye  .of in teeno score koek arrayme conver krdega
