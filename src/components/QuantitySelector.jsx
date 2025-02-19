import { useState } from "react";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <span>Số lượng</span>
      <button
        className="px-2 py-1 border rounded hover:bg-gray-100"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="px-4">{quantity}</span>
      <button
        className="px-2 py-1 border rounded hover:bg-gray-100"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
