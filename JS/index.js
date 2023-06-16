const data = [
  {
    name: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: "101",
    name: "Carla",
    lastName: "Harris",
    age: 23,
  },
  {
    name: "Astrid",
    lastName: "Castro",
    age: 15,
  },
  {
    id: "022",
    name: "Jonas",
    lastName: "Brother",
    age: 32,
  },
  {
    id: "003",
    name: "Carline",
    lastName: "Thomson",
    age: 23,
  },
  {
    id: "051",
    name: "Thomas",
    lastName: "You",
    age: 20,
  },
  {
    id: "055",
    name: "Luz",
    lastName: "Stella",
    age: 17,
  },
];

let filterObject = data.filter((item) => item.id && item.age > 18);
// filterObject = filterObject.filter((item) => item.age > 18);
// console.log("--->", filterObject);

let lowToHight = filterObject.sort((a, b) => a.age - b.age);
console.log("lowToHight", lowToHight);

let hightToLow = filterObject.sort((a, b) => b.age - a.age);
console.log("----> lowToHight", lowToHight);
