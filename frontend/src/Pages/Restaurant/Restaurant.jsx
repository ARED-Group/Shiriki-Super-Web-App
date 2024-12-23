import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import avocadoToastImage from "../../assets/images/Avocado Toast.jpg";
import croissantImage from "../../assets/images/Egg & Cheese Croissant.jpg";
import pancakeImage from "../../assets/images/Pancakes.jpg";
import oatmealImage from "../../assets/images/Oatmeal Bowl.jpg";
import breakfastburritoImage from "../../assets/images/Breakfast Burrito.jpg";
import bagelImage from "../../assets/images/Bagel with Cream Cheese.jpg";
import whooperImage from "../../assets/images/whooper.jpeg";
import ceasarsaladImage from "../../assets/images/Caesar Salad.jpg";
import chickensandwichImage from "../../assets/images/chickensandwich.jpg";
import grilledcheesesandwichImage from "../../assets/images/Grilled Cheese Sandwich.jpg";
import spaghettiImage from "../../assets/images/Spaghetti Bolognese.jpg";
import veggiewrapimage from "../../assets/images/Veggie Wrap.jpg";
import frenchfriesImage from "../../assets/images/French Fries.jpg";
import onionringsImage from "../../assets/images/Onion Rings.jpg";
import chipsandsalsaImage from "../../assets/images/Chips & Salsa.jpg";
import pretzelsImage from "../../assets/images/Pretzels.jpg";
import mozzarellasticksImage from "../../assets/images/Mozzarella Sticks.jpg";
import popcornImage from "../../assets/images/Popcorn.jpg";
import cokeImage from "../../assets/images/Coke.jpg";
import milkshakeImage from "../../assets/images/Milkshake.jpg";
import icedteaImage from "../../assets/images/Iced Tea.jpg";
import smoothieImage from "../../assets/images/Smoothie.jpg";
import vanillaconeImage from "../../assets/images/Vanilla Cone.jpg";
import sundaeImage from "../../assets/images/Sundae.jpg";
import chocolatefudgeImage from "../../assets/images/Chocolate Fudge.jpg";
import strawberryscoopImage from "../../assets/images/Strawberry Scoop.jpg";


const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuCategories = {
    Breakfast: [
      {
        id: 1,
        name: "Egg & Cheese Croissant",
        price: "$3.99",
        img: croissantImage,
        description: "Fluffy eggs and melted cheese on a buttery croissant.",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Pancakes",
        price: "$5.49",
        img: pancakeImage,
        description: "Stack of fluffy pancakes with syrup.",
        rating: 4.7,
      },
      {
        id: 11,
        name: "Avocado Toast",
        price: "$4.99",
        img: avocadoToastImage,
        description: "Toasted bread topped with fresh avocado.",
        rating: 4.6,
      },
      
      {
        id: 12,
        name: "Oatmeal Bowl",
        price: "$3.49",
        img: oatmealImage,
        description: "Warm oatmeal with fresh fruits and honey.",
        rating: 4.8,
      },
      {
        id: 13,
        name: "Breakfast Burrito",
        price: "$5.99",
        img: breakfastburritoImage,
        description: "Scrambled eggs, cheese, and veggies in a tortilla.",
        rating: 4.5,
      },
      {
        id: 14,
        name: "Bagel with Cream Cheese",
        price: "$2.99",
        img: bagelImage,
        description: "Fresh bagel served with cream cheese.",
        rating: 4.4,
      },
    ],
    Lunch: [
      {
        id: 3,
        name: "Whopper",
        price: "$6.99",
        img: whooperImage,
        description: "Flame-grilled beef patty with fresh toppings.",
        rating: 4.6,
      },
      {
        id: 4,
        name: "Chicken Sandwich",
        price: "$5.99",
        img: chickensandwichImage,
        description: "Crispy chicken fillet with lettuce and mayo.",
        rating: 4.4,
      },
      {
        id: 15,
        name: "Caesar Salad",
        price: "$4.99",
        img: ceasarsaladImage,
        description: "Fresh romaine lettuce with Caesar dressing.",
        rating: 4.7,
      },
      {
        id: 16,
        name: "Grilled Cheese Sandwich",
        price: "$3.99",
        img: grilledcheesesandwichImage,
        description: "Toasty bread with melted cheese inside.",
        rating: 4.6,
      },
      {
        id: 17,
        name: "Spaghetti Bolognese",
        price: "$7.99",
        img: spaghettiImage,
        description: "Classic spaghetti with rich meat sauce.",
        rating: 4.8,
      },
      {
        id: 18,
        name: "Veggie Wrap",
        price: "$5.49",
        img: veggiewrapimage,
        description: "Fresh veggies wrapped in a tortilla.",
        rating: 4.5,
      },
    ],
    Snacks: [
      {
        id: 5,
        name: "French Fries",
        price: "$2.49",
        img: frenchfriesImage,
        description: "Golden and crispy fries.",
        rating: 4.8,
      },
      {
        id: 6,
        name: "Onion Rings",
        price: "$3.49",
        img: onionringsImage,
        description: "Crispy onion rings with dipping sauce.",
        rating: 4.5,
      },
      {
        id: 19,
        name: "Mozzarella Sticks",
        price: "$4.49",
        img: mozzarellasticksImage,
        description: "Cheesy mozzarella sticks with marinara.",
        rating: 4.7,
      },
      {
        id: 20,
        name: "Chips & Salsa",
        price: "$2.99",
        img: chipsandsalsaImage,
        description: "Crispy tortilla chips with fresh salsa.",
        rating: 4.6,
      },
      {
        id: 21,
        name: "Pretzels",
        price: "$3.29",
        img: pretzelsImage,
        description: "Warm and soft pretzels with salt.",
        rating: 4.5,
      },
      {
        id: 22,
        name: "Popcorn",
        price: "$1.99",
        img: popcornImage,
        description: "Buttery and fresh popcorn.",
        rating: 4.4,
      },
    ],
    Drinks: [
      {
        id: 7,
        name: "Coke",
        price: "$1.99",
        img: cokeImage,
        description: "Refreshing soft drink.",
        rating: 4.3,
      },
      {
        id: 8,
        name: "Milkshake",
        price: "$3.99",
        img: milkshakeImage,
        description: "Thick and creamy milkshake.",
        rating: 4.6,
      },
      {
        id: 23,
        name: "Iced Tea",
        price: "$2.49",
        img: icedteaImage,
        description: "Cool and refreshing iced tea.",
        rating: 4.5,
      },
      {
        id: 24,
        name: "Smoothie",
        price: "$4.99",
        img: smoothieImage,
        description: "Fruity and healthy smoothie.",
        rating: 4.7,
      },
    ],
    IceCream: [
      {
        id: 9,
        name: "Vanilla Cone",
        price: "$1.49",
        img: vanillaconeImage,
        description: "Classic vanilla ice cream cone.",
        rating: 4.7,
      },
      {
        id: 10,
        name: "Sundae",
        price: "$2.99",
        img: sundaeImage,
        description: "Rich sundae with chocolate syrup.",
        rating: 4.8,
      },
      {
        id: 27,
        name: "Chocolate Fudge",
        price: "$3.99",
        img: chocolatefudgeImage,
        description: "Decadent chocolate fudge ice cream.",
        rating: 4.6,
      },
      {
        id: 28,
        name: "Strawberry Scoop",
        price: "$2.49",
        img: strawberryscoopImage,
        description: "Fresh strawberry-flavored ice cream.",
        rating: 4.5,
      },
    ],
  };
  

  return (
    <div className="bg-gradient-to-br from-[#f0f4f8] to-[#d9e8fc] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Burger King Menu
          </p>
          <p className="mt-4 text-xl text-gray-600">
            Explore our delicious categories
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg shadow-md transition-transform duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-600 border border-blue-600"
              } hover:shadow-lg active:translate-y-[2px]`}
            >
              {category}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {selectedCategory}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
  {menuCategories[selectedCategory].map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm">
          <Star className="text-yellow-500 w-4 h-4" fill="currentColor" />
          <span className="text-gray-800 font-semibold">{item.rating}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <span className="text-base font-semibold text-gray-600">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <ShoppingCart className="mr-2 w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
