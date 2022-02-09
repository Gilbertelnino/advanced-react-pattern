import "./App.css";
import { RegularList } from "./RegularList";
import { SmallPeopleListItem } from "./people/SmallPeopleListItem";
import { LargePeopleListItem } from "./people/LargePeopleListItem";
import { NumberedList } from "./NumberedList";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";

// people data array
const people = [
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

// product data array
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
  {
    id: 6,
    name: "iMac",
    price: 2500,
    description: "A laptop that you can call home",
  },
  {
    id: 7,
    name: "iPad",
    price: 700,
    description: "A tablet that you can call home",
  },
  {
    id: 8,
    name: "iPad Pro",
    price: 1100,
    description: "A tablet that you can call home",
  },
];

function App() {
  return (
    <div className="App">
      <RegularList
        items={people}
        resourceName="person"
        itemComponents={SmallPeopleListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponents={LargePeopleListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponents={LargeProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponents={SmallProductListItem}
      />
    </div>
  );
}

export default App;
