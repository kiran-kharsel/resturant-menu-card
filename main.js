// menu list data
const restaurantMenu = [
  {
    title: "Margherita Pizza",
    type: "Main Course",
    price: 8.99,
    // ingredients: ["Tomato Sauce", "Mozzarella", "Basil", "Olive Oil"],
    ingredients: "Tomato Sauce, Mozzarella, Basil, Olive Oil",
  },
  {
    title: "Mango Smoothie",
    type: "Beverage",
    price: 4.0,
    ingredients: ["Mango", "Yogurt", "Honey", "Ice"],
  },
  {
    title: "Vegetable Spring Rolls",
    type: "Starter",
    price: 5.0,
    ingredients: ["Cabbage", "Carrot", "Onion", "Soy Sauce", "Rice Paper"],
  },
  {
    title: "Grilled Salmon",
    type: "Main Course",
    price: 14.75,
    ingredients: ["Salmon Fillet", "Lemon", "Garlic Butter", "Herbs"],
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
  },
  {
    title: "Spaghetti Carbonara",
    type: "Main Course",
    price: 10.5,
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
  },
  {
    title: "Bruschetta",
    type: "Starter",
    price: 5.75,
    ingredients: ["Toasted Bread", "Tomatoes", "Garlic", "Basil", "Olive Oil"],
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
  },

  {
    title: "Iced Coffee",
    type: "Beverage",
    price: 3.5,
    ingredients: ["Coffee", "Milk", "Sugar", "Ice"],
  },
  {
    title: "Tomato Soup",
    type: "Starter",
    price: 4.25,
    ingredients: ["Tomatoes", "Garlic", "Onion", "Olive Oil", "Basil"],
  },
  {
    title: "Green Tea",
    type: "Beverage",
    price: 2.75,
    ingredients: ["Green Tea Leaves", "Hot Water", "Lemon"],
  },
  {
    title: "Chicken Biryani",
    type: "Main Course",
    price: 12.0,
    ingredients: [
      "Basmati Rice",
      "Chicken",
      "Yogurt",
      "Spices",
      "Mint",
      "Onions",
    ],
  },
  {
    title: "Orange Juice",
    type: "Beverage",
    price: 3.0,
    ingredients: ["Fresh Oranges"],
  },
  {
    title: "Caesar Salad",
    type: "Starter",
    price: 6.5,
    ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing"],
  },

  {
    title: "Chocolate Lava Cake",
    type: "Dessert",
    price: 5.25,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
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
  },
];




// elements 
const menuBtnList = document.querySelector('.menu-btns');
const menuList = document.querySelector('.menu-list')


// find meny types to crete button
const typeFilterdArr = restaurantMenu.filter((item, index, self) => {
    return index === self.findIndex((t) => t.type === item.type)
});





// create menu types buttons
typeFilterdArr.forEach((item) => {
    let btn = document.createElement('button');
    btn.classList.add('menu-type');
    btn.value = item.type;
    btn.innerText = item.type;
    menuBtnList.appendChild(btn);
    btn.addEventListener('click', function(){
        showMenu(item.type);
    })
})

// show all menus on page load

function showMenu(type){
    menuList.innerHTML = '';
    restaurantMenu.forEach((item) => {
        if(item.type === type){
        let panel = document.createElement('div');
        panel.classList.add('menu-panel');
        panel.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0WA3-hAfPNKRufqJie_XYizpsoZgWNHnOw&s" alt="">
        <div class="desc">
            <div>
                <p class="title">${item.title}</p>
                <p class="price">${item.price}$</p>
            </div>
            <p class="ingredients">${item.ingredients}</p>
        </div>
        `;
        menuList.appendChild(panel)
        }
    })
}