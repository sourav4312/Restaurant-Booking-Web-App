import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>From sizzling starters to indulgent desserts, our popular dishes are a celebration of flavor and creativity. Guests rave about our creamy Alfredo Pasta, perfectly grilled Herb Chicken, and signature Woodfired Pizzas loaded with farm-fresh toppings. Don’t miss our classic Tandoori Platter or the melt-in-your-mouth Cheesecake that keeps everyone coming back for more. Crafted by expert chefs using premium ingredients, each dish promises a memorable dining experience packed with taste, aroma, and authenticity.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
