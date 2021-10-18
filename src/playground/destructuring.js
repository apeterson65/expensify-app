// const person = {
//   name: "Andrew",
//   age: 54,
//   location: {
//     city: "Tooele",
//     temp: 78,
//   },
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin",
//   },
// };
// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//Array destructuring

// const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [street, city = "Salt Lake City", state = "Utah", zip] = address;

// console.log(`You are in ${city} ${state}  .`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [item1, price1, price2, price3] = item;

console.log(`A ${item1} costs ${price3}.`);
