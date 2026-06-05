const grades = [4, 5, 3, 5, 2, 4, 5, 3];
const sum = grades.reduce((acc, grade) => acc + grade, 0);
const average = sum / grades.length;
console.log(average.toFixed(2));


const good = grades.filter(grade => grade > 3);
const gradeStr = good.map(grade => "Оценка:" + grade);
console.log(gradeStr);


const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
fruits.sort();
console.log(fruits.join(", "));



const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const cheap = products.filter(p => p.price < 10000);
console.log(cheap);



const names = products.map(p => p.name);
console.log(names);


const total = products.reduce((acc, p)=> acc + p.price, 0);
console.log(total);


const numbers = [12, 45, 7, 33, 18];
console.log(numbers.some(n => n > 40));
console.log(numbers.every(n => n > 5));