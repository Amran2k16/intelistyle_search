const fs = require("fs");

// const obj = JSON.parse(fs.readFileSync("./test.json", "utf8"));
const obj = JSON.parse(fs.readFileSync("./intellistyledata.json", "utf8"));

const search = "black leggings";

const search_params = search.split(" ");

const result = obj.filter(item => {
  let matchFound = true;
  for (index in search_params) {
    matchFound =
      matchFound &&
      item.product_title
        .toUpperCase()
        .includes(search_params[index].toUpperCase());
  }
  return matchFound;
});

// res.send(JSON.stringify({ Hello: "world" }));

console.log(result.length);

// for (i = 0; i < search_params.length; i++) {}

// if (search_params.length == 1) {
//   console.log("1");

//     const result = obj.filter(
//   item =>
//     item.product_title.toUpperCase().includes(search_params[0].toUpperCase())
// );

// } else if (search_params.length >= 2) {
//   for (i = 0; i < search_params.length; i++) {
//     console.log(i);
//       const result = obj.filter(

//   }
// } else {
//   console.log("Not valid input");
// }
