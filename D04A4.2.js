console.log("Road Map Session Day 04 Activity task 4.2");
console.log(`Activity task link : https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing`);

console.log("----------Task 4.2 Simple programs todo for operators----------");

console.log(`----------Task 4.2.1 square of a number----------`);
let a1 = 16;
console.log(`square of a given number ${a1} is`, a1 * a1);

//b4 = 27;
// console.log(`squareroot of a given number is `, Math.sqrt(a1));
// console.log(`cuberoot of a given number is `, Math.pow(b4,1/3));

console.log(`----------Task 4.2.2 swapping 2 numbers----------`);
let a2 = 5; let a3 = 6;
console.log(`Before swapping, values of a2 = ${a2}, a3 = ${a3}`);
let temp = a2; a2 = a3; a3 = temp;
console.log(`After swapping, values of a2 = ${a2}, a3 = ${a3}`);

console.log(`----------Task 4.2.3 addition of 3 numbers----------`);
let b1 = 77; let b2 = 9; let b3 = 58;
console.log(`addition of 3 given numbers ${b1}, ${b2}, ${b3} is `, b1 + b2 + b3);

console.log(`----------Task 4.2.4 celsius to fahrenheit conversion----------`);
let celsius = 12;
console.log(`farhenheit of the given celsius ${celsius} is `, (celsius * (9 / 5) + 32));

console.log(`----------Task 4.2.5 meter to miles----------`);
let meter = 1;
console.log(`Miles of the given meter ${meter} is `, (meter / 1609.34));

console.log(`----------Task 4.2.6 pounds to kg----------`);
let pound = 1;
console.log(`kg of the given pound ${pound} is `, pound / 2.20462);

console.log(`----------Task 4.2.7 calculate batting average----------`);
let b1score = 50; let b2score = 30; let b3score = 100;
console.log(`Batting average of given batting scores ${b1score},${b2score},${b3score} is `, (b1score + b2score + b3score) / 3);

console.log(`----------Task 4.2.8 calculate five test score and print their average----------`);
let ts1 = 18; let ts2 = 59; let ts3 = 37; let ts4 = 67; let ts5 = 34;
console.log(`average of the given test scores ${ts1}, ${ts2}, ${ts3}, ${ts4}, ${ts5} is `, (ts1 + ts2 + ts3 + ts4 + ts5) / 5);

console.log(`----------Task 4.2.9 power of any number x^y----------`);
let x1 = 5; let y1 = 3;
console.log(` ${x1} power of ${y1} is`, x1 ** y1);

console.log(`----------Task 4.2.10 calculate simple interest----------`);
let pi = 5000; let rate = 5; let noy = 2;
console.log("simplet interest of given values is ", pi * (1 + (rate / 100) * noy));

console.log(`----------Task 4.2.11 area of an equilateral triangle----------`);
ta = 4;
areaoftri = +((Math.sqrt(3) / 4) * ta * ta).toFixed(2);
console.log("area of equilateral triangle is ", areaoftri, typeof areaoftri);

console.log(`----------Task 4.2.12 area of an isolated triangle----------`);
tb = 4; th = 9;
console.log("area of isolated triangle is ", (tb * th) / 2);

console.log(`----------Task 4.2.13 volume of sphere----------`);
let rad = 2;
vol_sph = +((4 / 3) * (Math.PI) * rad * rad * rad).toFixed(2);
console.log("volume of sphers is ", vol_sph, typeof vol_sph);

console.log(`----------Task 4.2.14 volume of rectangular prism----------`);
let rb = 10; let rh = 15; let ph = 20;
ar_pr = rb * rh; vol_pr = (ar_pr * ph);
console.log(`voulme of rectanglular prism is`, vol_pr);

console.log(`----------Task 4.2.15 area of a triangle----------`);
let base = 4; height = 4;
console.log("area of triangle is ", base * height / 2);

console.log(`----------Task 4.2.16 actual cost and sold cost----------`);
AC = 100; SC = 90;
console.log("Discount on sale of product is", AC - SC);

console.log(`----------Task 4.2.17 circle diameter, circumference and area----------`);
radius = 5;
console.log("diameter of the circle is", +(radius * 2).toFixed(2));
console.log("Circumsance of cirecle is", +(2 * Math.PI * radius).toFixed(2));
console.log("area of circle is", +(Math.PI * radius * radius).toFixed(2));

console.log(`----------Task 4.2.18 arithmetic operation with two numbers----------`);
num1 = 54; num2 = 18;
console.log(`additon of given numbers ${num1}, ${num2} is `, num1 + num2);
console.log(`subraction of given numbers ${num1}, ${num2} is `, num1 - num2);
console.log(`multiplication of given numbers ${num1}, ${num2} is `, num1 * num2);
console.log(`division of given numbers ${num1}, ${num2} is `, num1 / num2);

console.log(`----------Task 4.2.19 Print asterisk pattern 5 times in muliple lines----------`);
console.log(`*****`); console.log(`*****`); console.log(`*****`); console.log(`*****`); console.log(`*****`);

console.log(`----------Task 4.2.20 calculate electricity bill----------`);
watts = 100 * 24 * 30; units = watts / 1000;
console.log("total payable by electricity consumber for April is ₹", units * 10);

console.log(`----------Task 4.2.21 program to calculate CGPA----------`);
let ec = 3; let ac = 5; let mc = 4;
let eg = 5; let ag = 8; let mg = 10;
let CGPA = (((ec * eg) + (ac * ag) + (mc * mg)) / (ac + ec + mc)).toFixed(4);
console.log("CGPA for the given subject credit & subject grade is ", CGPA);

