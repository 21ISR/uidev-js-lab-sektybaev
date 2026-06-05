const sentence = "  javascript — это просто!  ";
const trimm = sentence.trim();
const firstl = trimm[0].toUpperCase();
const rest = trimm.slice(1);
console.log(firstl + rest);


const lastname = "Иванов";
const firstname = "иван";
const group = "ИСР-21";
const avg = 4.75;
console.log(`студент ${lastname} ${firstname}, группа ${group}, средний балл: ${avg}`);


const date = "2025-03-15";
const parts = date.split("-");
const newDate = date.split("-").reverse().join(".");
console.log(newDate);



const role = "Node.js разработчик";
console.log(role.startsWith("Node"))
console.log(role.endsWith("разработчик"))


const numb = 42
const numbstr = String(numb);
console.log(numbstr.padStart(8, "0"));
