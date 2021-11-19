import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const getTotal = (items) => {
  return items.reduce((a, item) => a + (item.count * item.price), 0)
}

function CartPage({items, onAddOne, onRemoveOne}) {
  return (
    items.length > 0 ? <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>-</button>
              <span className="CartItem-count">{item.count}</span>
              <button className="CartItem-addOne" onClick={() => onAddOne(item)}>+</button>
            </div>
          </Item>
        </li>
      ))}
      <span>Total: {getTotal(items)}</span>
    </ul> : 'Your cart is empty'
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
