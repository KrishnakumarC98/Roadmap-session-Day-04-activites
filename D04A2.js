console.log("Road Map Session Day 04 Activity task 2")
console.log(`Activity task link : https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit?usp=sharing`);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  // console.log(`${xhr.status}, ${xhr.statusText}`)
  // const rawdata = xhr.response;
  // console.log(rawdata);
  const JSONdata = JSON.parse(xhr.response)
  // console.log(JSONdata);

  JSONdata.forEach((val, idx) => {
    console.log(`
        SI.NO : ${idx + 1},
        Flag : ${val.flags.png}`)
  }
  );
}