// Pradžiai užduotėlės su String'ais;
// Stringas kurį testuosime:
const sentence = "Petras Jonaitis";

// 1. Parašykite funkciją clearSpaces, kuri paima stringą, kaip argumentą ir grąžina stringą be tarpų;
const clearSpaces = (name) => name.replaceAll(" ", "");
const clearSpaces2 = (name) => name.split(" ").join("");
const clearSpaces3 = (name) => {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== " ") {
      result += name[i];
    }
  }
  return result;
};
// console.log(clearSpaces3(sentence));

// 2. Parašykite funkciją changeName, kuri paima stringą su vardu ir pavarde kaip argumentą ir sukeičia juos vietomis ir tada grąžina;
const changeName = (name) => name.split(" ").reverse().join(" ");
// console.log(changeName(sentence));

// 3. Parašykite funkciją deleteBoundaries, kuri paima stringą, kaip argumentą ir grąžina be pirmos ir paskutinės raidės;
const deleteBoundaries = (string) => string.substring(1, string.length - 1);
// console.log(deleteBoundaries(sentence));

// Užduotys su masyvais
// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
const arrDoubled = (numbers) => numbers.map((number) => number * 2);
function arrDoubled2(numbers) {
  let result = numbers.map(doubleNumber);
  return result;
}

function doubleNumber(number) {
  return number * 2;
}
// console.log(arrDoubled2(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// pvz arrMultiplied([5, 3, 1], 5) grąžina [25, 15, 5]
const arrMultiplied = (arr, multiplier) =>
  arr.map((number) => number * multiplier);
// console.log(arrMultiplied([5, 3, 1], 5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// pvz arrCountTwos([5, 2, 3, 1, 2, 2]) grąžina 3;
const arrCountTwos = (arr) => arr.filter((number) => number === 2).length;
// console.log(arrCountTwos([5, 2, 3, 1, 2, 2]));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfFirst = (arr, number) => arr.indexOf(number);
// console.log(arrIndexOfFirst([5, 2, 3, 1, 2, 2], 4));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
const arrIndexOfLast = (arr, number) => arr.lastIndexOf(number);
// console.log(arrIndexOfLast([5, 2, 3, 1, 2, 2], 2));

// 6. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

const minAndMaxNumbers = (arr) => {
  arr.sort((a, b) => a - b);
  return (str = `Mažiausas: ${arr[0]}, Didžiausas: ${arr[arr.length - 1]}`);
};
// console.log(minAndMaxNumbers([8, 5, 4, 2, 7, 1, 9, -2, 66]));

// 7. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
//reikalingi String ir Array metodai

const checkForLetters = (string, letter) => {
  let numberOfInstances = string.split("").filter((i) => i === letter).length;
  return (str = `Raidė “${letter}” sakinyje rasta ${numberOfInstances} kartus`); //aš jau čia nežaidžiau su žodžio 'kartus' galūne priklausomai nuo skaičiaus :)
};
// console.log(checkForLetters("Tadas nori namooooooooooo", "o"));

// 8. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atskirą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
let arr2 = [8, "Hello", "click", "u", 7, 4, "a", "a", 3, 6, "chair", , 10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

const filterNumbers = (arr) =>
  arr.filter((arrItem) => Number.isInteger(arrItem)).sort((a, b) => a - b);

// console.log(filterNumbers(arr2));

// 9. Sukurkite funkciją checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False
let arr1 = [2, 7, 6, 9, 5];

const checkIfAllSmaller = (arr, number) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= number) {
      result = false;
      break;
    }
  }
  return result;
};

// console.log(checkIfAllSmaller(arr1, 5));

// 10. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
  "Mažeikiai",
  "Jonava",
  "Utena",
];
//reikalingi String ir Array metodai

const filteredByLetter = (arr, letter) =>
  arr.filter((city) => city.toLowerCase().indexOf(letter.toLowerCase()) !== -1);

// console.log(filteredByLetter(citiesOfLithuania, "a"));
