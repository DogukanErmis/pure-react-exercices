import React, { useState } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { items } from './static-data';

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || { ...item, count: 0 };
    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
        />
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, cart }) => {
  switch (tab) {
    default:
    case 'items':
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case 'cart':
      return <CartPage items={cart} />;
  }
};

export default App;
