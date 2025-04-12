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
      { id: 9, name: "Shrimp Cocktail", price: 10, image: "/images/shrimp-cocktail.avif" },
      { id: 10, name: "Spinach Dip", price: 7, image: "/images/spinach-dip.avif" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { id: 11, name: "Grilled Chicken", price: 275.00, image: "/images/grilled-chicken.avif" },
      { id: 12, name: "Pasta Alfredo", price: 260.50, image: "/images/pasta-alfredo.avif" },
      { id: 13, name: "Steak", price: 320.00, image: "/images/steak.avif" },
      { id: 14, name: "Salmon", price: 295.75, image: "/images/salmon.avif" },
      { id: 15, name: "Vegetable Stir Fry", price: 255.00, image: "/images/vegetable-stir-fry.avif" },
      { id: 16, name: "Tacos", price: 265.40, image: "/images/tacos.avif" },
      { id: 17, name: "Pizza", price: 270.99, image: "/images/pizza.avif" },
      { id: 18, name: "Burger", price: 259.00, image: "/images/burger.avif" },
      { id: 19, name: "Lasagna", price: 280.30, image: "/images/lasagna.avif" },
      { id: 20, name: "BBQ Ribs", price: 310.00, image: "/images/bbq-ribs.avif" },      
    ],
  },
  {
    category: "Dessert",
    items: [
      { id: 21, name: "Chocolate Cake", price: 120.00, image: "/images/chocolate-cake.avif" },
      { id: 22, name: "Ice Cream Sundae", price: 95.50, image: "/images/ice-cream-sundae.avif" },
      { id: 23, name: "Cheesecake", price: 105.75, image: "/images/cheesecake.avif" },
      { id: 24, name: "Brownie", price: 85.00, image: "/images/brownie.avif" },
      { id: 25, name: "Tiramisu", price: 110.00, image: "/images/tiramisu.avif" },
      { id: 26, name: "Apple Pie", price: 82.00, image: "/images/apple-pie.avif" },
      { id: 27, name: "Crème Brûlée", price: 84.25, image: "/images/creme-brulee.avif" },
      { id: 28, name: "Strawberry Shortcake", price: 87.40, image: "/images/strawberry-shortcake.avif" },
      { id: 29, name: "Lava Cake", price: 89.99, image: "/images/lava-cake.avif" },
      { id: 30, name: "Panna Cotta", price: 93.30, image: "/images/panna-cotta.avif" },           
    ],
  },
  {
    category: "Beverages",
    items: [
      { id: 31, name: "Coca-Cola", price: 2, image: "/images/coca-cola.avif" },
      { id: 32, name: "Lemonade", price: 3, image: "/images/lemonade.avif" },
      { id: 33, name: "Iced Tea", price: 3, image: "/images/iced-tea.avif" },
      { id: 34, name: "Orange Juice", price: 4, image: "/images/orange-juice.avif" },
      { id: 35, name: "Coffee", price: 3, image: "/images/coffee.avif" },
      { id: 36, name: "Milkshake", price: 5, image: "/images/milkshake.avif" },       
      { id: 37, name: "Chai Latte", price: 4, image: "/images/chai-latte.avif" },       
      { id: 38, name: "Mojito", price: 3, image: "/images/mojito.avif" },
      { id: 39, name: "Smoothie", price: 5.5, image: "/images/smoothie.avif" },         
      { id: 40, name: "Falooda", price: 3, image: "/images/falooda.avif" }
    ],
  }
];

  const OurMenu = () => {
    const [currentIndexes, setCurrentIndexes] = useState(menuData.map(() => 0));
    const [order, setOrder] = useState([]);

    const nextSlide = (categoryIndex) => {
      setCurrentIndexes((prevIndexes) => {
        const updatedIndexes = [...prevIndexes];
        if (updatedIndexes[categoryIndex] < menuData[categoryIndex].items.length - 3) {
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
                      transform: `translateX(-${currentIndexes[categoryIndex] * 260}px)`,
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
                  disabled={currentIndexes[categoryIndex] >= section.items.length - 3}
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
