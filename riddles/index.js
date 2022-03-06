// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
const reverseNumber = (number) =>
  parseInt(String(number).split("").reverse().join(""), 10);

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addEven = (array) =>
  array.filter((num) => !(num % 2)).reduce((x, y) => x + y);

console.log("2.", addEven(tab));
