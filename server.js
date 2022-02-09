const express = require("express");

const app = express();

app.use(express.json());

const currentUser = {
  name: "John",
  age: 30,
  hairColor: "brown",
  hobbies: ["biology", "football", "karate"],
};
let users = [
  {
    id: 1,
    name: "Bob",
    age: 30,
    hairColor: "brown",
    hobbies: ["biology", "football", "karate"],
  },
  {
    id: 2,
    name: "Sally",
    age: 25,
    hairColor: "blonde",
    hobbies: ["photography", "cooking", "coding"],
  },
  {
    id: 3,
    name: "Sam",
    age: 27,
    hairColor: "black",
    hobbies: ["photography", "cooking", "coding"],
  },
  {
    id: 4,
    name: "Sue",
    age: 22,
    hairColor: "red",
    hobbies: ["photography", "cooking", "coding"],
  },
  {
    id: 5,
    name: "Tim",
    age: 28,
    hairColor: "brown",
    hobbies: ["photography", "cooking", "coding"],
  },
  {
    id: 6,
    name: "Tom",
    age: 26,
    hairColor: "blonde",
    hobbies: ["photography", "cooking", "coding"],
  },
];

const products = [
  {
    id: 1,
    name: "iPhone",
    price: 600,
    description: "A phone that you can call home",
  },
  {
    id: 2,
    name: "Macbook",
    price: 1000,
    description: "A laptop that you can call home",
  },
  {
    id: 3,
    name: "Macbook Pro",
    price: 1500,
    description: "A laptop that you can call home",
  },
  {
    id: 4,
    name: "Macbook Air",
    price: 800,
    description: "A laptop that you can call home",
  },
  {
    id: 5,
    name: "Mac Pro",
    price: 2000,
    description: "A laptop that you can call home",
  },
];
// get current user
app.get("/current-user", (req, res) => {
  res.json(currentUser);
});
// get user by id
app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  res.json(user);
});

// post user by id
app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  users = users.map((user) => (user.id === parseInt(id) ? updatedUser : user));
  res.json(users.find((user) => user.id === parseInt(id)));
});

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// get product by id
app.get("/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  res.json(product);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
