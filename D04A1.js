console.log("Road Map Session Day 04 Activity task 1")
console.log(`Activity task link : https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing`);

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

console.log("Given objects 1 is :", obj1);
console.log("Given objects 2 is :", obj2);

let a = [];
for (obks in obj1) {
    a.push(obks + ":" + obj1[obks]);
}
a.sort();

let b = [];
for (obks in obj2) {
    b.push(obks + ":" + obj2[obks]);
}
b.sort()

var e = 0;
f = [];
g = [];
for (i = 0; i < a.length; i++) {
    d = a[i] === b[i];
    if (d === true) {
        e = e + 1;
        f.push(a[i]);
    } else {
        e = e - 1;
        g.push(a[i] + " & " + b[i]);
    }
}

if (e == a.length) {
    console.log("Matched properties of objects are ", f);
    console.log("Given objects are same");
} else {
    console.log("Unmatched properties of objects are ", g);
    console.log("Given objects are not same");
}
