import React from 'react';

const getTotal = (cart) => {
  return cart.reduce((a, item) => a + (item.count * item.price), 0)
}

const Nav = ({activeTab, onTabChange, totalItems}) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? 'selected' : ''}`;

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass('items')}>
          <button onClick={() => onTabChange('items')}>Items</button>
        </li>
        <li className={itemClass('cart')}>
          <button onClick={() => onTabChange('cart')}>Cart</button>
        </li>
        <li className={itemClass('cart')}>
          <button onClick={() => onTabChange('cart')}>{totalItems} items($})</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
