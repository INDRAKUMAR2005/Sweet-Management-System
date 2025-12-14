import React, { useState } from 'react';
import './SweetCard.css';

const SweetCard = ({ sweet, onPurchase }) => {
  const [quantity, setQuantity] = useState(1);
  const isOutOfStock = sweet.quantity === 0;

  const handlePurchase = () => {
    if (quantity > 0 && quantity <= sweet.quantity) {
      onPurchase(sweet.id, quantity);
    }
  };

  return (
    <div className={`sweet-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      <div className="sweet-header">
        <h3>{sweet.name}</h3>
        <span className="category-badge">{sweet.category}</span>
      </div>
      <div className="sweet-details">
        <div className="price">${sweet.price.toFixed(2)}</div>
        <div className={`stock ${isOutOfStock ? 'stock-zero' : ''}`}>
          Stock: {sweet.quantity}
        </div>
      </div>
      <div className="purchase-section">
        <div className="quantity-selector">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={sweet.quantity}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(sweet.quantity, parseInt(e.target.value) || 1)))}
            disabled={isOutOfStock}
          />
        </div>
        <button
          className="btn-purchase"
          onClick={handlePurchase}
          disabled={isOutOfStock || quantity > sweet.quantity}
        >
          {isOutOfStock ? 'Out of Stock' : 'Purchase'}
        </button>
      </div>
    </div>
  );
};

export default SweetCard;


