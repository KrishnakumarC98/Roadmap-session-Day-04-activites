console.log("Road Map Session Day 04 Activity task 4.3");
console.log(`Activity task link : https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing`);

console.log("----------Task 4.3 Simple programs todo for condition, looping and array----------");

console.log(`----------Task 4.3.1 loop of seven call for triangle----------`);
a = [];
for (i = 1; i < 8; i++) {
    a.push("#");
    b = a.join("");
    console.log(b);
}

console.log(`----------Task 4.3.2 iterate through the string array and print it contents----------`);
var strarr = ["quick", "red", "green", "blue"];
for (i = 0; i < strarr.length; i++) {
    console.log(`array contents of the index ${i} ${strarr[i]}`);
}

console.log(`--------------------------------------------------`);
var myarray = [11, 22, 33, 44, 55];
for (i = 0; i < 5; i++) {
    // console.log(i);
}
console.log(`total elements in the given array is ${i}`);

let emptyarray = [];
console.log("Calling of emply array ", emptyarray);

console.log(`--------------------------------------------------`);
let food = ["dosa", "idlis", "vadas", "uttapama", "bananachips", "malabar parotta", "pizza", "cake", "sweets", "icecream", "coffee", "tea"];
console.log(`fifth element of given array is ${food[4]}`);
console.log(`lenth of the given array is ${food.length}`);

console.log(`--------------------------------------------------`);
let friends1 = ["Mari", "Maryjane", "Captian america", "Munnabai", "jeff", "aak chandran"];
console.log(`first element of friends array is ${friends1[0]}`);
friends1[0] = "Munnabai";
console.log(`first element of friends array after changing is ${friends1[0]}`);

console.log(`--------------------------------------------------`);
function datahandling(input) {
    utarr = [];
    for (var i = 0; i < input.length; i++) {
        utarr.push(input[i]);
        if (input[i] == "Captian america") {
            i = input.length;
        }
    }
    console.log(`elements of array until "captain america" are ${utarr}`);
}
datahandling(friends1);

console.log(`--------------------------------------------------`);
let friends = ["Mari", "Maryjane", "Captian america", "Munnabai", "Jeff", "Aak chandran"];
function datahandling1(input, name) {
    for (var i = 0; i < input.length; i++) {
        // console.log(input[i]);
        if (input[i] === name) {
            return (`Yes, Given name "${name}" is in friends list`);
        }
    }
}
let found = datahandling1(friends, "Mari");
console.log(found);

console.log(`--------------------------------------------------`);
// console.log(friends);
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
// console.log(friends2);

function arrmerg(input) {
    for (i = 0; i < friends2.length; i++) {
        // console.log(input[i]);
        friends.push(input[i])
    }
    friends.sort();
    console.log(`elemnts of friends merged array after sorting are ${friends}`);
}
arrmerg(friends2);

console.log(`--------------------------------------------------`);
console.log(`----------1. get the first item, middle item and last item of array----------`);
console.log("myarray is ", myarray);
console.log("first element of myarray is ", myarray[0]);
console.log("last element of myarry is ", myarray[myarray.length - 1]);
// myarray.push(66);
// console.log("myarrry after adding one element",myarray);
temp = myarray.length - 1;
if (temp % 2 == 0) {
    console.log("middle element of myarray is ", myarray[temp / 2]);
} else {
    console.log("middle element of myarray is ", myarray[(temp + 1) / 2]);
}

console.log(`----------2. add element to last and first of array----------`);
console.log(friends2);
friends2.push("Krishna")
console.log(`array after adding last element ${friends2}`);
friends2.unshift("Kumar")
console.log(`array after adding first element ${friends2}`);

console.log(`----------3. add Mr or Ms----------`);
mr_arr = [];
friends2.forEach((val) => {
    mr_arr.push(" Mr " + val);
    // console.log("Mr " + val);
})
console.log(`array values having title of Mr are ${mr_arr}`);

console.log(`----------4. concat array values----------`);
confriend = [];
friends2.forEach((val) => {
    confriend.push(val);
    cfm = confriend.join(",");
})
console.log(`concated array values is ${cfm}`);

console.log(`----------5. find friends name who has letter a----------`);
// console.log(friends2);
a_arr = [];
na_arr = [];
friends2.forEach((val) => {
    slt = val.split("");
    // console.log(slt);
    for (i = 0; i < slt.length; i++) {
        // console.log(slt[i]);
        if (slt[i] == "a") {
            i = slt.length - 1;
            a_arr.push(val);
        } else if (i == slt.length - 1) {
            na_arr.push(val);
        }
    }
})
console.log(`friends name having "a" letter are ${a_arr}`);
// console.log(`friends name does not having "a" letter are ${na_arr}`);

console.log(`----------6. avg length of friends name----------`);
sumlnth = 0;
friends2.forEach((val) => {
    a5 = val.length;
    // console.log(a5);
    // console.log(typeof a5);
    sumlnth = sumlnth + a5;

})
arrlnth = friends.length;
// console.log(`sum of individual length of names is ${sumlnth}`);
// console.log(`lenth of friends array is ${arrlnth}`);
console.log(`average length of all names is ${sumlnth / arrlnth}`);

console.log(`----------7. friends name starting with letter m----------`);
m_arr = [];
nm_arr = [];
friends1.forEach((val) => {
    slt = val.split("");
    // console.log(slt);  
    if (slt[0] == "M") {
        m_arr.push(val);
    } else {
        nm_arr.push(val);
    }
}
)
console.log(`friends name starts with letter M are ${m_arr}`);
// console.log(`friends name does not starts with letter m are ${nm_arr}`);

console.log(`----------8. find the name with max characters----------`);
maxarr = [];
temp1 = friends2[0].length;
friends2.forEach((val, idx) => {
    a5 = val.length;
    // maxarr.push(`${a5},${val}`);
    // console.log(a5,idx);
    if (a5 > temp1) {
        temp1 = a5;
        maxchr = val;
    }
})
// console.log(maxarr);
console.log(`max character name in the given array ${maxchr}`);

console.log(`----------9. find the name with min characters----------`);
minarr = [];
temp1 = friends2[0].length;
// console.log(temp1);
friends2.forEach((val, idx) => {
    a5 = val.length;
    // minarr.push(`${a5},${val}`);
    // console.log(a5,idx);
    if (a5 < temp1) {
        temp1 = a5;
        minchr = val;
    }
})
// console.log(maxarr);
console.log(`min character name in the given array ${minchr}`);

console.log(`--------------------------------------------------------`);
var friendsinfo = [6, 12, "mari", 4, true, "munnabai", "200", "captian america", 8, 10];
console.log("given array to do average ", friendsinfo);
sum = 0; divd = 0;
friendsinfo.forEach((val) => {
    // console.log(val);
    type = typeof val;
    // console.log(type);
    if (type == "number") {
        // console.log(val);
        sum = sum + val;
        // console.log("sum of numbers is ", sum);
        divd = divd + 1;
        // console.log("number of numbers added is ", divd);
        avgnum = (sum / divd);

        // console.log("type of added numbers is ",typeof avgnum);
    }
})
console.log("average of numbers in the given array ", avgnum);

console.log(`--------------------------------------------------------`);
var input = [
    ["001", 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataHandling1(input) {
    for (var i1 = 0; i1 < input.length; i1++) {
        // console.log(`${input[i1]}`);
        console.log("contents of array ", i1 + 1);
        for (var i2 = 0; i2 < input[i1].length; i2++) {
            console.log(`${input[i1][i2]}`);
        }
    }
}
dataHandling1(input);

console.log(`------------------------Objects--------------------------------`);
myobject = {
    1: "one",
    "11": 1,
    "name": "arun"
}
console.log("given object values is ", myobject);
console.log("calling of Key '11' causing error, because we can't set string or numeric value as variable")
console.log("calling of key 'name' results ", myobject.name);
myobject.ten = "ten";
console.log("given object values after adding given pair ", myobject);
company = {
    name1: "guvi",
    name2: "geek",
    door_no: "6",
    address: "IIT-M RP",
    city: "chennai",
}
// console.log(company);

console.log(`--------------------------------------------------------`);
Comapanies = [
    {
        name1: "guvi",
        name2: "geek",
        door_no: "6",
        address: "IIT-M RP",
        city: "chennai",
    },
    {
        name: "amazon",
        type: "inc",
        door_no: "31",
        address: "SP Infocity",
        city: "chennai",
    },
    {
        name: "google",
        parent: "alphabet",
        door_no: "34",
        address: "amphitheater parkway",
        city: "mountain view",
    },
    {
        name: "tesla",
        type: "inc",
        door_no: "32",
        address: "333 santana row",
        city: "san jose",
    },
]
console.log("Data iteration using object literals and array ", Comapanies);