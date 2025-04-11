import React, { useState } from "react";
import "./OurMenu.css";

const menuData = [
  {
    category: "Starters",
    items: [
      { id: 1, name: "Garlic Bread", price: 5, image: "/images/garlic-bread.avif" },
      { id: 2, name: "Bruschetta", price: 6, image: "/images/bruschetta.avif" },
      { id: 3, name: "Stuffed Mushrooms", price: 7, image: "/images/stuffed-mushrooms.avif" },
      { id: 4, name: "Spring Rolls", price: 8, image: "/images/spring-rolls.avif" },
      { id: 5, name: "Mozzarella Sticks", price: 6, image: "/images/mozzarella-sticks.avif" },
      { id: 6, name: "Nachos", price: 7, image: "/images/nachos.avif" },
      { id: 7, name: "Deviled Eggs", price: 5, image: "/images/deviled-eggs.avif" },
      { id: 8, name: "Chicken Wings", price: 9, image: "/images/chicken-wings.avif" },
      { id: 9, name: "Shrimp Cocktail", price: 10, image: "/images/shrimp-cocktail.jpg" },
      { id: 10, name: "Spinach Dip", price: 7, image: "/images/spinach-dip.jpg" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { id: 11, name: "Grilled Chicken", price: 12, image: "/images/grilled-chicken.jpg" },
      { id: 12, name: "Pasta Alfredo", price: 10, image: "/images/pasta-alfredo.jpg" },
      { id: 13, name: "Steak", price: 20, image: "/images/steak.jpg" },
      { id: 14, name: "Salmon", price: 18, image: "/images/salmon.jpg" },
      { id: 15, name: "Vegetable Stir Fry", price: 9, image: "/images/vegetable-stir-fry.jpg" },
      { id: 16, name: "Tacos", price: 11, image: "/images/tacos.jpg" },
      { id: 17, name: "Pizza", price: 15, image: "/images/pizza.jpg" },
      { id: 18, name: "Burger", price: 8, image: "/images/burger.jpg" },
      { id: 19, name: "Lasagna", price: 13, image: "/images/lasagna.jpg" },
      { id: 20, name: "BBQ Ribs", price: 19, image: "/images/bbq-ribs.jpg" },
    ],
  },
  {
    category: "Dessert",
    items: [
      { id: 21, name: "Chocolate Cake", price: 6, image: "/images/chocolate-cake.jpg" },
      { id: 22, name: "Ice Cream Sundae", price: 5, image: "/images/ice-cream-sundae.jpg" },
      { id: 23, name: "Cheesecake", price: 7, image: "/images/cheesecake.jpg" },
      { id: 24, name: "Brownie", price: 4, image: "/images/brownie.jpg" },
      { id: 25, name: "Tiramisu", price: 8, image: "/images/tiramisu.jpg" },
      { id: 26, name: "Coca-Cola", price: 2, image: "/images/coca-cola.jpg" },
      { id: 27, name: "Lemonade", price: 3, image: "/images/lemonade.jpg" },
      { id: 28, name: "Iced Tea", price: 3, image: "/images/iced-tea.jpg" },
      { id: 29, name: "Orange Juice", price: 4, image: "/images/orange-juice.jpg" },
      { id: 30, name: "Coffee", price: 3, image: "/images/coffee.jpg" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { id: 31, name: "Coca-Cola", price: 2, image: "/images/coca-cola.jpg" },
      { id: 32, name: "Lemonade", price: 3, image: "/images/lemonade.jpg" },
      { id: 33, name: "Iced Tea", price: 3, image: "/images/iced-tea.jpg" },
      { id: 34, name: "Orange Juice", price: 4, image: "/images/orange-juice.jpg" },
      { id: 35, name: "Coffee", price: 3, image: "/images/coffee.jpg" },
      { id: 36, name: "Coca-Cola", price: 2, image: "/images/coca-cola.jpg" },
      { id: 37, name: "Lemonade", price: 3, image: "/images/lemonade.jpg" },
      { id: 38, name: "Iced Tea", price: 3, image: "/images/iced-tea.jpg" },
      { id: 39, name: "Orange Juice", price: 4, image: "/images/orange-juice.jpg" },
      { id: 40, name: "Coffee", price: 3, image: "/images/coffee.jpg" },
    ],
  }
];

const OurMenu = () => {
  const [currentIndexes, setCurrentIndexes] = useState(menuData.map(() => 0));
  const [order, setOrder] = useState([]);

  const nextSlide = (categoryIndex) => {
    setCurrentIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      if (updatedIndexes[categoryIndex] < menuData[categoryIndex].items.length - 4) {
        updatedIndexes[categoryIndex] += 1;
      }
      return updatedIndexes;
    });
  };

  const prevSlide = (categoryIndex) => {
    setCurrentIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      if (updatedIndexes[categoryIndex] > 0) {
        updatedIndexes[categoryIndex] -= 1;
      }
      return updatedIndexes;
    });
  };

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
  };

  const handleRemoveItem = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const totalPrice = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="our-menu-layout">
      <div className="menu-sections">
        {menuData.map((section, categoryIndex) => (
          <div key={section.category} className="category-section">
            <h2>{section.category}</h2>
            <div className="menu-container">
              <button
                className="nav-btn left"
                onClick={() => prevSlide(categoryIndex)}
                disabled={currentIndexes[categoryIndex] === 0}
              >
                &#10094;
              </button>
              <div className="menu-wrapper">
                <div
                  className="menu-grid"
                  style={{
                    transform: `translateX(-${currentIndexes[categoryIndex] * 220}px)`,
                  }}
                >
                  {section.items.map((item) => (
                    <div key={item.id} className="menu-card">
                      <img src={item.image} alt={item.name} />
                      <div className="menu-details">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button className="add-btn" onClick={() => addToOrder(item)}>
                          Add to Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="nav-btn right"
                onClick={() => nextSlide(categoryIndex)}
                disabled={currentIndexes[categoryIndex] >= section.items.length - 4}
              >
                &#10095;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        {order.length === 0 ? (
          <p>Your order is empty.</p>
        ) : (
          <>
            <ul>
              {order.map((item, index) => (
                <li key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.name} - ${item.price}</span>
                    <button className="remove-btn" onClick={() => handleRemoveItem(index)}>✕</button>
                  </div>
                </li>
              ))}
            </ul>

            <hr style={{ margin: '20px 0' }} />
            <p style={{ fontWeight: '600', fontSize: '16px' }}>
              Total: ${totalPrice.toFixed(2)}
            </p>

            <button className="payment-btn">Proceed to Payment</button>
          </>
        )}
      </div>
    </div>
  );
};

export default OurMenu;
