// menu list data
const restaurantMenu = [
  {
    title: "Margherita Pizza",
    type: "Main Course",
    price: 8.99,
    ingredients: ["Tomato sauce","Mozzarella", "Basil", "Olive Oil", ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250221/original/pngtree-margherita-pizza-white-background-png-image_20491217.png",
  },
  {
    title: "Margherita Pizza",
    type: "Main Course",
    price: 8.99,
    ingredients: ["Tomato sauce","Mozzarella", "Basil", "Olive Oil", ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250221/original/pngtree-margherita-pizza-white-background-png-image_20491217.png",
  },
  {
    title: "Margherita Pizza",
    type: "Main Course",
    price: 8.99,
    ingredients: ["Tomato sauce","Mozzarella", "Basil", "Olive Oil", ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250221/original/pngtree-margherita-pizza-white-background-png-image_20491217.png",
  },
  {
    title: "Mango Smoothie",
    type: "Beverage",
    price: 4.0,
    ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
    imgSrc:
      "https://png.pngtree.com/png-vector/20240717/ourmid/pngtree-mango-smoothie-on-white-background-png-image_13127945.png",
  },
  {
    title: "Vegetable Spring Rolls",
    type: "Starter",
    price: 5.0,
    ingredients: ["Cabbage", "Carrot", "Onion", "Soy Sauce", "Rice Paper"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250125/original/pngtree-fresh-veggie-spring-rolls-png-image_20337670.png",
  },
  {
    title: "Grilled Salmon",
    type: "Main Course",
    price: 14.75,
    ingredients: ["Salmon Fillet", "Lemon", "Garlic Butter", "Herbs"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250123/original/pngtree-perfectly-grilled-salmon-with-garlic-butter-png-image_19322424.png",
  },
  {
    title: "Ice Cream Sundae",
    type: "Dessert",
    price: 4.5,
    ingredients: [
      "Vanilla Ice Cream",
      "Chocolate Syrup",
      "Whipped Cream",
      "Cherries",
      "Nuts",
    ],
    imgSrc:
      "https://png.pngtree.com/png-vector/20231013/ourmid/pngtree-ice-cream-sundae-png-image_10157149.png",
  },
  {
    title: "Spaghetti Carbonara",
    type: "Main Course",
    price: 10.5,
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20231005/ourmid/pngtree-spaghetti-carbonara-delicious-creamy-transparent-background-png-image_10193865.png",
  },
  {
    title: "Bruschetta",
    type: "Starter",
    price: 5.75,
    ingredients: ["Toasted Bread", "Tomatoes", "Garlic", "Basil", "Olive Oil"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20230927/original/pngtree-bruschetta-italian-food-png-image_13146228.png",
  },
  {
    title: "Beef Tacos",
    type: "Main Course",
    price: 9.25,
    ingredients: [
      "Tortillas",
      "Ground-Beef",
      "Cheddar Cheese",
      "Lettuce",
      "Tomato",
      "Salsa",
    ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250523/original/pngtree-traditional-beef-tacos-png-image_21060724.png",
  },

  {
    title: "Iced Coffee",
    type: "Beverage",
    price: 3.5,
    ingredients: ["Coffee", "Milk", "Sugar", "Ice"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20240312/original/pngtree-ice-coffee-png-image_14570208.png",
  },
  {
    title: "Tomato Soup",
    type: "Starter",
    price: 4.25,
    ingredients: ["Tomatoes", "Garlic", "Onion", "Olive Oil", "Basil"],
    imgSrc:
      "https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-traditional-mexican-tomato-soup-png-image_11670972.png",
  },
  {
    title: "Green Tea",
    type: "Beverage",
    price: 2.75,
    ingredients: ["Green Tea Leaves", "Hot Water", "Lemon"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20241028/original/pngtree-a-steaming-cup-of-green-tea-accompanied-by-leaves-png-image_16538255.png",
  },
  {
    title: "Chicken Biryani",
    type: "Main Course",
    price: 12.0,
    ingredients: [
      "Chicken",
      "Yogurt",
      "Spices",
      "Mint",
      "Onions",
      "Basmati Rice",
    ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20240830/original/pngtree-a-delicious-chicken-biryani-png-image_15893631.png",
  },
  {
    title: "Orange Juice",
    type: "Beverage",
    price: 3.0,
    ingredients: ["Fresh Oranges"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20250103/original/pngtree-fresh-orange-fruit-juice-clipart-illustration-with-transparent-background-png-image_19988837.png",
  },
  {
    title: "Caesar Salad",
    type: "Starter",
    price: 6.5,
    ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20240615/original/pngtree-veg-caesar-salad-png-image_15339918.png",
  },

  {
    title: "Chocolate Lava Cake",
    type: "Dessert",
    price: 5.25,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20240314/original/pngtree-chocolate-lava-cake-png-with-ai-generated-png-image_14587552.png",
  },
  {
    title: "Cheesecake",
    type: "Dessert",
    price: 6.0,
    ingredients: [
      "Cream Cheese",
      "Sugar",
      "Eggs",
      "Graham Cracker Crust",
      "Vanilla",
    ],
    imgSrc:
      "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-cheesecake-png-with-ai-generated-png-image_11571900.png",
  },
  {
    title: "Stuffed Mushrooms",
    type: "Starter",
    price: 6.0,
    ingredients: [
      "Mushrooms",
      "Cream Cheese",
      "Garlic",
      "Parsley",
      "Breadcrumbs",
    ],
    imgSrc:
      "https://png.pngtree.com/png-clipart/20240910/original/pngtree-quick-and-easy-vegetarian-stuffed-mushrooms-png-image_15980926.png",
  },
  {
    title: "Tiramisu",
    type: "Dessert",
    price: 6.75,
    ingredients: [
      "Ladyfingers",
      "Mascarpone",
      "Coffee",
      "Cocoa Powder",
      "Sugar",
    ],
    imgSrc:
      "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-tiramisu-cake-isolated-png-image_9242463.png",
  },
];

// elements
const menuBtnList = document.querySelector(".menu-btns");
const menuList = document.querySelector(".menu-list");
const menuType = document.querySelector(".menu");

// find meny types to crete button
const typeFilterdArr = restaurantMenu.filter((item, index, self) => {
  return index === self.findIndex((t) => t.type === item.type);
});

// create menu types buttons
typeFilterdArr.forEach((item) => {
  let btn = document.createElement("button");
  btn.classList.add("menu-type");
  btn.value = item.type;
  btn.innerText = item.type;
  menuBtnList.appendChild(btn);
  btn.addEventListener("click", function () {
    showMenu(item.type);
  });
});

function showMenu(type) {
  // add active class to button
  let btns = menuBtnList.querySelectorAll("button");
  btns.forEach((btn) => {
    if (btn.value == type) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // add title
  menuType.innerText = type;

  // clean menu list
  menuList.innerHTML = "";

  // create panel
  restaurantMenu.forEach((item) => {
    if (item.type == type) {
      let panel = document.createElement("div");
      panel.classList.add("menu-panel");
      panel.innerHTML = `
        <img src=${item.imgSrc} alt="">
        <div class="desc">
            <div>
              <p class="title">${item.title}</p>
              <p class="price">${item.price} $</p>
            </div>
            <p class="ingredients">${item.ingredients.join(', ')}</p>
        </div>
      `;
      menuList.appendChild(panel);
    }
  });
}

// on page load
showMenu("Main Course");
